import React from "react";
import "./App.css";

function App() {
  const name = "Space Riders";
  const count = 4;
  const text = "lorem ipsum";
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="assets/pic.jpg" className="gpAvatar" />
        </div>
        <div className="group">
          <p>{name}</p>
          <p>{count} Members</p>
        </div>
        <div className="gpDescription">
          <p> {text}</p>
        </div>
        <div className="actions">
          <button>Join</button>
          <div className="shareGroup">
            <button>Share Group</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
