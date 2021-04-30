import { useVideoManagement } from "../../Contexts/VideoContextProvider";

export function PlayList() {
  const { state } = useVideoManagement();
  return (
    <div>
      This is PlayList Window
      <div>{JSON.stringify(state.currentUser)}</div>
    </div>
  );
}
