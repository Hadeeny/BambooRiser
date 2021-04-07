import React from "react";

const Monitor = ({ monitor, onBookmark, onRewardSelect }) => {
  return (
    <>
      <img className="master-logo" src="images/logo-mastercraft.svg" />
      <div className="card-title">
        <h1>Mastercraft Bamboo Monitor Riser </h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain
        </p>
      </div>
      <div className="btns">
        <button className="btn-major" onClick={onRewardSelect}>
          Back this project
        </button>
        <div className="btn-minor">
          <img
            className={`sym${monitor.isBookMarked ? "-ed" : ""}`}
            src="images/icon-bookmark.svg"
          />
          <button
            className={`bmk${monitor.isBookMarked ? "-ed" : ""}`}
            onClick={onBookmark}
          >
            {`Bookmark${monitor.isBookMarked ? "ed" : ""}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default Monitor;
