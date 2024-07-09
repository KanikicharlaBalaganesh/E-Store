import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo3.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem; /* Increase logo size */
    transition: height 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 0 2.4rem;
    height: 8rem;

    .logo {
      height: 7rem; /* Adjust logo size for medium screens */
    }
  }

  @media (max-width: 480px) {
    padding: 0 1.6rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .logo {
      height: 6rem; /* Adjust logo size for small screens */
    }
  }
`;

export default Header;
