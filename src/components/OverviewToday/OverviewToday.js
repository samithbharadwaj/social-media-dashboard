import React from "react";
import SmallCard from "../../components/card/SmallCard";

export default function OverviewToday() {
  return (
    <div className="flex flex-col">
      <span className="text-white lg:text-2xl text-2xl font-medium py-8">
        Overview - Today
      </span>
      <div className="lg:h-auto h-screen flex lg:flex-row flex-col justify-between items-center">
        <SmallCard type="FB" />
        <SmallCard type="FB" />
        <SmallCard type="IN" />
        <SmallCard type="IN" />
      </div>
      <div className="lg:h-auto h-screen flex lg:flex-row flex-col justify-between items-center">
        <SmallCard type="TW" />
        <SmallCard type="TW" />
        <SmallCard type="YT" />
        <SmallCard type="YT" />
      </div>
    </div>
  );
}
