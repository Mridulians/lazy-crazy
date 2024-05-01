// import React from 'react'

import './Slider.css'

import { useState } from "react";

const Slider = () => {
  const data = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2zYLLsJjVQSynvpck60kkJ73qQbIGHorfuksTLvCrCyjviwbC-izY9Q5T4B62oihx0E&usqp=CAU",
    "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg",
    "https://t3.ftcdn.net/jpg/05/73/95/90/360_F_573959050_BXeecXwfgIlMFGdOfHRiSdedBealWU5Q.jpg",
    "https://img.lovepik.com/photo/48013/0576.jpg_wh860.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentImage(!currentImage ? data.length - 1 : currentImage - 1);
  };
  return (
    <div className="slider">
      <button onClick={handlePrevious} className='pre'>p</button>
      <img
        src={data[currentImage]}
        alt=""
      />
      <button onClick={handleNext} className='next'>n</button>
    </div>
  );
};

export default Slider;
