import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload]
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    return {
      ...state,
      filtered_products: tempProducts
    };
  }

  if (action.type === UPDATE_FILTERS) {
    return {
      ...state
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    return {
      ...state
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
