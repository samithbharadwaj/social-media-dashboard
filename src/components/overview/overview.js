import React from "react";
import "./overview.css";
import Card from "../card/card";

export default function Overview() {
  return (
    <div className="lg:h-auto mt-10 flex lg:flex-row flex-col justify-between items-center">
      <Card type="FB" />
      <Card type="TW" />
      <Card type="IN" />
      <Card type="YT" />
    </div>
  );
}
