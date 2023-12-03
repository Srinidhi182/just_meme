import React from "react";
import Image from "next/image";

//Internal import
import Style from "./Notification.module.css";
import images from "../../img";

const Notification = () => {
  return (
    <div className={Style.Notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>srinidhi</h4>
          <p>message action required</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
