import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col">
      <ButtonList />
      <VideoConatiner />
    </div>
  );
};

export default MainContainer;
