import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images = [{ url: '' }] }) => {
  // console.log(images);
  const [main, setMain] = useState(images[0]);
  // const [mainImageId, setIsimageActive] = useState

  return (
    <Wrapper>
      <img className="main-image" src={main.url} alt="main image" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              onMouseOver={() => setMain(images[index])}
              key={index}
              // onClick={() => setMain(images[index])}
              src={image.url}
              alt="gallery image"
              className={main && main.id === image.id ? 'active' : null}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-image {
    height: 600px;
    transition: var(--transition);
  }
  .main-image:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--radius);
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
