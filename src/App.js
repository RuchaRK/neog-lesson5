import React, { useState } from "react";
import "./styles.css";

var textColor = "orange";

export default function App() {
  var shoppingList = ["milk", "bread", "veggies", "fruits", "sproyts", "water"];
  function getStyle(index) {
    if (index % 2 === 0) {
      var color = "Blue";
      var font = "italic";
      return { color, font };
    } else {
      var color = "purple";
      var font = "bolder";
      var bgColor = "orange";
      return { color, font, bgColor };
    }
  }

  return (
    <div className="App">
      <h1>Welcome Rucha</h1>
      <ui>
        {shoppingList.map((item, index) => {
          var makeUp = getStyle(index);
          return (
            <li
              key={item}
              style={{
                backgroundColor: makeUp.bgColor,
                padding: "0.5rem",
                color: makeUp.color,
                fontWeight: makeUp.font,
                fontStyle: makeUp.font
              }}
            >
              {item}{" "}
            </li>
          );
        })}
      </ui>
    </div>
  );
}
