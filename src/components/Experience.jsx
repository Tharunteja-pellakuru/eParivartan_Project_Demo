import { FaWhatsapp } from "react-icons/fa";
import Image3 from "../assets/Image3.png";

const Experience = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 font-serif sm:px-10 lg:px-20 py-10 box-border overflow-hidden">
      <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl my-4">
          Shaping Experiences <br /> Beyond Buildings
        </h1>

        <p className="text-base sm:text-lg my-4 leading-relaxed text-gray-700 max-w-xl font-sans">
          For us, architecture is more than walls and structure — it's about the
          experiences they create. We design spaces that evoke belonging,
          balance, and purpose. Every project is an opportunity to bring
          together people, culture, and context into a harmonious whole that
          feels both timeless and contemporary.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="text-white flex items-center space-x-2 bg-green-600 px-5 py-2 hover:bg-green-700 transition">
            <FaWhatsapp className="text-lg" />
            <span>Start a Conversation</span>
          </button>
        </div>
      </div>

      <div className="w-full lg:w-6/12 flex justify-center mt-10 lg:mt-0">
        <img
          src={Image3}
          alt="Experience Illustration"
          className="w-full max-w-lg sm:max-w-xl lg:max-w-full object-cover  transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Experience;
