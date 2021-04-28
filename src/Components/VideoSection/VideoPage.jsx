import "./VideoPage.css";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link } from "react-router-dom";
import PlayListadd from "./Assets/playlist_add.svg";
import Like from "./Assets/thumb_up_off.svg";
import { useState } from "react";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

export const VideoPage = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useVideoManagement();
  const { videoId } = useParams();
  console.log({ videoId });

  const newVideo = state.videos.filter((item) => item._id === videoId);

  const id = state.videos
    .filter((item) => item._id === videoId)
    .map((item) => item.videoId);

  const [requiredVideoId] = id;

  return (
    <div>
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
                  <span
                    class="icon-links"
                    onClick={() => setShow((prev) => true)}
                  >
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
        {/* modal */}
      </div>
      {/* modal */}

      <div
        class={`modal-container ${show ? "show" : null}`}
        id="modal-container"
      >
        <div class="modal">
          <h2>PlayList</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            odit corporis minima quibusdam odio est voluptatem sapiente nisi
            itaque doloribus voluptas a quae, fugiat temporibus aperiam. Ea
            ipsam optio soluta.
          </p> */}
          <div>
            <fieldset className="chekbox-container">
              <input type="checkbox" name="playListCheckBox" />
              <label htmlFor="playListCheckBox">PlayList1</label>
            </fieldset>

            <input
              type="text"
              placeholder="Create PlayList"
              className="create-playList-input"
            />
            <button className="create-playList-button">+</button>
          </div>
          <button
            class="button-primary-one"
            id="close-modal"
            onClick={() => setShow((prev) => false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
