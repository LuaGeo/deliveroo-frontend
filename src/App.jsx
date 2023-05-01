import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--6v4khcscf8qp.code.run/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="app">
      <section className="restaurant">
        <h1>{data.restaurant.name}</h1>
        <h3>{data.restaurant.description}</h3>
      </section>
      {data.categories.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <div className="categoryContainer" key={index}></div>
            {item.meals.map((subItem, index) => {
              return (
                <div className="categoryContainer" key={index}>
                  <div className="mealContainer">
                    <div className="mealText">
                      <h4>{subItem.title}</h4>
                      <p>{subItem.description}</p>
                      <h3 className="price">{subItem.price}</h3>
                    </div>
                    <div>
                      <img src={subItem.picture} alt="" />
                    </div>
                  </div>
                  //{" "}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
