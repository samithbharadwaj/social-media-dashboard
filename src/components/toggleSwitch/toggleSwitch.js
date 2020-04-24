import React from "react";
import "./toggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <div className="px-3">
      <label className="switch p-1">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
