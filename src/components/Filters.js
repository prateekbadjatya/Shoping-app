import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping
    },
    all_products,
    filtered_products,
    updateFilter,
    clearFilter
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');
  // console.log(colors);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={e => e.preventDefault()}>
          {/* Search Input */}
          <div className="form-control">
            <input
              className="search-input"
              placeholder="search"
              name="text"
              value={text}
              onChange={e => updateFilter(e)}
            ></input>
          </div>
          {/* categories */}
          <div className="form-control">
            <h5>categories</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={e => updateFilter(e)}
                    name="category"
                    type="button"
                    className={`${
                      category === cat.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <div className="form-control">
              <select
                onChange={e => updateFilter(e)}
                name="company"
                className="company"
                value={company}
              >
                {companies.map((comp, index) => {
                  return <option key={index}>{comp}</option>;
                })}
              </select>
            </div>
          </div>
          {/* Colors */}
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((clr, index) => {
                if (clr === 'all') {
                  return (
                    <button
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                      name="color"
                      key={index}
                      style={{ backgroundColor: clr }}
                      type="button"
                      data-color="all"
                      onClick={e => updateFilter(e)}
                    >
                      ALL
                    </button>
                  );
                }
                return (
                  <button
                    className={`color-btn ${color === clr ? 'active' : ''}`}
                    name="color"
                    key={index}
                    style={{ backgroundColor: clr }}
                    type="button"
                    data-color={clr}
                    onClick={e => updateFilter(e)}
                  >
                    {color === clr ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Price */}
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              value={price}
              type="range"
              name="price"
              max={max_price}
              min={min_price}
              onChange={e => updateFilter(e)}
            />
          </div>
          {/* Shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              onChange={e => updateFilter(e)}
              name="shipping"
              id="shipping"
              checked={shipping}
              type="checkbox"
            />
          </div>
        </form>
        <button onClick={clearFilter} className="clear-btn">
          Clear All Filter
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
