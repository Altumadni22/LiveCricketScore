import React from "react";
import "../SecondNews/SecondNews.css";

const SecondNews = () => {
  return (
    <>
      <div className="secondnews_container">
        <div className="secondnews_maincard">
          <div className="secondnews_title">
            <h2>Top Stories</h2>
            <p>See all</p>
          </div>
          <div className="secondnews_stories">
            <div className="secondnews_one">
              <div className="secondnews_img1">
                <img
                  className="oneimg"
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/371400/371470.6.jpg"
                  alt="player"
                />
              </div>
              <div className="secondnews_text">
                <p>Bavuma, Rabada rested for white-ball games against India</p>
              </div>
            </div>
            <div className="secondnews_one">
              <div className="secondnews_img1">
                <img
                  className="oneimg"
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/363600/363692.6.jpg"
                  alt="player"
                />
              </div>
              <div className="secondnews_text">
                <p>
                  New Test dawn for India, but focus firmly on road to T20 World
                  Cup
                </p>
              </div>
            </div>
            <div className="secondnews_one">
              <div className="secondnews_img1">
                <img
                  className="oneimg"
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/367200/367232.6.jpg"
                  alt="player"
                />
              </div>
              <div className="secondnews_text">
                <p>
                  Maia Bouchier, Danielle Gibson added to England Women central
                  contracts list
                </p>
              </div>
            </div>
            <div className="secondnews_one">
              <div className="secondnews_img1">
                <img
                  className="oneimg"
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/370300/370320.6.jpg"
                  alt="player"
                />
              </div>
              <div className="secondnews_text">
                <p>Rauf, Mir and Zaman get NOCs to play BBL 2023-24</p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondnews_flashnews">
          <div className="news_small_title">
            <li>Must Watch</li>
            <li>See all</li>
          </div>
          <div className="news_small_image">
            <img
              className="news_small_img"
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1201/dm_231201_INET_CRIC_indsa-squadv2_takeaways_nonbranded_global/dm_231201_INET_CRIC_indsa-squadv2_takeaways_nonbranded_global.jpg"
              alt=""
            />
            <p>Making sense of the India squads selected for South Africa</p>
            <div className="news_small_circle">
              <i class="fa-solid dots fa-circle"></i>
              <i class="fa-solid dots fa-circle"></i>
              <i class="fa-solid dots fa-circle"></i>
              <i class="fa-solid dots fa-circle"></i>
              <i class="fa-solid dots fa-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondNews;
