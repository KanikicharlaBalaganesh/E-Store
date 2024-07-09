import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useMenuContext } from "../context/MenuContext";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const { menuOpen } = useMenuContext();

  return (
    <Wrapper menuOpen={menuOpen}>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button className="btn">show now</Button>
            </NavLink>
          </div>
          {/* our homepage image */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero1.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 0rem 2rem;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      margin: 0rem 2rem;
    }

    .intro-data {
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.helper};
      margin: 0rem 2rem;
    }
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.helper};
    margin: 2rem 2rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(14, 156, 71, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero-section-image {
      display: ${(props) => (props.menuOpen ? "none" : "flex")};
    }

    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(14, 156, 71, 0.4);
    }
  }
`;

export default HeroSection;
