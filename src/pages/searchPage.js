import React from "react";

// internal import
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../../components/componentindex";
import { SearchBar } from "../../SearchPage/searchBarIndex";
import { Filter } from "../../components/componentindex";
import { NFTCardTwo, Banner } from "../../CollectionPage/collectionIndex";
import image from "../../components/img";

const searchPage = () => {
  const collectionArray = [
    image.nft_1,
    image.nftimage1,
    image.nftimage2,
    image.nftimage3,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={image.background2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
