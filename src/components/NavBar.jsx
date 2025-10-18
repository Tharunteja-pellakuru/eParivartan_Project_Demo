import { FaHome } from "react-icons/fa";
import NavBarLogo from "../assets/NavBarLogo.png";

const NavItems = [
  "About Us",
  "Projects",
  "Service",
  "Team",
  "Careers",
  "Contact",
];

const NavBar = () => {
  return (
    <div className="m-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-10 py-4">
        <img
          src={NavBarLogo}
          alt="Logo"
          className="h-14 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 object-contain flex-shrink-0"
        />

        <div className="flex flex-col sm:flex-row items-center sm:space-x-10 mt-4 sm:mt-0">
          <FaHome className="text-red-500 mb-2 sm:mb-0" />
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 text-center">
            {NavItems.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
