import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

// internal import
import Style from "./BigSlider.module.css";
import image from "../img";
import Button from "../Button/Button";

const BigSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "heloo Nft",
      id: 1,
      name: "sri",
      collection: "arts",
      price: "00006445 ETH",
      like: 243,
      image: image.user2,
      nftImage: image.nft_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },

    {
      title: " Trending Nft",
      id: 2,
      name: "beena",
      collection: "music",
      price: "000445 ETH",
      like: 243,
      image: image.user3,
      nftImage: image.nftimage1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },

    {
      title: " Trending Nft",
      id: 3,
      name: "prii",
      collection: "tweets",
      price: "0005 ETH",
      like: 243,
      image: image.user4,
      nftImage: image.nftimage2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },

    {
      title: " digital Nft",
      id: 4,
      name: "hachu",
      collection: "tweets",
      price: "0745 ETH",
      like: 243,
      image: image.user5,
      nftImage: image.nftimage3,
      time: {
        days: 97,
        hours: 12,
        minutes: 18,
        seconds: 25,
      },
    },
  ];

  // ---inc
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  // ---inc
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  // useEffect(() => {
  //   inc();
  // }, []);

  return (
    <div className={Style.bigSlider}>
      <div className={Style.bigSlider_box}>
        <div className={Style.bigSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigSlider_box_left_creator}>
            <div className={Style.bigSlider_box_left_creator_profile}>
              <Image
                className={Style.bigSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />

              <div className={Style.bigSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigSlider_box_left_creator_collection_icon}
              />

              <div className={Style.bigSlider_box_left_creator_collection_info}>
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigSlider_box_left_bidding}>
            <div className={Style.bigSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$,221,21</span>
              </p>
            </div>

            <p className={Style.bigSlider_box_left_bidding_box_auction}>
              <MdTimer className={Style.bigSlider_box_left_bidding_box_icon} />
              <span>Auction ending in </span>
            </p>

            <div className={Style.bigSlider_box_left_bidding_box_timer}>
              <div className={Style.bigSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div className={Style.bigSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div className={Style.bigSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div className={Style.bigSlider_box_left_bidding_box_timer_item}>
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.bigSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigSlider_box_right}>
          <div className={Style.bigSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigSlider_box_right_box_img}
            />

            <div className={Style.bigSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSlider;
