import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//   internal import
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import image from "../img";
const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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
  const followingArray = [
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
  const newsArray = [
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
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
