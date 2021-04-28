import "./VideoPage.css";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";
import PlayListadd from "./Assets/playlist_add.svg";
import Like from "./Assets/thumb_up_off.svg";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

export const VideoPage = () => {
  const { state, dispatch } = useVideoManagement();
  const { videoId } = useParams();
  console.log({ videoId });

  const newVideo = state.videos.filter((item) => item._id === videoId);

  const id = state.videos
    .filter((item) => item._id === videoId)
    .map((item) => item.videoId);

  const [requiredVideoId] = id;

  return (
    <div class="video-page-video-section">
      {newVideo.map((item) => {
        return (
          <div class="video-page-video-container">
            <div class="video-page-thumbnail">
              <Youtube
                videoId={requiredVideoId}
                opts={opts}
                className="react-youtube-player"
              />
            </div>

            <div class="video-page-video-bottom-section">
              <a href="#" class="video-page-channel-icon">
                <img
                  src={item.channelImage}
                  alt=""
                  class="video-page-channel-icon-image"
                />
              </a>
              <div class="video-page-video-details">
                <span class="video-page-video-title">{item.title}</span>
                <span class="video-page-channel-name">{item.creator}</span>
                <div class="video-page-video-view-data">
                  <span class="video-page-views">{item.views}views</span> •
                  <span class="video-page-date-posted">3daysAgo</span>
                  {/* <>View</Link> */}
                </div>
              </div>
              <div class="bottom-section-icons">
                <span class="icon-links">
                  <img src={PlayListadd} alt="Playlist" />
                </span>
                <span class="icon-links">
                  <img src={Like} alt="like" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <div class="video-wrapper">
    //   {/* hello */}
    //   <Youtube videoId={requiredVideoId} opts={opts} class="youtube-player" />
    // </div>
  );
};
