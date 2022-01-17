import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const isOpen = false;
  return (
    <SidebarContainer>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : 'show-sidebar'}`}>
        <div className="sidebar-header">
          <img alt="logo" src={logo}></img>
          <button className="close-btn" type="btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 1rem 1.5rem;
    img {
      height: 45px;
      justify-self: center;
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
  }
  .close-btn {
    background: transparent;
    border: transparent;
    color: darkred;
    font-size: 3rem;
    cursor: pointer;
    justify-self: end;
    transition: var(--transition);
    &:hover {
      color: indianred;
    }
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    place-items: center;
    margin-top: 6rem;
    letter-spacing: var(--spacing);

    a {
      display: block;
      transition: var(--transition);
      color: var(--clr-grey-3);
    }
  }
  .links a:hover {
    padding-left: 2rem;
    color: var(--clr-primary-5);
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
`;

export default Sidebar;
