import React from "react";

import "./awards.css";

const Awards = () => {
  return (
    <div className="award_container d-flex align-items-center flex-wrap justify-content-between">
      <div className="award_item">
        <div className="single_award">
          <div className="award_year">2020</div>
          <h6 className="award_title">
            Best Frontend dev -{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
              non nam tenetur ."
            </span>
          </h6>
        </div>
      </div>

      <div className="award_item">
        <div className="single_award">
          <div className="award_year">2020</div>
          <h6 className="award_title">
            Best Frontend dev -{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
              non nam tenetur ."
            </span>
          </h6>
        </div>
      </div>

      <div className="award_item">
        <div className="single_award">
          <div className="award_year">2020</div>
          <h6 className="award_title">
            Best Frontend dev -{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
              non nam tenetur ."
            </span>
          </h6>
        </div>
      </div>

      <div className="award_item">
        <div className="single_award">
          <div className="award_year">2020</div>
          <h6 className="award_title">
            Best Frontend dev -{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis
              non nam tenetur ."
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

// const AwardItem = ({ year, title, text }) => {
//   <div className="single_award">
//     <div className="award_year">{year}</div>
//     <h6 className="award_title">
//       {title} - <span>{text}</span>
//     </h6>
//   </div>;
// };

export default Awards;
