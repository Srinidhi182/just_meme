import React from "react";
// internal import
import Style from "../styles/collection.module.css";
import image from "../../components/img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../../CollectionPage/collectionIndex";
import { Slider, Brand } from "../../components/componentindex";
import Filter from "../../components/Filter/Filter";
const collection = () => {
  const collectionArray = [
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nftimage2,
    image.nftimage3,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={image.background1} alt="image not found" />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
