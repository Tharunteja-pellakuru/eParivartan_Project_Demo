import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.png";

const Project = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 py-6 md:py-10">
      <div className="flex flex-col items-center font-serif">
        <h1 className="text-3xl md:text-4xl lg:text-5xl m-8 text-center">
          Project Spotlight
        </h1>

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row w-full m-10 gap-4">
          {/* Main Project - 70% */}
          <div className="w-full lg:w-2/3 h-[200px] md:h-[300px] lg:h-[400px] m-1">
            <img
              src={Image1}
              alt="Project Main"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Smaller Projects - 30% */}
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <div className="h-[150px] md:h-[180px] lg:h-[200px]">
              <img
                src={Image2}
                alt="Project 2"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="h-[150px] md:h-[180px] lg:h-[200px]">
              <img
                src={Image3}
                alt="Project 3"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-8 font-serif">
        <button className="px-6 py-2 bg-black text-white shadow hover:bg-gray-800 transition">
          Explore Project
        </button>
      </div>
    </div>
  );
};

export default Project;
