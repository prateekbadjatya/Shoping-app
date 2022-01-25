import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_products,
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct
  } = useProductsContext();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error]);
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const {
    name,
    price,
    description,
    stock,
    starts,
    reviews,
    id: sku,
    company,
    images
  } = single_products;
  return (
    <Wrapper>
      <PageHero urlArray={['products']} currentPage={name} />
      <div className="section section-center">
        <Link to="/products" className="btn">
          BACK TO PRODUCTS
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
