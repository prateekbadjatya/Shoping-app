import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT
} from '../actions';
import { ConsoleWriter } from 'istanbul-lib-report';

const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload;
    let tempItem = [];
    console.log(state.cart);
    if (state && state.cart) {
      tempItem = state.cart.find(i => i.id === id + color);
    }
    if (tempItem) {
      const tempcart = state.cart.map(cartItem => {
        if (id + color === cartItem.id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempcart };
    } else {
      const newItem = {
        id: id + color,
        color,
        amount,
        name: product.name,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
