import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import imageUrl from "../assets/CarouselImage.jpg";
import Header from "./Header";

const ImageComponent = () => {
  return (
    <div className="relative w-full h-[65vh]">
      <img
        src={imageUrl}
        alt="carouselImage"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      <div className="absolute bottom-10 left-1/2 transform font-serif -translate-x-1/2 text-center w-[80%]">
        <h1 className="text-white text-2xl">
          Crafting timeless architecture that balances tradition,<br></br>{" "}
          culture, modernity, and purpose.
        </h1>
        <div className="flex justify-end w-full mb-6">
          <button className="text-white  border border-white px-2 m-1 flex items-center space-x-2">
            {"<"}
          </button>
          <button className="text-white border border-white px-2  m-1 flex items-center space-x-2">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
