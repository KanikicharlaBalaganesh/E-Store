import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    padding: 0 2rem;
  }

  .common-heading {
    color: ${({ theme }) => theme.colors.white};
    margin-left: 2rem;
    margin-top: 1.5rem;
  }

  .intro-data {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.helper};
    margin: 0rem 2rem;
    font-size: 2rem; /* Increase font size */
    font-weight: bold; /* Optional: Make the text bold */
  }

  .grid {
    padding: 0 2rem; /* Add padding to the grid */
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem; /* Add gap between grid items */

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr); /* 1 column on small screens */
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;

      @media (max-width: 768px) {
        height: auto; /* Auto height on small screens */
        width: 100%;
      }
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;

      @media (max-width: 768px) {
        font-size: 1rem; /* Adjust font size on small screens */
      }
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;

      @media (max-width: 768px) {
        font-size: 1.2rem; /* Adjust font size on small screens */
      }
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }

      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;

        @media (max-width: 768px) {
          font-size: 1.2rem; /* Adjust font size on small screens */
        }
      }
    }
  }
`;

export default FeatureProduct;
