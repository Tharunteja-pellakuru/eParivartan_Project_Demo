import BluePrintImage1 from "../assets/BluePrintImage1.png";
import BluePrintImage2 from "../assets/BluePrintImage2.png";

const BluePrint = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row items-center lg:items-end font-serif">
      <div className="lg:hidden w-full flex justify-center pt-6">
        <img
          src={BluePrintImage2}
          alt="blueprint2"
          className="w-10/12 sm:w-8/12 object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:justify-end lg:items-start text-center lg:text-left px-6 sm:px-10 lg:pl-20 lg:m-10 w-full lg:w-4/12 order-2 lg:order-1">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl my-4 ">
          Philosophy in Practice
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-sans">
          Every project is a dialogue - between heritage and modernity, empathy
          and creativity, vision and execution.
        </p>
      </div>

      <div className="hidden lg:flex w-full lg:w-auto pb-10 lg:pb-20 justify-center order-1">
        <img
          src={BluePrintImage1}
          alt="blueprint2"
          className="w-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-center lg:justify-end pt-6 lg:pt-20 pr-0 lg:pr-20 w-full lg:w-auto items-center lg:items-end order-3">
        <img
          src={BluePrintImage2}
          alt="blueprint1"
          className="w-10/12 sm:w-8/12 lg:w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default BluePrint;
