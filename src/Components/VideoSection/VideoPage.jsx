import "./VideoPage.css";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

export const VideoPage = () => {
  const { state, dispatch } = useVideoManagement();
  const { videoId } = useParams();
  console.log({ videoId });

  const id = state.videos
    .filter((item) => item._id === videoId)
    .map((item) => item.videoId);

  const [requiredVideoId] = id;

  return (
    <div>
      <Youtube videoId={requiredVideoId} opts={opts} />
    </div>
  );
};
