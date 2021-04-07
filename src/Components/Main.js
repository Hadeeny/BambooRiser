import React from "react";
import "../Styles/Main.css";
import Monitor from "./Monitor";
import Stats from "./Stats";

const Main = ({
  products,
  totalBackers,
  monitor,
  onBookmark,
  onPledge,
  onRewardSelect,
}) => {
  return (
    <div className="main">
      <div className="card-container">
        <div className="card card-1">
          <Monitor
            monitor={monitor}
            onBookmark={onBookmark}
            onRewardSelect={onRewardSelect}
          />
        </div>
        <div className="card card-2">
          <Stats totalBackers={totalBackers} />
        </div>
        <div className="card card-3">
          <section>
            <h3>About this project</h3>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at high level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.{" "}
            </p>
            <p>
              Featuring artisan craftmanship, the simplicity of design create
              extra desk space below your computer to allow notepads, pens and
              USB sticks to be stored under the stand.
            </p>
            {products.map((product) => (
              <div
                key={product.id}
                className={product.amount > 0 ? "" : "grayout"}
              >
                <div className="crd">
                  <div className="tp">
                    <div className="title">{product.name}</div>
                    <div className="pledge" onClick={onRewardSelect}>
                      Pledge ${product.pledgeValue} or more
                    </div>
                  </div>
                  <p>{product.description}</p>
                  <div className="tp">
                    <div className="bt">
                      {" "}
                      <span>{product.amount}</span> left
                    </div>
                    <button
                      className="btn-maj"
                      onClick={() => onPledge(product)}
                    >
                      {product.amount > 0 ? "Select Reward" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
