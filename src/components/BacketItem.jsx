import PropTypes from 'prop-types';

function BacketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    incQuantity,
    decQuantity,
  } = props;
  return (
    <li className='collection-item' id={id}>
      {name}{' '}
      <i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>
        remove
      </i>{' '}
      x{quantity}{' '}
      <i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>
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
  removeFromBasket: PropTypes.func,
  incQuantity: PropTypes.func,
  decQuantity: PropTypes.func,
};

export default BacketItem;
