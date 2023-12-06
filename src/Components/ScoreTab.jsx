import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context";
import axios from "axios";

const ScoreTab = (props) => {
  let { id } = useParams();
  const { data, setData } = useContext(AppContext);
  const [newData, setNewData] = useState({});

  useEffect(() => {
    if (!data.LiveScore) {
      const res = async () => {
        const json = await axios.get(
          window.location.origin + "/LiveScoredetails.json"
        );
        setData(json.data);
      };
      res();
    } else {
      setNewData(data.LiveScore[id]);
    }
  }, [data]);

  return (
    <>
      <div className="scoretab_conatiner">
        <div className="scoretab_title">
          <div className="scoretab_title1">
            <h2>{newData.Test_Series}</h2>
            <p>{newData.Test_details}</p>
          </div>
          <div className="scoretab_title2">
            <p>
              <i class="fa-solid fa-angle-left"></i> Prev
            </p>
            <p>
              Next <i class="fa-solid fa-angle-right"></i>
            </p>

            <i class="fa-solid fa-share-nodes"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="scoretab_mainsec">
          <div className="scoretab_match1">
            <div className="scoretab_img1">
              <img className="scoretab_flag1" src={newData.Flag_img1} />
              <h4>{newData.cname1}</h4>
            </div>
            <p>{newData.runs}</p>
          </div>
          <div className="scoretab_match2">
            <div className="scoretab_img1">
              <img className="scoretab_flag1" src={newData.Flag_img2} />
              <h4>{newData.cname2}</h4>
            </div>
            <p>{newData.runs1}</p>
          </div>
          <div className="scoretab_status">
            <p>{newData.update}</p>
          </div>
        </div>
        <div className="scoretab_footerlist">
          <ul className="scoretab_list">
            <li>Summary</li>
            <li>Scorecard</li>
            <li>Commentary</li>
            <li>Stats</li>
            <li>Overs</li>
            <li>Table</li>
            <li>News</li>
            <li>Photos</li>
          </ul>
        </div>
      </div>
      <div className="scoretab_flashnews">
        <div className="news_small_title">
          <li>Must Watch</li>
          <li>See all</li>
        </div>
        <div className="news_small_image">
          <img
            className="news_small_img"
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1204/dm_231204_generic_shaihopepc/dm_231204_generic_shaihopepc.jpg"
            alt=""
          />
          <p>How MS Dhoni's words 'stuck with' Shai Hope</p>
          <div className="news_small_circle">
            <i class="fa-solid dots fa-circle"></i>
            <i class="fa-solid dots fa-circle"></i>
            <i class="fa-solid dots fa-circle"></i>
            <i class="fa-solid dots fa-circle"></i>
            <i class="fa-solid dots fa-circle"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreTab;
