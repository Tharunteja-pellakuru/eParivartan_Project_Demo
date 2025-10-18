import BluePrint from "./components/BluePrint";
import Experience from "./components/Experience";
import ImageComponent from "./components/ImageComponent";
import Project from "./components/Project";
import Testimonies from "./components/Testimonies";
import TextContainer from "./components/TextContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <ImageComponent />
      <TextContainer />
      <hr className="mx-10 border-gray-800 border-t-2 my-10" />
      <Project />
      <hr className="mx-10 border-gray-800 border-t-2 my-10" />
      <Testimonies />
      <BluePrint />
      <Experience />
      <hr className="mx-10 border-gray-800 border-t-2 mt-10 mb-6" />
      <NavBar />
      <Footer />
    </div>
  );
};

export default App;
