import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import image from "../img";
const Category = () => {
  const CategoryArray = [
    image.background1,
    image.background2,
    image.background3,
    image.bg4,
    image.bg5,
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={1 + 1}>
            <Image
              src={el}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill className={Style.category_box_title_icon} />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Enterainment</h4>
                <small>early NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
