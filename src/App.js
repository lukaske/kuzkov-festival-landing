import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        href="https://kuzek.si"
        style={{ width: "100%", maxWidth: "900px" }}
        alt="Kužkov Festival 2020"
        src={
          "https://festivaldrop.s3.eu-north-1.amazonaws.com/dogodek-2020-cove-1920x1080+(1).jpg"
        }
      />
      <h2 style={{ color: "#189adf" }}>
        Do takrat nas lahko obiščete na{" "}
        <a style={{ color: "#189adf" }} href="https://kuzek.si">
          kuzek.si
        </a>
      </h2>
    </div>
  );
}
