const Cart = ({ cart }) => {
  return (
    <div className="cartContainer">
      <button>Valider mon panier</button>
      <h5>{cart}</h5>
    </div>
  );
};

export default Cart;
