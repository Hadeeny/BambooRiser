import React, { useState } from "react";
import "../Styles/SelectReward.css";

const SelectReward = ({
  selectPledge,
  openPledge,
  isOpen,
  products,
  closeSelect,
  onContinue,
}) => {
  const [checkbox, setCheckbox] = useState("false");
  const [pledgeInput, setPledgeInput] = useState(0);
  return (
    <div className="page">
      <div className="select-page">
        <div className="head">
          <h2>Back this Project</h2>
          <img
            className="close"
            onClick={closeSelect}
            src="images/icon-close-modal.svg"
          />
        </div>
        <p id="message">
          Want to support us in bringing Mastercraft Bamboo Riser into the
          world?
        </p>
        <div className="crd-select">
          <div className="crd-container">
            <div id="left">
              <div className="radio">
                <input
                  type="radio"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.value)}
                />
              </div>
              <div className="pledge">Pledge with no reward</div>
            </div>
          </div>

          <p className="select">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to recieve product
            updates via email.
          </p>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className={`crd-select${product.isSelected ? "ed" : ""}`}
          >
            <div
              className="crd-container"
              onClick={() => selectPledge(product)}
            >
              <div className="left">
                <div className="radio">
                  <input
                    type="radio"
                    value={checkbox}
                    onChange={(e) =>
                      setCheckbox(e.currentTarget.defaultChecked)
                    }
                  />
                </div>
                <div className="title">{product.name}</div>
                <div className="pledge">
                  Pledge ${product.pledgeValue} or more
                </div>
              </div>
              <div className="right">
                <span>{product.amount}</span> left
              </div>
            </div>
            <p className="select">{product.description}</p>
            {product.isSelected ? (
              <div className="pledge-select">
                <label>Enter your pledge</label>
                <div>
                  <input
                    className="pledge-input"
                    onChange={(e) => {
                      setPledgeInput(e.target.value);
                    }}
                    type="number"
                  />
                  <button
                    onClick={() => onContinue(pledgeInput, product)}
                    className="btn-maj"
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectReward;
