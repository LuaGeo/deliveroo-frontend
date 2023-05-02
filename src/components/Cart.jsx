const Cart = ({ cart, price, counter, setCounter, handleCart }) => {
  return (
    <div className="cartContainer">
      <button className="confirmButton">Valider mon panier</button>
      {cart.map((item, index) => {
        return (
          <div key={index}>
            <div className="incrementsContainer">
              <button
                onClick={() => {
                  setCounter(counter - 1);
                }}
                className="increment"
              >
                -
              </button>
              <h5 className="counter">{counter}</h5>
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
                className="increment"
              >
                +
              </button>
            </div>
            <div className="titleAndPrice">
              <h5>{item}</h5>
              {/* {!item ? <h5>{item}</h5> : setCounter(counter + 1)} */}
              <h5>{price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
