import Header from "./Header";
import Description from "./Description";
import Buttons from "./Buttons";
import Background from "./Background";

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full h-full lg:gap-5 lg:flex-row">
      <Background />
      <div className="flex flex-col items-center w-full gap-5 p-4 md:max-w-lg lg:max-w-xl">
        <Header />
        <Description />
        <Buttons />
      </div>
    </div>
  );
};

export default Main;
