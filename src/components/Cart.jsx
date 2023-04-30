import PropTypes from "prop-types";

function Cart(props) {
  const quantity = props.quantity;
  const handleBasketShow = props.handleBasketShow;
  return (
    <button
      className="cart blue darken-4 white-text"
      onClick={() => handleBasketShow()}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity ">{quantity}</span> : null}
    </button>
  );
}

Cart.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleBasketShow: PropTypes.func,
};

export default Cart;
