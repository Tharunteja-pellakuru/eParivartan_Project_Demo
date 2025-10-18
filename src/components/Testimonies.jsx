import { FaWhatsapp } from "react-icons/fa";
import {
  ExteriorImage1,
  InteriorImage2,
  InteriorImage3,
  InteriorImage4,
  ExteriorImage5,
  ExteriorImage6,
} from "../constants/constants";

const testimoniesList = [
  {
    image: ExteriorImage1,
    work: "Exterior - School",
    place: "ATA - Ahyar",
  },
  {
    image: InteriorImage2,
    work: "Interior - Residential",
    place: "Tambaram",
  },
  {
    image: InteriorImage3,
    work: "Interior - Healthcare",
    place: "ATA - Ahyar",
  },
  {
    image: InteriorImage4,
    work: "Interior - Office",
    place: "Urbanise Head Office",
  },
  {
    image: ExteriorImage5,
    work: "Exterior - Residential",
    place: "Damera Plaza - Royapetta",
  },
  {
    image: ExteriorImage6,
    work: "Exterior - Residential",
    place: "Mr.Barath - ECR",
  },
];

const Testimonies = () => {
  return (
    <div className="m-6 md:m-10 flex flex-col font-serif">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center m-6 md:m-10 leading-snug">
        Lets Create Spaces That Inspire, Belong, and Endure Together
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-6 font-sans">
        We collaborate with clients to transform vision into meaningful
        architecture. Start your journey with us today.
      </p>

      <div className="flex justify-center mb-10">
        <button className="text-white flex items-center space-x-2 bg-green-600 px-5 py-2 hover:bg-green-700 transition">
          <FaWhatsapp className="text-base sm:text-lg md:text-xl" />
          <span className="text-sm sm:text-base md:text-lg">
            Start a Conversation
          </span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center mx-5">
        {testimoniesList.map((item, index) => (
          <div
            key={index}
            className="lg:w-1/3 md:w-1/2 w-full p-2 border border-gray-800 box-border"
          >
            <div className="relative h-[500px]">
              {" "}
              <img
                src={item.image}
                alt="testimony"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4 md:p-6">
                <p className="text-white text-sm sm:text-base md:text-md font-sans">
                  {item.work}
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl text-white">
                  {item.place}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center m-20">
        <button className="text-white bg-black px-5 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-800 transition">
          Explore Project
        </button>
      </div>
    </div>
  );
};

export default Testimonies;
