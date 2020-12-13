import React from "react";
import "./styles.css";

export default function App() {
  var p = {"Kotmezika za male živali Arava":"https://arava.si/","Krematorij za male živali Cremona":"http://www.cremona.si/sl/","Društvi CANIS - REPS":"https://www.slo-canis.net/","Trgovina Furry Care":"https://furry-care.com/","Hotel za pse Dog Holiday":"http://dog-holiday.si/","Unikatni izdelki Karoks":"https://unikatnoizsodov.si/","Revija Kužek":"https://kuzek.si/","Mačkarna Karieirian - devon rex":"Mačkarna Karieirian - devon rex","Trgovina z oblačili Pancho":"https://www.pancho.si/","Pasji salon Kr tačko":"https://www.facebook.com/Pasji-salon-KrTa%C4%8Dko-108839584268549/","Trgovina Petsi":"https://petsi.eu/","Šola za pse Planet K9":"https://planetk9.si/","Trgovina Prestige Pet":"https://www.prestige-pet.si/","Psarna Myn Senca":"https://mynsenca.com/Saarloos/","Hrana za živali Purina":"https://www.arc.si/sl/purina-one","Društvo S hrti za hrte":"https://shrtizahrte.wixsite.com/shrtizahrte","Trgovina Buba":"https://www.buba-trgovina.si/","Revija Mucek":"https://mucek.si"}

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
        Kužkov Festival 2020 je zaključen. Hvala za udeležbo!
        <br/>
        <a style={{ color: "#189adf" }} href="https://kuzek.si">
          Se vidimo na kuzek.si
        </a>
      </h2>
      <ul className="sodelujoci">
        {Object.keys(p).forEach(function (key) {
            if (p.hasOwnProperty(key)) {
              return <li><a href={p[key]}>{key}</a></li>
              }})}
      </ul>
    </div>
  );
}
