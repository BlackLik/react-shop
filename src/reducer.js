export function reducer(state, { type, payload }) {
  switch (type) {
    case 'CLOSE_ALERT':
      return { ...state, alertName: '' };
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex((item) => item.id === payload.id);
      let newOrder = null;
      if (itemIndex === -1) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case 'DEC_QUANTITY':
      let result = state.order.map((item) => {
        if (item.id === payload.id) {
          const newQuantity = item.quantity - 1 > 0 ? item.quantity - 1 : 0;
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      result = result.filter((item) => item.quantity > 0);

      return {
        ...state,
        order: result,
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    default:
      return state;
  }
}
