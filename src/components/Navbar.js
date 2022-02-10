import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
  const { openSideBar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="nav-logo" src={logo} alt="compfyCloth" />
            </Link>
            <button
              onClick={() => openSideBar()}
              className="nav-btn nav-toggle"
              id="nav-btn"
            >
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link className="nav-link" to={link.url}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
            {myUser && (
              <li>
                <Link className="nav-link" to="/checkout">
                  Checkout
                </Link>
              </li>
            )}
          </ul>
          <CartButtons />
        </div>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  padding: 1rem;
  transition: var(--transition);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: grid;
    grid-template-columns: auto 1fr;
    .nav-toggle {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
      justify-self: end;
    }
    .nav-logo {
      width: 56px;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr 1fr;
      place-items: center;
      .nav-links {
        display: flex;
        justify-content: center;
        li {
          margin: 0 0.5rem;
        }
        text-transform: capitalize;
        .nav-link {
          color: var(--clr-grey-3);
          font-size: 1.5rem;
          text-transform: capitalize;
          letter-spacing: var(--spacing);
          padding: 0.5rem;
          &:hover {
            border-bottom: 2px solid var(--clr-primary-7);
          }
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
