import React from "react";

const News = () => {
  return (
    <>
      <div className="news_container">
        <div className="news_main_card">
          <div className="news_title">
            <h2>Match Coverage</h2>
          </div>
          <div className="news_list">
            <ul className="news_items">
              <li>Bang vs Newz</li>
              <li>Eng vs Sri</li>
              <li>Ind vs Pak</li>
              <li>Around the world</li>
              <li>Abu Dhabi T20</li>
              <li>Legends League</li>
            </ul>
          </div>
          <div className="news_main_sec">
            <div className="news_sec">
              <img
                className="news_image1"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/esci/media/motion/2023/1203/dm_231203_INET_CRIC_indvaus_takeaways_nonbranded_global/dm_231203_INET_CRIC_indvaus_takeaways_nonbranded_global.jpg"
                alt="cricket image"
              />
            </div>
            <div className="news_details">
              <h1>Arshdeep: 'I was thinking I would be the culprit'</h1>
              <div className="news_details_box">
                <i class="fa-solid fa-trophy"></i>
                <p>IND vs AUS: India won by 6 runs</p>
              </div>
              <div className="news_details_para">
                <h3>
                  <i class="fa-solid move fa-angle-right"></i> India clinch a
                  thriller to beat Australia 4-1 McDermott:
                </h3>
                <h3>
                  <i class="fa-solid move fa-circle-play"></i>Australia should
                  have got over the line
                </h3>
                <h3>
                  <i class="fa-solid move fa-circle-play"></i>Arshdeep: It was a
                  nothing-to-lose situation for me
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="news_small">
          <div className="news_small_title">
            <li>Must Watch</li>
            <li>See all</li>
          </div>
          <div className="news_small_image">
            <img
              className="news_small_img"
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1202/dm_231202_generic_nystrikerspc/dm_231202_generic_nystrikerspc.jpg"
              alt=""
            />
            <p>Talking T10 with Kieron Pollard and Mohammad Amir</p>
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

export default News;
