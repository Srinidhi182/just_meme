import React from "react";
import Image from "next/image";

//internal import
import Style from "./LikeProfile.module.css";
import image from "../img";
import { MdStyle } from "react-icons/md";
const LikeProfile = () => {
  const imageArray = [1, 2, 3, 4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image
            src={image.user2}
            width={20}
            height={20}
            key={i + 1}
            className={Style.like_box_img}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
