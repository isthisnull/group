import React from "react";
import "./App.css";

function App() {
  const name = "Space Riders";
  const count = 4;
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero  qui aliquid at exercitationem ";
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="assets/pic.jpg" className="gpAvatar" />
        </div>
        <div className="des">
          <div className="groupName">
            <p className="nameP">{name}</p>
            <p className="countP">
              {count} <span>Members</span>
            </p>
          </div>
          <div className="gpDescription">
            <p> {text}</p>
          </div>
          <div className="actions">
            <button className="joinBtn">Join</button>
            <div className="shareGroup">
              <button className="shareBtn">
                <img src="assets/uploadpp.png" className="uploadIcon" />
                <p>Share Group</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
