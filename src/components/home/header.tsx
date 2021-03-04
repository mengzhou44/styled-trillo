import styled from 'styled-components';
import { BreakPoint, respond } from '../_styles/media';

const HeaderBox = styled.header`
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: 1px solid var(--grey-light-2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${respond(BreakPoint.smallest,
    `   
       flex-wrap: wrap;
       height: 12rem;
       align-content: space-around;
     `
    )}

  .logo {
    height: 3.25rem;
    width: auto;
    margin-left: 2rem;
  }

  .search {
    flex: 0 0 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
   
    ${respond(
    BreakPoint.smallest,
    `   
         order: 3;
         flex: 0 0 100%;
         background-color: var(--grey-light-2);
     `
    )}

    input {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      border: none;

      background-color: var(--grey-light-2);
      padding: 0.7rem 2rem;
      border-radius: 100px;
      width: 90%;
      margin-right: -3.25rem;

      &:focus {
        outline: none;
        width: 100%;
        background-color: var(--grey-light-3);
      }

      &::-webkit-input-placeholder {
        font-weight: 100;
        color: var(--grey-light-4);
      }
    }

    button {
      border: none;
      background-color: var(--grey-light-2);
      &:focus {
        outline: none;
      }
      &:active {
        transform: translateY(2px);
      }
      padding-top: 2px;
    }

    input:focus + button {
      background-color: var(--grey-light-3);
    }

    svg {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
      fill: var(--grey-dark-3);
    }
  }

  .user-nav {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > * {
      height: 100%;
      padding: 0 2rem;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: var(--grey-light-2);
      }
    }
    .icon-box {
      display: flex;
      align-items: center;
      position: relative;
      svg {
        height: 2.25rem;
        width: 2.25rem;
        fill: var(--grey-dark-2);
      }
      .notification {
        font-size: 0.8rem;
        width: 1.75rem;
        height: 1.75rem;

        border-radius: 50%;
        background-color: var(--primary);
        color: #fff;
        position: absolute;
        top: 2rem;
        right: 1.25rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .user-box {
      display: flex;
      align-items: center;
      img {
        height: 3.75rem;
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <img src='./images/logo.png' className='logo' alt='trillo logo' />
      <form action='#' className='search'>
        <input type='text' placeholder='Search Hotels'></input>
        <button type='submit'>
          <svg className='search-icon'>
            <use xlinkHref='./images/sprite.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>
      <nav className='user-nav'>
        <div className='icon-box'>
          <svg>
            <use xlinkHref='./images/sprite.svg#icon-bookmark'></use>
          </svg>
          <span className='notification'>7</span>
        </div>
        <div className='icon-box'>
          <svg>
            <use xlinkHref='./images/sprite.svg#icon-chat'></use>
          </svg>
          <span className='notification'>13</span>
        </div>
        <div className='user-box'>
          <img src='./images/user.jpg' alt='user photo' />
          <span className='user-name'>Jonas</span>
        </div>
      </nav>
    </HeaderBox>
  );
}
