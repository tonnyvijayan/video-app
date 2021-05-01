import "./PlayList.css";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";

export function PlayList() {
  const { state } = useVideoManagement();
  return (
    // <div>
    //   {state?.currentUser?.playLists?.map((item) => {
    //     return (
    //       <div>
    //         <h2>{item.name}</h2>
    //         {item?.videos?.map((videoItem) => {
    //           return <h2>{videoItem._id}</h2>;
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>

    <div class="playlist-videos">
      {state?.currentUser?.playLists?.map((item) => {
        return (
          <div class="playlist-video-section">
            <h2 class="playlist-section-title">{item.name}</h2>
            {item?.videos?.map((videoItem) => {
              return (
                <div class="playlist-video-container">
                  <Link
                    to={`/videos/${videoItem._id}`}
                    class="playlist-thumbnail"
                  >
                    <img
                      class="playlist-thumbnail-image"
                      src={videoItem.thumbnail}
                      alt=""
                    />
                  </Link>
                  <div class="playlist-video-bottom-section">
                    <span class="playlist-label card-label">
                      {videoItem.duration}
                    </span>

                    <a href="#" class="playlist-channel-icon">
                      <img
                        src={videoItem.channelImage}
                        alt=""
                        class="playlist-channel-icon-image"
                      />
                    </a>
                    <div class="playlist-video-details">
                      <span class="playlist-video-title">
                        {videoItem.title}
                      </span>
                      <span class="playlist-channel-name">
                        {videoItem.creator}
                      </span>
                      <div class="playlist-video-view-data">
                        <span class="playlist-views">
                          {videoItem.views}views
                        </span>{" "}
                        •<span class="playlist-date-posted">3daysAgo</span>
                        {/* <>View</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>

    // <div>
    //   This is PlayList Window
    //   <div>{JSON.stringify(state.currentUser)}</div>
    // </div>
  );
}
