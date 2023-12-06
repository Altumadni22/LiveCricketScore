import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context";
import "../ScoreTabBowlingTable/ScoreTabBowlingTable.css";
import axios from "axios";

const ScoreTabBowlingTable = () => {
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
      <div className="scoretablebowling_container">
        <div className="scoretablebowling_mainsec1">
          <table className="bowlingtable">
            <tr>
              <th>Bowling</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>ECON</th>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.bowler1}
              </td>
              <td>2</td>
              <td>0</td>
              <td>15</td>
              <td>0</td>
              <td>7.50</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.bowler2}
              </td>
              <td>2</td>
              <td>0</td>
              <td>21</td>
              <td>1</td>
              <td>10.50</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.bowler3}
              </td>
              <td>2</td>
              <td>0</td>
              <td>15</td>
              <td>2</td>
              <td>7.50</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.bowler4}
              </td>
              <td>2</td>
              <td>0</td>
              <td>19</td>
              <td>0</td>
              <td>9.50</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.bowler5}
              </td>
              <td>2</td>
              <td>0</td>
              <td>27</td>
              <td>1</td>
              <td>13.50</td>
            </tr>
          </table>
        </div>
        <div className="scoretablebowling_news">
          <div className="scoretablebowling_news_title">
            <li>Match News</li>
          </div>
          <div className="scoretablebowling_news_sec">
            <div className="scoretablebowling_news_heading">
              <p>
                NY Strikers go top of the table after Bulls sink to record low
              </p>
            </div>
            <div className="scoretablebowling_news_img">
              <img
                className="scoretablebowling_news_img1"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/372200/372235.4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="scoretablebowling_news_det">
            <p>
              After Gurbaz had helped Strikers get to 98, Hosein and Karunaratne
              triggered a spectacular slide to bowl Bulls out for 31
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreTabBowlingTable;
