import React, { useCallback } from "react";
import "./card.css";
import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import IconDown from "../../assets/icon-down.svg";
import IconUp from "../../assets/icon-up.svg";

export default function Card({ type }) {
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
      case "TW":
      case "IN":
        return "FOLLOWERS";
      case "YT":
        return "SUBSCRIBERS";
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
    <div className="h-100 w-100 bg-dark-blue-pattern shadow-md lg:mx-4 my-4 rounded-lg">
      <div className={`w-100 h-1 rounded-lg ${getClassname()}`}></div>
      <div className="pt-8 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center">
          <img src={getIcon()} alt="Icon"></img>
          <span className="px-4 subtitle text-sm">@nathanF</span>
        </div>
        <span className="text-white text-6xl font-bold">1255</span>
        <span className="subtitle letter-space text-xs">{getCountType()}</span>
        <div className="my-5 flex flex-row items-center justify-center">
          <img className="px-3" src={getIconTypes()} alt="Icon Down" />
          <span className={`${getTextColor()} text-xs`}>12 Today</span>
        </div>
      </div>
    </div>
  );
}
