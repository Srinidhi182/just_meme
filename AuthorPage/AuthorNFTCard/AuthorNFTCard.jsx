import React, { useState } from "react";

// internal import
import Style from "./AuthorNFTCard.module.css";
import image from "../../components/img";
import { NFTCardTwo } from "../../CollectionPage/collectionIndex";
import FollowerCard from "../../components/Follower/FollowerCard/FollowerCard";

const AuthorNFTCard = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nftimage2,
    image.nftimage3,
  ];

  const createdArray = [
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nftimage2,
  ];

  const likeArray = [
    image.nft_1,
    image.nftimage2,
    image.nftimage3,
    image.nftimage2,
    image.nftimage3,
  ];

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
      background: image.bg4,
      user: image.user5,
    },
    {
      background: image.background3,
      user: image.user6,
    },
  ];

  const followingArray = [
    {
      background: image.background3,
      user: image.user3,
    },
    {
      background: image.bg4,
      user: image.user4,
    },
    {
      background: image.bg4,
      user: image.user5,
    },
    {
      background: image.bg5,
      user: image.user6,
    },
    {
      background: image.background1,
      user: image.user1,
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCard;
