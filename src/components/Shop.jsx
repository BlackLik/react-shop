import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex === -1) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder((prev) => [...prev, newItem]);
    } else {
      const updatedItem = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(updatedItem);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const updatedItem = order.filter((orderItem) => orderItem.id !== itemId);
    setOrder(updatedItem);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId) {
        const newQuantity = orderItem.quantity - 1;
        return {
          ...orderItem,
          quantity: newQuantity > 0 ? newQuantity : 0,
        };
      } else {
        return orderItem;
      }
    });
    const resultOrder = newOrder.filter((item) => item.quantity > 0);
    setOrder(resultOrder);
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
