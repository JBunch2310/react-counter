import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  const [temperature, setTemperature] =useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((res) => res.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => console.log(err));
  }, [temperature]);
  return (

    <section>
      <h2>Coffee Recipes</h2>
      <button onClick={() => setTemperature('hot')}>Hot</button>
      <button onClick={() => setTemperature('iced')}>Iecd</button>
      <button onClick={() => setTemperature('latte')}>Latte</button>
      {coffeeList ? (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}>{coffee.title}</li>;
          })}
        </ol>
      ) : (
        <p>Loading...</p>
      )}
      <h3>Recipes fo here</h3>
    </section>
  );
}

export default Coffees;