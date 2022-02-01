import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product = { colors: [] } }) => {
  const [isActive, setIsAtive] = useState(product.colors[0]);
  const [amount, setAmount] = useState(1);
  let { id, stock, colors } = product;
  const { addTocart } = useCartContext();

  const increase = () => {
    setAmount(prev => {
      let tempAmount = prev + 1;
      if (tempAmount > stock) {
        return stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount(prev => {
      let tempAmount = prev - 1;
      if (tempAmount < 1) {
        return 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>Colors :</span>
        <div>
          {colors.map((clr, index) => {
            return (
              <button
                onClick={() => setIsAtive(colors[index])}
                key={index}
                className={`color-btn ${isActive === clr ? 'active' : ''}`}
                style={{ backgroundColor: clr }}
              >
                {isActive === clr && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addTocart(id, isActive, amount, product)}
        >
          Add to Cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
      column-gap: 0.5rem;
    }
  }
  .color-btn {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .btn-container {
    margin-top: 2rem;

    .btn {
      margin-top: 1rem;
      width: 140px;
    }
  }
`;
export default AddToCart;
