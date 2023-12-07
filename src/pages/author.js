import React, { useState, useEffect } from "react";

// internal import
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../../CollectionPage/collectionIndex";
import { Brand, Title } from "../../components/componentindex";
import FollowerCard from "../../components/Follower/FollowerCard/FollowerCard";
import image from "../../components/img";
import {
  AuthorProfileCard,
  AuthorTabs,
  AuthorNFTCard,
} from "../../AuthorPage/componentIndex";
const author = () => {
  const followerArray = [
    {
      background: image.background1,
      user: image.user1,
    },
    {
      background: image.background2,
      user: image.user2,
    },
    {
      background: image.background3,
      user: image.user3,
    },
    {
      background: image.bg4,
      user: image.user4,
    },
    {
      background: image.background2,
      user: image.user5,
    },
    {
      background: image.background3,
      user: image.user6,
    },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={image.background2} />
      <AuthorProfileCard />
      <AuthorTabs
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCard
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio
"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerCard key={i} el={el} />
        ))}
      </div>

      <Brand />
    </div>
  );
};

export default author;
