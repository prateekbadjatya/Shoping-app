import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero currentPage="About" />
      <Wrapper className="section section-center">
        <img src={aboutImg} alt="myImage" />
        <article>
          <div className="title" style={{ textAlign: 'left' }}>
            <h2>Our Story</h2>
            <div className="underline" style={{ marginLeft: 0 }}></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eius
            nesciunt illo quaerat nobis dignissimos delectus possimus,
            consectetur laboriosam, quas reprehenderit minus vel corrupti natus
            impedit nemo molestias animi ab. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nemo, provident exercitationem! Iure
            voluptates voluptatum ducimus, quibusdam ex esse harum. Cupiditate
            qui, et debitis ad inventore non! Architecto, minima necessitatibus.
            Eum beatae nostrum laudantium in. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Est eius nesciunt illo quaerat nobis
            dignissimos delectus possimus, consectetur laboriosam, quas
            reprehenderit minus vel corrupti natus impedit nemo molestias animi
            ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            provident exercitationem! Iure voluptates voluptatum ducimus,
            quibusdam ex esse harum. Cupiditate qui, et debitis ad inventore
            non! Architecto, minima necessitatibus. Eum beatae nostrum
            laudantium in.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;

  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 100%;
    display: block;
    height: 500px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem auto 0px;
    color: var(--clr-grey-5);
  }
`;
export default AboutPage;
