import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 my-4">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-10">
        <p className="font-semibold text-xs xs:text-sm sm:text-base md:text-lg text-center sm:text-left mb-2 sm:mb-0">
          Copyright @ 2025. LAVANYA AND SHANKAR. All Rights Reserved. | Concept
          & Design by <span className="text-green-500"> eParivartan </span>
        </p>

        <div className="flex flex-row justify-between gap-4 sm:gap-6 w-1/3 sm:w-auto">
          <FaInstagram className="text-black text-lg xs:text-xl sm:text-2xl hover:text-pink-700 transition-colors" />
          <FaLinkedin className="text-black text-lg xs:text-xl sm:text-2xl hover:text-blue-900 transition-colors" />
          <FaWhatsapp className="text-black text-lg xs:text-xl sm:text-2xl hover:text-green-700 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
