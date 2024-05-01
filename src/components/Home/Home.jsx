// import L1 from "../../assets/l1.png";
import Sidebar from "../Sidebar/Sidebar";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar_part">
        <Sidebar />
      </div>

      <div className="images_part">
        <div className="slider_1">
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
