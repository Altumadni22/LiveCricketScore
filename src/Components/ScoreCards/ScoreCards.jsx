import "../ScoreCards/ScoreCards.css";

const ScoreCards = (props) => {
  return (
    <>
      <div onClick={props.onClick} className="main_card">
        <div className="card">
          <div className="main_img">
            <img className="img" src={props.main_img} />
          </div>
          <div className="card_title">
            <p>
              <span>
                <i className={props.icon}></i>
              </span>
              {props.cast}
            </p>
            <p>{props.Test_Series}</p>
          </div>
          <div className="scorecard_one">
            <div className="sec1">
              <img className="card_flags" src={props.Flag_img1} />
              <p>{props.cname1}</p>
            </div>
            <div className="sec2">
              <p>
                <span className="runs">{props.runs}</span>
              </p>
              <p>
                <span className="runrate">{props.runrate}</span>
              </p>
            </div>
          </div>
          <div className="scorecard_two">
            <div className="sec1">
              <img className="card_flags" src={props.Flag_img2} alt="flag" />
              <p>{props.cname2}</p>
            </div>
            <div className="sec2">
              <p>
                <span className="runs">{props.runs1}</span>
              </p>
              <p>
                <span className="runrate">{props.runrate1}</span>
              </p>
            </div>
          </div>
          <div className="card_footer">
            <p>{props.Status}</p>
            <p>{props.testno}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCards;
