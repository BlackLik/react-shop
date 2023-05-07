import { ShopContext } from '../context';
import { useContext } from 'react';

function Cart() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const quantity = order.length;
  return (
    <button
      className='cart blue darken-4 white-text'
      onClick={() => handleBasketShow()}
    >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity '>{quantity}</span> : null}
    </button>
  );
}

export default Cart;
