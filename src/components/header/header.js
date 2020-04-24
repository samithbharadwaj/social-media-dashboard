import React from "react";
import "./header.css";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";

export default function Header() {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center">
      <div className="flex flex-col pb-4 lg:pb-0">
        <span className="text-white lg:text-4xl text-2xl font-medium">
          Social Media Dashboard
        </span>
        <span className="subtitle text-lg font-medium">
          Total followers: 23,004
        </span>
      </div>
      <div className="lg:hidden w-100 divider bg-white mb-5 lg:mb-0"></div>
      <div className="flex flex-row lg:justify-around justify-between">
        <span className="lg:text-white subtitle lg:text-lg text-base font-medium">
          Dark Mode
        </span>
        <ToggleSwitch />
      </div>
    </div>
  );
}
