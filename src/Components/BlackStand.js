import React from "react";

const BlackStand = ({ blackStand, onBlackPledge, onRewardSelect }) => {
  return (
    <div className={blackStand.amount > 0 ? "" : "grayout"}>
      <div className="crd">
        <div className="tp">
          <div className="title">Black Edition Stand</div>
          <div className="pledge" onClick={onBlackPledge}>
            Pledge $75 or more
          </div>
        </div>
        <p>
          You get a Black Special computer and a personal thank you. You'll be
          added to our Backer member list. Shipping is included{" "}
        </p>
        <div className="tp">
          <div className="bt">
            {" "}
            <span>{blackStand.amount}</span> left
          </div>
          <button className="btn-maj" onClick={onRewardSelect}>
            {blackStand.amount > 0 ? "Select Reward" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackStand;
