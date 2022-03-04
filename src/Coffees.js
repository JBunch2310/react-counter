import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  const [temperature, setTemperature] = useState("hot");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((error) => console.error(error));
  }, [temperature]);
  return (
    <section className="coffee-container" id="coffees">
      {/* We need our JSX to be inside a SINGLE CONATINING TAG. That tag can be a React.Fragment <></> if we don't want any HTML to render  */}
      <h2>Coffee List</h2>
      <div className="button-container">
        <button onClick={() => setTemperature("hot")}>Hot</button>
        <button onClick={() => setTemperature("iced")}>Iced</button>
      </div>
      {!coffeeList ? (
        <h3> Loading Recipes...</h3>
      ) : (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}> {coffee.title}</li>;
          })}
        </ol>
      )}
    </section>
  );
}

export default Coffees;