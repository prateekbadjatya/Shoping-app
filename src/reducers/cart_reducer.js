import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT
} from '../actions';
import { ConsoleWriter } from 'istanbul-lib-report';

const cart_reducer = (state, action) => {
  // ------------------
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
  //----------------------------
  if (action.type === CLEAR_CART) {
    localStorage.setItem('cart', null);
    return { ...state, cart: [] };
  }
  //-------------------------------------------
  if (action.type === REMOVE_CART_ITEM) {
    let id = action.payload;
    let cart = state.cart.filter(c => c.id !== id);
    return { ...state, cart };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const id = action.payload.id;
    let tempCart = [...state.cart];

    let filterCart = tempCart.map(c => {
      if (c.id === id) {
        if (action.payload.value === 'inc') {
          c.amount = c.amount + 1;
          if (c.amount > c.max) {
            c.amount = c.max;
          }
          return c;
        }
        if (action.payload.value === 'dec') {
          c.amount = c.amount - 1;
          if (c.amount < 1) {
            c.amount = 1;
          }
          return c;
        }
      }
      return c;
    });
    return { ...state, cart: filterCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
