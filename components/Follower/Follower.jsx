import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
// Internal import
import Style from "./Follower.module.css";
import FollowerCard from "./FollowerCard/FollowerCard";
import image from "../img";
const Follower = () => {
  const CardArray = [
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
      background: image.bg5,
      user: image.user5,
    },
    {
      background: image.background1,
      user: image.user6,
    },
    {
      background: image.background2,
      user: image.user8,
    },
    {
      background: image.background3,
      user: image.user9,
    },
  ];
  const FollowingArray = [
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
      background: image.bg5,
      user: image.user5,
    },
    {
      background: image.background1,
      user: image.user6,
    },
    {
      background: image.background2,
      user: image.user8,
    },
    {
      background: image.background3,
      user: image.user9,
    },
  ];
  const NewsArray = [
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
      background: image.bg5,
      user: image.user5,
    },
    {
      background: image.background1,
      user: image.user6,
    },
    {
      background: image.background2,
      user: image.user8,
    },
    {
      background: image.background3,
      user: image.user9,
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};

export default Follower;
