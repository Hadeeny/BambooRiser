import React from "react";

const BambooStand = ({ bamboo, onBambooPledge, onRewardSelect }) => {
  return (
    <div className={bamboo.amount > 0 ? "" : "grayout"}>
      <div className="crd">
        <div className="tp">
          <div className="title">Bamboo Stand</div>
          <div className="pledge" onClick={onBambooPledge}>
            Pledge $25 or more
          </div>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You have helped us
          launch our promotional campaign, and you'll be added to a special
          Backer list.
        </p>
        <div className="tp">
          <div className="bt">
            {" "}
            <span>{bamboo.amount}</span> left
          </div>
          <button className="btn-maj" onClick={onRewardSelect}>
            {bamboo.amount > 0 ? "Select Reward" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BambooStand;
