import BacketItem from './BacketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketList() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length > 0 ? (
        order.map((item) => <BacketItem key={item.id} {...item} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} V
      </li>
      <li className='collection-item'>
        <button className='waves-effect waves-teal btn-small'>Купить</button>
      </li>
      <button className='basket-close' onClick={() => handleBasketShow(false)}>
        <i className='material-icons'>close</i>
      </button>
    </ul>
  );
}

export default BasketList;
