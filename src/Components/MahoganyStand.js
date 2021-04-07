import React from "react";

const MahoganyStand = ({ mahogany, onPledge, onRewardSelect }) => {
  return (
    <div className={mahogany.amount > 0 ? "" : "grayout"}>
      <div className="crd">
        <div className="tp">
          <div className="title">Mahogany Special Edition</div>
          <div
            className="pledge"
            disabled={!mahogany.amount}
            onClick={onPledge}
          >
            Pledge $200 or more
          </div>
        </div>
        <p>
          You get two Special Edition Mahogany stand, a Backer T-Shirt and a
          personal thank you. You'll be added to our Backer member list.
          shipping is included
        </p>
        <div className="tp">
          <div className="bt">
            {" "}
            <span>{mahogany.amount}</span> left
          </div>
          <button
            disabled={!mahogany.amount}
            onClick={onRewardSelect}
            className="btn-maj"
          >
            {mahogany.amount > 0 ? "Select Reward" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MahoganyStand;
