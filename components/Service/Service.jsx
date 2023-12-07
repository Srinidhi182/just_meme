import React from "react";
import Image from "next/image";
// internal import
import Style from "./Service.module.css";
import image from "../img/";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={image.service1}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter And Discover</h3>
          <p>
            Connect with wallet, discover, buy NFT's , sell your NFT's and earn
            money...
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image src={image.service2} alt="reload" width={100} height={100} />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Sell , Buy or Auction NFT's</h3>
          <p>
            Connect with wallet, discover, buy NFT's , sell your NFT's and earn
            money...
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image src={image.service3} alt="reload" width={100} height={100} />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Your Wallet</h3>
          <p>
            Connect with wallet, discover, buy NFT's , sell your NFT's and earn
            money...
          </p>
        </div>

        <div className={Style.service_box_item}>
          <Image src={image.service4} alt="reload" width={100} height={100} />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>You owned this NFT now !!</h3>
          <p>
            Connect with wallet, discover, buy NFT's , sell your NFT's and earn
            money...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
