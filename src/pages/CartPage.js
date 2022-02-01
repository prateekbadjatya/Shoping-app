import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper
        style={{ display: 'grid', placeItems: 'center' }}
        className="empty-cart"
        className="page-100"
      >
        <div className="empty-container">
          <h2>Your Cart is Empty</h2>
          <Link className="btn" to="/products">
            Fill It
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero currentPage="Cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    margin-bottom: 1rem;
    text-transform: none;
  }
`;

export default CartPage;
