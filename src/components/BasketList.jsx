import PropTypes from 'prop-types';
import BacketItem from './BacketItem';

function BasketList(props) {
  const order = props.order ? props.order : [];
  const handleBasketShow = props.handleBasketShow
    ? props.handleBasketShow
    : () => {};
  const removeFromBasket = props.removeFromBasket
    ? props.removeFromBasket
    : () => {};

  const incQuantity = props.incQuantity;
  const decQuantity = props.decQuantity;

  const totalPrice = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length > 0 ? (
        order.map((item) => (
          <BacketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} V
      </li>
      <li className='collection-item'>
        <button className='waves-effect waves-teal btn-small'>
          Купить
        </button>
      </li>
      <button className='basket-close' onClick={() => handleBasketShow(false)}>
        <i className='material-icons'>close</i>
      </button>
    </ul>
  );
}

BasketList.propTypes = {
  order: PropTypes.array.isRequired,
  handleBasketShow: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  incQuantity: PropTypes.func,
  decQuantity: PropTypes.func,
};

export default BasketList;
