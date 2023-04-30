import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  return (
    <div className="goods">
      {goods.length > 0 ? (
        goods.map((good) => (
          <GoodsItem key={good.id} {...good} addToBasket={addToBasket} />
        ))
      ) : (
        <h3>Not Found</h3>
      )}
    </div>
  );
}

export default GoodsList;
