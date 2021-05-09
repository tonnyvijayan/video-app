import "./VideoHome.css";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";

export const VideoHome = () => {
  const { state, dispatch } = useVideoManagement();
  return (
    <div class="video-section">
      {state?.videos?.map((item) => {
        return (
          <div class="video-container">
            <Link to={`/videos/${item._id}`} class="thumbnail">
              <img class="thumbnail-image" src={item.thumbnail} alt="" />
            </Link>
            <div class="video-bottom-section">
              <span class="finview-label finview-card-label">
                {item.duration}
              </span>

              <a href="#" class="channel-icon">
                <img
                  src={item.channelImage}
                  alt=""
                  class="channel-icon-image"
                />
              </a>
              <div class="video-details">
                <span class="video-title">{item.title}</span>
                <span class="channel-name">{item.creator}</span>
                <div class="video-view-data">
                  <span class="views">{item.views}views</span> •
                  <span class="date-posted">3daysAgo</span>
                  {/* <>View</Link> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* // another section */}
    </div>
  );
};
