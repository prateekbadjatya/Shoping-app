import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ currentPage, urlArray }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link className="link" to="/">
            Home
          </Link>
          {urlArray &&
            urlArray.map((element, index) => {
              return (
                <Link key={index} className="link" to={`/${element}`}>
                  / {element}
                </Link>
              );
            })}
          / {currentPage}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .link {
    text-transform: capitalize;
  }
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    font-size: 1.5rem;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
