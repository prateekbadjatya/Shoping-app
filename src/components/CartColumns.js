import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Qunaitity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      margin-top: 2rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
    span {
        span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartColumns;
