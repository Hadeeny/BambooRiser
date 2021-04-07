import React, { useState, useEffect } from "react";
import Appreciation from "./Components/Appreciation";
import Header from "./Components/Header";
import MahoganyStand from "./Components/MahoganyStand";
import Main from "./Components/Main";
import SelectReward from "./Components/SelectReward";

function App() {
  const [menu, setMenu] = useState(false);
  const [backers, setBackers] = useState({
    number: 0,
    backedTotal: 0,
    target: 100000,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bamboo Stand",
      amount: 101,
      pledgeValue: 25,
      toggleBamboo: false,
      pledge: false,
      isSelected: false,
      description: `You get an ergonomic stand made of natural bamboo. You have helped us
      launch our promotional campaign, and you'll be added to a special
      Backer list`,
    },
    {
      id: 2,
      name: "Black Stand Edition",
      amount: 64,
      pledgeValue: 75,
      toggleStand: false,
      pledge: false,
      isSelected: false,
      description: `You get a Black Special Edition computer and a personal thank you. You'll be
      added to our Backer member list. Shipping is included.`,
    },
    {
      id: 3,
      name: "Mahogany Special Edition",
      amount: 0,
      pledgeValue: 200,
      toggleMahogany: false,
      pledge: false,
      isSelected: false,
      description: `  You get two Special Edition Mahogany stand, a Backer T-Shirt and a
      personal thank you. You'll be added to our Backer member list.
      shipping is included`,
    },
  ]);

  const [monitor, setMonitor] = useState({
    isBookMarked: false,
  });

  const bookmark = () => {
    setMonitor({
      isBookMarked: !monitor.isBookMarked,
    });
  };

  const pledge = (product) => {
    setShowMessage(!showMessage);
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...product };
    newProducts[index].amount--;
    setProducts(newProducts);
    console.log(newProducts);
  };

  const closeMessage = () => {
    setShowMessage(!showMessage);
  };

  const rewardSelect = () => {
    setShowSelect(!showSelect);
  };

  const closeSelect = () => {
    setShowSelect(!showSelect);
  };

  const openPledge = () => {
    setIsOpen(!isOpen);
  };

  // const SelectPledge = (prd) => {
  //   const updProducts = [...products];
  //   const index = updProducts.indexOf(prd);
  //   updProducts[index] = { ...prd };
  //   let xx = updProducts[index];
  //   xx.isSelected = !prd.isSelected;
  //   setProducts([...updProducts]);
  // };

  const SelectPledge = (prd) => {
    const index = products.indexOf(prd);
    products[index].isSelected = !prd.isSelected;
    setProducts([...products]);
  };

  const onContinue = (fuckingPledge, PRD) => {
    if (fuckingPledge == "") {
      alert("Please add a pledge");
    } else {
      const newProducts = [...products];
      const index = products.indexOf(PRD);
      newProducts[index] = { ...PRD };
      newProducts[index].pledge = !PRD.pledge;
      setProducts(newProducts);
      setBackers({
        number: backers.number + 1,
        backedTotal: backers.backedTotal + Number(fuckingPledge),
        target: backers.target,
      });
      setShowSelect(!showSelect);
    }
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div>
        <Header isToggled={toggleMenu} menu={menu} />
        <Main
          products={products}
          monitor={monitor}
          onBookmark={bookmark}
          onRewardSelect={rewardSelect}
          onPledge={pledge}
          totalBackers={backers}
        />
      </div>
      {showMessage ? <Appreciation onClose={closeMessage} /> : ""}
      {showSelect ? (
        <SelectReward
          products={products}
          closeSelect={closeSelect}
          openPledge={openPledge}
          isOpen={isOpen}
          selectPledge={SelectPledge}
          onContinue={onContinue}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
