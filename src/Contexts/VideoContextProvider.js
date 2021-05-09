import axios from "axios";
import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

const VideoContext = createContext();

const initialState = {
  videos: [],
  playLists: [],
  savedVideos: [],
  currentUser: {},
};

const reducer = (state, action) => {
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case "UPDATE-LOCAL-VIDEOS":
      return { ...state, videos: action.payload };
      break;

    case "UPDATING-USER-DETAILS-FROM-SERVER":
      return { ...state, currentUser: action.payload };
      break;

    case "CLEAR-USER-DATA":
      return { ...state, currentUser: {} };
      break;

    default:
      break;
  }
};

export function VideoContextProvider({ children }) {
  const [menuValue, setMenuValue] = useState(false);
  const navigate = useNavigate();
  // const [toast, setToast] = useState("toastDiv");

  const [toast, setToast] = useState("none");
  const [toastMessage, setToastMessaage] = useState("");
  function showToast(message, status) {
    setToastMessaage(message);
    // if (status === true) {
    //   setToast("showtoastDiv bg-light-green color-dark-green");
    // } else {
    //   setToast("showtoastDiv bg-light-red color-dark-red");
    // }

    if (status === true) {
      setToast("flex");
    }
    //  else {
    //   setToast("showtoastDiv bg-light-red color-dark-red");
    // }
    setTimeout(() => {
      // setToast("toastDiv");
      setToast("none");
    }, 4000);
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const videosUpdater = async () => {
    const serverVideosResponse = await axios.get(
      "https://stark-wave-55031.herokuapp.com/videos"
    );
    console.log({ serverVideosResponse });
    dispatch({
      type: "UPDATE-LOCAL-VIDEOS",
      payload: serverVideosResponse.data.videos,
    });
  };

  const updateLocalUserData = async () => {
    const updatedUserData = await axios.get(
      `https://stark-wave-55031.herokuapp.com/users/auth/${state.currentUser._id}`
    );
    dispatch({
      type: "UPDATING-USER-DETAILS-FROM-SERVER",
      payload: updatedUserData.data.user,
    });
    console.log({ updatedUserData });
  };

  const serverOperations = async ({ type, payload }) => {
    switch (type) {
      case "CREATE-NEW-USER":
        try {
          const createNewUserServerResponse = await axios.post(
            "https://stark-wave-55031.herokuapp.com/users",
            {
              name: payload.username,
              password: payload.password,
            }
          );
          console.log({ createNewUserServerResponse });
          showToast("User Created", true);
          navigate("/login");
        } catch (error) {
          console.error(error);
          showToast("Failed to Create", false);
        }

        break;
      case "UPDATE-CURRENT-USER-DATA":
        const currentUser = await axios.get(
          `https://stark-wave-55031.herokuapp.com/users/auth/${payload}`
        );
        dispatch({
          type: "UPDATING-USER-DETAILS-FROM-SERVER",
          payload: currentUser.data.user,
        });
        console.log({ currentUser });

      case "CREATE-NEW-PLAYLIST":
        const createdPlayListServerResponse = await axios.post(
          `https://stark-wave-55031.herokuapp.com/playlists/${state.currentUser._id}`,
          { playListName: payload }
        );
        console.log({ createdPlayListServerResponse });
        updateLocalUserData();
        showToast("Created New PlayList", true);

        break;

      case "DELETE-PLAYLISTS":
        console.log("delete payload", payload);
        const deletedPlayListResponse = await axios.delete(
          `https://stark-wave-55031.herokuapp.com/playlists/delete/${state.currentUser._id}/${payload}`
        );
        console.log({ deletedPlayListResponse });
        updateLocalUserData();
        showToast("Deleted PlayList", true);

        break;

      case "ADD-VIDEO-TO-PLAYLIST":
        // const { playListId, videoId } = payload;
        const videoAddedToPlaylistResponse = await axios.post(
          `https://stark-wave-55031.herokuapp.com/playlists/${state.currentUser._id}/${payload.playListId}`,
          { videoId: payload.videoId }
        );
        console.log({ videoAddedToPlaylistResponse });
        updateLocalUserData();
        showToast("Added To PlayList", true);

        break;

      case "DELETE-VIDEO-FROM-PLAYLIST":
        console.log({ payload });
        const videoDeletedFromPlaylistResponse = await axios.delete(
          `https://stark-wave-55031.herokuapp.com/playlists/delete/${state.currentUser._id}/${payload.playListId}/${payload.videoId}`
        );
        console.log({ videoDeletedFromPlaylistResponse });
        updateLocalUserData();
        showToast("Removed From PlayList", true);

        break;
      case "ADD-T0-WATCH-LATER":
        console.log("add to watch later");
        const addVideoToWatchLaterResponse = await axios.post(
          `https://stark-wave-55031.herokuapp.com/users/likedvideos/${state.currentUser._id}`,
          {
            videoId: payload,
          }
        );
        console.log({ addVideoToWatchLaterResponse });
        updateLocalUserData();
        showToast("Added to Watch Later", true);

        break;
      case "REMOVE-FROM-WATCH-LATER":
        const removeFromWatchLaterResponse = await axios.delete(
          `https://stark-wave-55031.herokuapp.com/users/likedvideos/${state.currentUser._id}/${payload}`
        );
        console.log({ removeFromWatchLaterResponse });
        updateLocalUserData();
        showToast("Removed From Watch Later", true);

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("useEffect fired");
    videosUpdater();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        state,
        dispatch,
        serverOperations,
        showToast,
        toast,
        toastMessage,
        menuValue,
        setMenuValue,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoManagement = () => {
  return useContext(VideoContext);
};
