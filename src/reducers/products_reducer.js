import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR
} from '../actions';

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    // console.log(action);
    return {
      ...state,
      isSideBarOpen: true
    };
  }
  if (action.type === SIDEBAR_CLOSE) {
    // console.log(action);
    return {
      ...state,
      isSideBarOpen: false
    };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_error: true,
      products_loading: false
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      product => product.featured
    );
    return {
      ...state,
      featured_products,
      products: action.payload,
      products_error: false,
      products_loading: false
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
