import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../../assets/profilepic.jpg";
import "./Navbar.css";
import Img from "../../assets/logo.webp";
import {
  faGear,
  faHouse,
  faRectangleAd,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img src={Img} alt="" className="logo_img" />
      </div>

      <div className="center_ele">
        <li>
         <i> <FontAwesomeIcon icon={faHouse} /></i>
          <span>Home</span>
        </li>

        <li>
           <i><FontAwesomeIcon icon={faShop} /></i>
          <span>Market Place</span>
        </li>

        <li>
          <i><FontAwesomeIcon icon={faRectangleAd} /></i>
          <span>Post Ads</span>
        </li>
      </div>

      <div className="last">
        <li>
        <i>  <FontAwesomeIcon icon={faMessage}/></i>
          <span>Response</span>
        </li>

        <li>
        <i>  <FontAwesomeIcon icon={faGear} /></i>
          <span>Setting</span>
        </li>

        <li>
          <img src={Profile} alt="" className="pp" />
          <span>Profile</span>
        </li>
      </div>
    </div>


    <div className="bottom_nav">
        <li>
         <i> <FontAwesomeIcon icon={faHouse} /></i>
          <span>Home</span>
        </li>

        <li>
           <i><FontAwesomeIcon icon={faShop} /></i>
          <span>Market Place</span>
        </li>

        <li>
          <i><FontAwesomeIcon icon={faRectangleAd} /></i>
          <span>Post Ads</span>
        </li>
      </div>

  </>
  );
};

export default Navbar;
