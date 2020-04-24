import React, { useCallback } from "react";
import "./card.css";
import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import IconDown from "../../assets/icon-down.svg";
import IconUp from "../../assets/icon-up.svg";

export default function SmallCard({ type }) {
  const getClassname = useCallback(() => {
    switch (type) {
      case "FB":
        return "blue-top-strip";
      case "TW":
        return "twitter-top-strip";
      case "IN":
        return "instagram-top-strip";
      case "YT":
        return "youtube-top-strip";
      default:
        return "blue-top-strip";
    }
  }, [type]);

  const getIcon = useCallback(() => {
    switch (type) {
      case "FB":
        return FacebookIcon;
      case "TW":
        return TwitterIcon;
      case "IN":
        return InstagramIcon;
      case "YT":
        return YoutubeIcon;
      default:
        return FacebookIcon;
    }
  }, [type]);

  const getCountType = useCallback(() => {
    switch (type) {
      case "FB":
        return "Page Views";
      case "TW":
        return "Retweets";
      case "IN":
        return "Likes";
      case "YT":
        return "Total Views";
      default:
        return "FOLLOWERS";
    }
  }, [type]);

  const getIconTypes = useCallback(() => {
    switch (type) {
      case "FB":
      case "TW":
      case "IN":
        return IconUp;
      case "YT":
        return IconDown;
      default:
        return IconUp;
    }
  }, [type]);

  const getTextColor = useCallback(() => {
    switch (type) {
      case "FB":
      case "TW":
      case "IN":
        return "text-green-600";
      case "YT":
        return "text-red-600";
      default:
        return "text-green-600";
    }
  }, [type]);
  return (
    <div className="h-100 w-100 bg-dark-blue-pattern shadow-md lg:m-4 rounded-lg">
      <div className={`w-100 h-1 rounded-lg ${getClassname()}`}></div>
      <div className="pt-8 px-8 flex flex-col justify-center items-center">
        <div className="w-100 flex flex-row items-center justify-between">
          <span className="subtitle text-sm">{getCountType()}</span>
          <img src={getIcon()} alt="Icon"></img>
        </div>
        <div className="w-100 my-4 flex flex-row items-center justify-between">
          <span className="text-white text-2xl font-bold">2k</span>
          <div className="my-5 flex flex-row items-center justify-center">
            <img className="px-3" src={getIconTypes()} alt="Icon Down" />
            <span className={`${getTextColor()} text-sm`}>12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
