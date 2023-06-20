import React from "react";
import "./Product.css";

export default function Product({ data }) {
  return (
    <div className="cardContainerOuter">
      <div className="cardContainer">
        {data.phones &&
          data.phones.map((mob) => (
            <div className="cards" key={mob.id}>
              <img src={mob.image} alt="" />
              <h3>{mob.title}</h3>
              <p>{mob.desc}</p>
              <h3>{mob.price}</h3>
            </div>
          ))}
        {data.laptop &&
          data.laptop.map((lap) => (
            <div className="cards" key={lap.id}>
              <img src={lap.image} alt="" />
              <h3>{lap.title}</h3>
              <p>{lap.desc}</p>
              <h3>{lap.price}</h3>
            </div>
          ))}
        {data.desktop &&
          data.desktop.map((desk) => (
            <div className="cards" key={desk.id}>
              <img src={desk.image} alt="" />
              <h3>{desk.title}</h3>
              <p>{desk.desc}</p>
              <h3>{desk.price}</h3>
            </div>
          ))}
        {data.tablet &&
          data.tablet.map((tab) => (
            <div className="cards" key={tab.id}>
              <img src={tab.image} alt="" />
              <h3>{tab.title}</h3>
              <p>{tab.desc}</p>
              <h3>{tab.price}</h3>
            </div>
          ))}
        {data.accessory &&
          data.accessory.map((tab) => (
            <div className="cards" key={tab.id}>
              <img src={tab.image} alt="" />
              <h3>{tab.title}</h3>
              <p>{tab.desc}</p>
              <h3>{tab.price}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
