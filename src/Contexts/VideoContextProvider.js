import axios from "axios";
import { useReducer, useContext, createContext, useEffect } from "react";

const VideoContext = createContext();

const initialState = {
  videos: [],
  playLists: [],
  savedVideos: [],
  currentUser: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-LOCAL-VIDEOS":
      return { ...state, videos: action.payload };

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

  useEffect(() => {
    console.log("useEffect fired");
    videosUpdater();
  }, []);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoManagement = () => {
  return useContext(VideoContext);
};
