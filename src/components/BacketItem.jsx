import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BacketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, incQuantity, decQuantity } = useContext(
    ShopContext,
  );

  return (
    <li className='collection-item' id={id}>
      {name}{' '}
      <i
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price}
      <button
        className='secondary-content basket-delete'
        onClick={() => removeFromBasket(id)}
      >
        <i className='material-icons'>close</i>
      </button>
    </li>
  );
}

BacketItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default BacketItem;
