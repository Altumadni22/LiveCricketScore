import React, { useContext, useEffect, useState } from "react";
import ScoreCards from "../ScoreCards/ScoreCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import "../ScoreCardList/ScoreCardList.css";

const ScoreCardList = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);

  useEffect(() => {
    const res = async () => {
      const json = await axios.get("LiveScoredetails.json");
      setData(json.data);
    };
    res();
  });

  return (
    <>
      <div className="container">
        {data.LiveScore &&
          data.LiveScore.map((items, index) => {
            return (
              <>
                <ScoreCards
                  onClick={() => {
                    navigate(`/Live-score/${index}`);
                  }}
                  {...items}
                />
                ;
              </>
            );
          })}
      </div>
    </>
  );
};

export default ScoreCardList;
