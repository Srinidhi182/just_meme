import React from "react";

//internal import

import Style from "../styles/index.module.css";
import { HeroSection } from "../../components/componentindex";
import { Service } from "../../components/componentindex";
import { BigSlider } from "../../components/componentindex";
import { Subscribe } from "../../components/componentindex";
import { Title } from "../../components/componentindex";
import { Category } from "../../components/componentindex";
import { Filter } from "../../components/componentindex";
import { NFTCard } from "../../components/componentindex";
import { Collection } from "../../components/componentindex";
import { Follower } from "../../components/componentindex";
import { AudioLive } from "../../components/componentindex";
import { Slider } from "../../components/componentindex";
import { Brand } from "../../components/componentindex";
import { Video } from "../../components/componentindex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigSlider />
      <Title
        heading=" Audio collections"
        paragraph="Listen to the latest audio collection 🎶"
      />
      <AudioLive />
      <Follower />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFT's in the most featured categories"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
