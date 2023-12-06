import React from "react";
import Image from "next/image";
// internla import
import Style from "./Brand.module.css";
import image from "../img";
import { Button } from "../../components/componentindex";
const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={image.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free digital assets by creating or exploring here</h1>
          <p>A creative agency that will lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={image.eran} alt="brand logo" width={500} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
