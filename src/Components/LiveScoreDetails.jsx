import React from "react";
import Navigation from "./Navigation/Navigation";
import ScoreTab from "./ScoreTab";
import ScoreTabBattingTable from "./ScoreTabBattingTable";
import Footer from "./Footer/Footer";
import ScoreTabBowlingTable from "./ScoreTabBowlingTable";

const LiveScoreDetails = () => {
  return (
    <>
      <Navigation />
      <div className="scoretab">
        <ScoreTab />
      </div>
      <ScoreTabBattingTable />
      <ScoreTabBowlingTable />
      <Footer />
    </>
  );
};

export default LiveScoreDetails;
