import { FaBars } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="h-14 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 object-contain flex-shrink-0"
      />

      {/* Hamburger */}
      <FaBars className="text-white h-12 sm:h-18 md:h-28 lg:h-22 xl:h-28 2xl:h-40" />
    </div>
  );
};

export default Header;
