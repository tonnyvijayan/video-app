import "./SavedList.css";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";

export function SavedList() {
  const { state } = useVideoManagement();
  return (
    <div class="savedlist-video-section">
      <h2 class="savedlist-section-title">Watch Later</h2>
      {state?.currentUser?.likedVideos?.map((item) => {
        return (
          <div class="savedlist-video-container">
            <Link to={`/videos/${item._id}`} class="savedlist-thumbnail">
              <img
                class="savedlist-thumbnail-image"
                src={item.thumbnail}
                alt=""
              />
            </Link>
            <div class="savedlist-video-bottom-section">
              <span class="savedlist-label card-label">{item.duration}</span>

              <a href="#" class="savedlist-channel-icon">
                <img
                  src={item.channelImage}
                  alt=""
                  class="savedlist-channel-icon-image"
                />
              </a>
              <div class="savedlist-video-details">
                <span class="savedlist-video-title">{item.title}</span>
                <span class="savedlist-channel-name">{item.creator}</span>
                <div class="savedlist-video-view-data">
                  <span class="savedlist-views">{item.views}views</span> •
                  <span class="savedlist-date-posted">3daysAgo</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
