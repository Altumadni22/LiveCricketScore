import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context";
import "../ScoreTabBattingTable/ScoreTabBattingTable.css";
import axios from "axios";

const ScoreTabBattingTable = () => {
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
      <div className="scoretable_container">
        <div className="scoretable_mainsec1">
          <table className="battingtable">
            <tr>
              <td>{newData.cname1}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>Batting</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen1}
              </td>
              <td>49</td>
              <td>24</td>
              <td>2</td>
              <td>5</td>
              <td>204.16</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen2}
              </td>
              <td>11</td>
              <td>8</td>
              <td>1</td>
              <td>1</td>
              <td>137.50</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen3}
              </td>
              <td>1</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>25.00</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen4}
              </td>
              <td>2</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>100.00</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen5}
              </td>
              <td>2</td>
              <td>7</td>
              <td>0</td>
              <td>0</td>
              <td>28.57</td>
            </tr>

            <tr>
              <td>
                <i class="fa-solid fa-user"></i> {newData.batsmen6}
              </td>
              <td>25</td>
              <td>15</td>
              <td>1</td>
              <td>2</td>
              <td>166.66</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>98/4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="scoretable_news">
          <div className="scoretable_news_title">
            <li>Match Covergae</li>
            <li>
              <span className="text2">All Match News</span>
            </li>
          </div>
          <div className="scoretable_newssec">
            <img
              className="scoretable_newssec_firstimg"
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1202/dm_231202_generic_rahane/dm_231202_generic_rahane.jpg"
              alt=""
            />
          </div>
          <div className="scoretable_newssec_head_one">
            <p>Can Rahane make another Test comeback?</p>
          </div>
          <div className="scoretable_newssec">
            <img
              className="scoretable_newssec_secondimg"
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1202/dm_231202_generic_nystrikerspc/dm_231202_generic_nystrikerspc.jpg"
              alt=""
            />
          </div>
          <div className="scoretable_newssec_head_two">
            <p>
              Talking T10 with Kieron Pollard <br /> and Mohammad Amir
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreTabBattingTable;
