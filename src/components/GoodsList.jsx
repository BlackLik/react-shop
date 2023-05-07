import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

function GoodsList() {
  const { goods } = useContext(ShopContext);

  return (
    <div className='goods'>
      {goods.length > 0 ? (
        goods.map((good) => <GoodsItem key={good.id} {...good} />)
      ) : (
        <h3>Not Found</h3>
      )}
    </div>
  );
}

export default GoodsList;
