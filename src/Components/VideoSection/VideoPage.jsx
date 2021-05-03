import "./VideoPage.css";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";
import { Link, useNavigate, Navigate } from "react-router-dom";
import PlayListadd from "./Assets/playlist_add.svg";
import PlayListCheck from "./Assets/playlist_check.svg";
import WatchLaterAdd from "./Assets/watch_later_not.svg";
import Like from "./Assets/thumb_up_off.svg";
import WatchLaterRemove from "./Assets/watch_later.svg";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthProvider";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

export const VideoPage = () => {
  const [show, setShow] = useState(false);
  const [playListName, setPlayListName] = useState("");
  const { state, dispatch, serverOperations } = useVideoManagement();
  const { login } = useAuth();
  const { videoId } = useParams();
  console.log({ videoId });
  const navigate = useNavigate();
  console.log("login on video page", login);

  const videosInPlayList = state?.currentUser?.playLists?.map((item) => item);
  const filteredArray = videosInPlayList?.filter((item) => {
    const filteringVIdeos = item.videos.filter(
      (videoItem) => videoItem._id === videoId
    );
    console.log({ filteringVIdeos });
    if (filteringVIdeos.length != 0) {
      return item;
    }
  });

  console.log({ videosInPlayList });
  console.log({ filteredArray });
  const videoInPlayList = filteredArray?.map((item) => item.name);
  const videoInWatchLater = state?.currentUser?.likedVideos?.map(
    (item) => item._id
  );
  console.log({ videoInWatchLater });
  console.log({ videoInPlayList });
  const newVideo = state.videos.filter((item) => item._id === videoId);

  const id = state.videos
    .filter((item) => item._id === videoId)
    .map((item) => item.videoId);

  const [requiredVideoId] = id;

  const checkFieldHandler = (playListId, event) => {
    console.log(playListId, event.target.checked);
    if (event.target.checked === true) {
      serverOperations({
        type: "ADD-VIDEO-TO-PLAYLIST",
        payload: { playListId, videoId },
      });
    } else if (event.target.checked === false) {
      serverOperations({
        type: "DELETE-VIDEO-FROM-PLAYLIST",
        payload: { playListId, videoId },
      });
    }
  };

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
                    onClick={() => {
                      return login === undefined || login === false
                        ? navigate("/login")
                        : setShow((prev) => true);
                    }}
                  >
                    {videoInPlayList?.length < 1 ||
                    videoInPlayList === undefined ? (
                      <img src={PlayListadd} alt="Playlist" />
                    ) : (
                      <img src={PlayListCheck} alt="Playlist" />
                    )}
                  </span>
                  {videoInWatchLater?.includes(videoId) ? (
                    <span
                      class="icon-links"
                      onClick={() => {
                        serverOperations({
                          type: "REMOVE-FROM-WATCH-LATER",
                          payload: videoId,
                        });
                      }}
                    >
                      <img src={WatchLaterRemove} alt="like" />
                    </span>
                  ) : (
                    <span
                      class="icon-links"
                      onClick={() => {
                        serverOperations({
                          type: "ADD-T0-WATCH-LATER",
                          payload: videoId,
                        });
                      }}
                    >
                      <img src={WatchLaterAdd} alt="like" />
                    </span>
                  )}
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
          <div>
            {state?.currentUser?.playLists?.map((item) => {
              return (
                <fieldset className="chekbox-container">
                  <input
                    type="checkbox"
                    name="playListCheckBox"
                    onClick={(event) => {
                      checkFieldHandler(item._id, event);
                    }}
                    checked={videoInPlayList.includes(item.name) ? true : false}
                    // {...(videoInPlayList.includes(item.name)
                    //   ? { checked: "true" }
                    //   : "")}
                  />
                  <label htmlFor="playListCheckBox">{item.name}</label>
                  <button
                    class="playlist-remove-button"
                    onClick={() => {
                      serverOperations({
                        type: "DELETE-PLAYLISTS",
                        payload: item._id,
                      });
                    }}
                  >
                    Remove
                  </button>
                </fieldset>
              );
            })}

            <input
              type="text"
              placeholder="Create New PlayList"
              className="create-playList-input"
              value={playListName}
              onChange={(event) => {
                setPlayListName(event.target.value);
              }}
            />
            <button
              className="create-playList-button"
              onClick={() => {
                serverOperations({
                  type: "CREATE-NEW-PLAYLIST",
                  payload: playListName,
                });
                setPlayListName("");
              }}
              disabled={!playListName}
            >
              +
            </button>
          </div>
          <button
            class="playlist-close-button"
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
