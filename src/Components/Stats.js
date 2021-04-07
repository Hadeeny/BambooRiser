import React from "react";

const Stats = ({ totalBackers }) => {
  const { backedTotal, target, number } = totalBackers;

  return (
    <>
      <div className="stats">
        <div className="stat stat-1">
          <h2>${backedTotal}</h2>
          <p>of $ {target} backed</p>
        </div>
        <div className="stat stat-2">
          <h2>{number}</h2>
          <p>total backed</p>
        </div>
        <div className="stat stat-3">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <progress
        value={backedTotal}
        max={target}
        className="progress-bar"
      ></progress>
    </>
  );
};

export default Stats;
