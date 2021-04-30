import axios from "axios";
import { useReducer, useContext, createContext, useEffect } from "react";

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

    case "UPDATING-USER-DETAILS-FROM-SERVER":
      return { ...state, currentUser: action.payload };

    default:
      break;
  }
};

export function VideoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const videosUpdater = async () => {
    const serverVideosResponse = await axios.get(
      "http://127.0.0.1:3010/videos"
    );
    console.log({ serverVideosResponse });
    dispatch({
      type: "UPDATE-LOCAL-VIDEOS",
      payload: serverVideosResponse.data.videos,
    });
  };

  //   const operations = async ({action,payload}) => {
  //       switch (action) {
  //           case value:

  //               break;

  //           default:
  //               break;
  //       }
  //   };

  const serverOperations = async ({ type, payload }) => {
    switch (type) {
      // case "CREATING-PLAYLIST-ON-DB":
      //   const creatingPlaylistServerResponse = await axios.post("");

      //   break;
      case "UPDATE-CURRENT-USER-DATA":
        const currentUser = await axios.get(
          `http://127.0.0.1:3010/users/auth/${payload}`
        );
        dispatch({
          type: "UPDATING-USER-DETAILS-FROM-SERVER",
          payload: currentUser.data.user,
        });
        console.log({ currentUser });

      case "CREATE-NEW-PLAYLIST":
        const createdPlayListServerResponse = await axios.post(
          `http://127.0.0.1:3010/playlists/${state.currentUser._id}`,
          { playListName: payload }
        );
        console.log({ createdPlayListServerResponse });

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("useEffect fired");
    videosUpdater();
  }, []);

  return (
    <VideoContext.Provider value={{ state, dispatch, serverOperations }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoManagement = () => {
  return useContext(VideoContext);
};
