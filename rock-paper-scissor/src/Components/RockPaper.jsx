import React, { useState } from "react";
import "./RockPaper.css";

const RockPaper = () => {
  const [userValue, setUserValue] = useState("");
  const [computerValue, setComputerValue] = useState("");

  // const randomNum = Math.floor(Math.random() * 3) + 1;

  const userClick = (clickValue) => {
    setUserValue(clickValue);
  };

  const computerClick = (clickValue) => {
    if (clickValue == 1) { 
      setComputerValue("Computer Rock");
    } else if (clickValue == 2) {
      setComputerValue("Computer Paper");
    } else {
      setComputerValue("Computer Scissor");
    }
    // setComputerValue(clickValue);
    // console.log(Math.floor(Math.random() * 3) + 1);
    console.log(clickValue);
  };

  const btnClick = (clickVal, userVal) => {};

  return (
    <>
      <div className="rock-paper-main">
        <div className="game">
          <p className="heading">Rock-Paper-Scissor Game</p>

          <div className="game-container">
            <div className="div1">
              <div className="computer">
                <p>Computer</p>
                <ul>
                  <li>
                    <button
                    // onClick={() => {
                    //   computerClick(Math.floor(Math.random() * 3) + 1);
                    // }}
                    >
                      ✊
                    </button>
                  </li>
                  <li>
                    <button
                    // onClick={() => {
                    //   computerClick(Math.floor(Math.random() * 3) + 1);
                    // }}
                    >
                      🖐️
                    </button>
                  </li>
                  <li>
                    <button
                    // onClick={() => {
                    //   computerClick(Math.floor(Math.random() * 3) + 1);
                    // }}
                    >
                      ✌️
                    </button>
                  </li>
                </ul>
              </div>
              <div className="user">
                <p>User</p>
                <li>
                  <button
                    // onClick={() => {
                    //   userClick("User rock");
                    // }}
                    onClick={() => {
                      btnClick(Math.floor(Math.random() * 3) + 1, "User Rock");
                    }}
                  >
                    ✊
                  </button>
                </li>
                <li>
                  <button
                    // onClick={() => {
                    //   userClick("User paper");
                    // }}
                    onClick={() => {
                      btnClick(Math.floor(Math.random() * 3) + 1, "User Paper");
                    }}
                  >
                    🖐️
                  </button>
                </li>
                <li>
                  <button
                    // onClick={() => {
                    //   userClick("User scissor");
                    // }}
                    onClick={() => {
                      btnClick(
                        Math.floor(Math.random() * 3) + 1,
                        "User Scissor"
                      );
                    }}
                  >
                    ✌️
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
        <h2>{userValue}</h2>
        <h2>{computerValue}</h2>
      </div>
    </>
  );
};

export default RockPaper;
