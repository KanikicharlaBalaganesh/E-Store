import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { useMenuContext } from "../context/MenuContext";

const Nav = () => {
  const { menuOpen, setMenuOpen } = useMenuContext();
  const { total_item } = useCartContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavWrapper>
      <div className={menuOpen ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={toggleMenu}>
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        {/* Menu toggle button */}
        <div className="mobile-navbar-btn" onClick={toggleMenu}>
          {menuOpen ? (
            <CgClose className="mobile-nav-icon" />
          ) : (
            <CgMenu className="mobile-nav-icon" />
          )}
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.helper};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: none;
      background: none;
    }

    .navbar-lists {
      position: absolute;
      top: 10%; /* Start 10% from the top */
      left: 0;
      width: 100vw;
      height: 90vh; /* Adjust height accordingly */
      background-color: ${({ theme }) => theme.colors.black};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      visibility: hidden;
      opacity: 0;
    }

    .navbar.active .navbar-lists {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    .navbar-link {
      font-size: 4.2rem;
    }

    .cart-trolley--link .cart-trolley {
      font-size: 5.2rem;
    }

    .cart-total--item {
      width: 4.2rem;
      height: 4.2rem;
      font-size: 2rem;
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default Nav;
