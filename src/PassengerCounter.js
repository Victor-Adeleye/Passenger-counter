import React, { useState } from "react";
import Station from "./assets/images/Station.jpeg";
import "./App.css";

function PassengerCounter() {
  const [count, setCount] = useState(0);
  const [previousEntries, setPreviousEntries] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const save = () => {
    setPreviousEntries([...previousEntries, count]);
    setCount(0);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Station})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="Container" style={{ flex: 1 }}>
        <div className="Header">
          <h1 style={{ color: "white" }}>Passenger entered:</h1>
          <h2 style={{ color: "white" }}>{count}</h2>
          <button id="increment-btn" onClick={increment}>
            PAX COUNT
          </button>
          <button id="save-btn" onClick={save}>
            SAVE
          </button>
          <p id="save-el" style={{ color: "white" }}>
            Today entries: {previousEntries.join(" - ")}
          </p>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        ©{" "}
        <a
          href="https://www.linkedin.com/in/victor-adeleye/"
          style={{ color: "#a0a0a0", textDecoration: "none" }}
        >
          Victor Adeleye
        </a>{" "}
        2021. All Rights Reserved. | Passenger Counter Project
      </footer>
    </div>
  );
}

export default PassengerCounter;
