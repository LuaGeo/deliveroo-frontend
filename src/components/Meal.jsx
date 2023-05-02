const Meal = ({ meal }) => {
  return (
    <article>
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
