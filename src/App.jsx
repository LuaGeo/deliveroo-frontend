import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/imgs/logo-teal.svg";
import Meal from "./components/Meal";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const [counter, setCounter] = useState(0);

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
      <header>
        <div className="container">
          <img src={logo} alt="logo deliveroo" />
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="restaurantInfo">
            <h1>{data.restaurant.name}</h1>
            <h3>{data.restaurant.description}</h3>
          </div>
          <img src={data.restaurant.picture} alt="" />
        </div>
      </section>

      <main>
        <div className="container">
          <section className="colLeft">
            {data.categories.map((category) => {
              if (category.meals.length !== 0) {
                return (
                  <div key={category.name}>
                    <h2>{category.name}</h2>
                    <div className="categoryContainer">
                      {category.meals.map((meal) => {
                        return (
                          <Meal
                            key={meal.id}
                            meal={meal}
                            cart={cart}
                            setCart={setCart}
                            setPrice={setPrice}
                            counter={counter}
                            setCounter={setCounter}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <section className="colRight">
            <Cart
              setCart={setCart}
              cart={cart}
              price={price}
              setPrice={setPrice}
              counter={counter}
              setCounter={setCounter}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
