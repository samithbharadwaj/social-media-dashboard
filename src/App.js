import React from "react";
import "./css/tailwind.css";
import "./css/index.css";
import "./App.css";
import Header from "./components/header/header";
import Overview from "./components/overview/overview";
import OverviewToday from "./components/OverviewToday/OverviewToday";

function App() {
  return (
    <div className="lg:px-16 px-4 lg:pt-10 pt-8 flex flex-col">
      <Header />
      <Overview />
      <OverviewToday />
    </div>
  );
}

export default App;
