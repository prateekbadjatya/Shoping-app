import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { closeSideBar } = useProductsContext();
  const { cart } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link onClick={() => closeSideBar()} to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{cart.length}</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  width: 225px;

  .cart-btn {
    background: transparent;
    border: transparent;
    color: black;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .auth-btn {
    border: transparent;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`;
// const Wrapper = styled.div`

//   .cart-container {
//     display: flex;
//     align-items: center;
//     position: relative;
//     svg {
//       height: 1.6rem;
//       margin-left: 5px;
//     }
//   }
//   .cart-value {
//     position: absolute;
//     top: -10px;
//     right: -16px;
//     background: var(--clr-primary-5);
//     width: 16px;
//     height: 16px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     font-size: 0.75rem;
//     color: var(--clr-white);
//     padding: 12px;
//   }

//   }
// `;
export default CartButtons;
