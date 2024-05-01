// import React from 'react'
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="side">
      <p className="side_heading">Categories</p>

      <div className="sidebar">
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />{" "}
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faCar} className="iconssss" />
          <span>Vehicle</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
