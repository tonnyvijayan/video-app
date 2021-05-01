import "./PlayList.css";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";

export function PlayList() {
  const { state } = useVideoManagement();
  return (
    <div>
      {state.currentUser.playLists.map((item) => {
        return (
          <div class="video-section">
            {/* <h2>{item.name}</h2> */}
            {item.videos.map((videoItem) => {
              return (
                <div class="video-container">
                  <Link to={`/videos/${videoItem._id}`} class="thumbnail">
                    <img
                      class="thumbnail-image"
                      src={videoItem.thumbnail}
                      alt=""
                    />
                  </Link>
                  <div class="video-bottom-section">
                    <span class="label card-label">{videoItem.duration}</span>

                    <a href="#" class="channel-icon">
                      <img
                        src={videoItem.channelImage}
                        alt=""
                        class="channel-icon-image"
                      />
                    </a>
                    <div class="video-details">
                      <span class="video-title">{videoItem.title}</span>
                      <span class="channel-name">{videoItem.creator}</span>
                      <div class="video-view-data">
                        <span class="views">{videoItem.views}views</span> •
                        <span class="date-posted">3daysAgo</span>
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
