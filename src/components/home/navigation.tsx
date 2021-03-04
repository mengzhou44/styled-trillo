import styled from "styled-components";
import { BreakPoint, respond } from "../_styles/media";

const NavigationBox = styled.nav`
  background-color: var(--grey-dark-1);
  flex: 0 0 18%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${respond(
        BreakPoint.medium,
        `
           padding-top: 0rem; 
           padding-bottom: 0rem; 
        `
   )}


  ul {
    font-size: 1.4rem;
    list-style: none;
      ${respond(
        BreakPoint.medium,
        `
           display: flex; 
        `
   )}
  }

  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
      ${respond(
        BreakPoint.medium,
        `
           margin-bottom: 0rem;
           flex:1;
        `
      )}
    }
    position: relative;
    ${respond(
        BreakPoint.medium,
        `
          display: inline-block; 
         
        `
   )}
  }

  li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: var(--primary);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  li:hover::before,
  .active::before {
    width: 100%;
    transform: scaleY(1);
  }

  li:active::before {
    background-color: var(--primary-light);
  }

  a:link,
  a:visited {
    color: var(--grey-light-1);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    ${respond(
        BreakPoint.medium,
        `
           justify-content: center; 
        `
   )}

   ${respond(
        BreakPoint.small,
        `
           flex-direction: column;
           align-items: center; 
           padding: 1.5rem; 
        `
   )}
  }

  svg {
    height: 1.75rem;
    width: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;
    ${respond(
        BreakPoint.small,
        ` margin-right: 0rem;
        `
   )}
  }

  .legal {
    font-size: 1.2rem;
    color: var(--grey-light-4);
    text-align: center;
    padding: 2.5rem;

    ${respond(
        BreakPoint.medium,
        `
          display: none; 
        `
   )}
  }
`;

export default function Navigation() {
  return (
    <NavigationBox>
      <ul>
        <li className="active">
          <a href="#">
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">
        &copy; 2021 Copyright by Trillo. All Rights Reserved.
      </div>
    </NavigationBox>
  );
}
