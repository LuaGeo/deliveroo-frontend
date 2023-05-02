const Meal = ({ meal, setCart, setPrice, setCounter, counter, cart }) => {
  return (
    <article
      onClick={() => {
        const cartCopy = [...cart];
        cartCopy.push(meal.title);
        setCart(cartCopy);
        setPrice(meal.price + " €");
        cart === meal.title ? setCounter(counter + 1) : setCounter(counter + 1);
      }}
    >
      <div className="mealText">
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <h3 className="price">{meal.price} €</h3>
      </div>
      {meal.picture && <img src={meal.picture} alt={meal.title} />}
    </article>
  );
};

export default Meal;
