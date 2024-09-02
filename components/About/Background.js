import Image from "next/image";
import Background from "/public/fachada-fmh.png";

const LeftSide = () => {
  return (
    <div className="flex justify-center h-fit w-fit">
      <Image
        src={Background}
        className="object-contain size-64 lg:size-96"
        alt="Fachada FMH"
      />
    </div>
  );
};

export default LeftSide;
