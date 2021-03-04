import React from "react";
import styled from "styled-components";
import InlineButton from "../_styles/inline-button";
import { BreakPoint, respond } from "../_styles/media";

const HotelViewBox = styled.main`
  background-color: #fff;
  flex: 1;
`;

export default function HotelView() {
  return (
    <HotelViewBox>
      <Gallery />
      <Overview />
      <Details />
      <CallToAction />
    </HotelViewBox>
  );
}

const GalleryBox = styled.div`
  display: flex;
  img {
    display: block;
    width: 100%;
  }
`;

function Gallery() {
  return (
    <GalleryBox>
      <figure>
        <img src="./images/hotel-1.jpg" alt="hotel1" />
      </figure>
      <figure>
        <img src="./images/hotel-2.jpg" alt="hotel2" />
      </figure>
      <figure>
        <img src="./images/hotel-3.jpg" alt="hotel3" />
      </figure>
    </GalleryBox>
  );
}

const OverviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--grey-light-2);

  .stars {
    margin-right: auto;
    display: flex;
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: var(--primary);
  }

  .location {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  .rating {
    background-color: var(--primary);
    color: #fff;
    margin-left: 3rem;
    align-self: stretch;
    padding: 0 2.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        
    ${respond(
            BreakPoint.small,
            ` padding:  0 1.5rem;
            `
    )}

    .rating-average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;
      ${respond(
            BreakPoint.small,
            `   font-size: 1.8rem;
            `
       )}
    }

    .rating-count {
      font-size: 0.8rem;
      text-transform: uppercase;
      ${respond(
            BreakPoint.small,
            `      font-size: .5rem;
            `
       )}
    }
  }
`;

function Overview() {
  return (
    <OverviewBox>
      <h1>Hotel Las Palams</h1>
      <div className="stars">
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-star"></use>
        </svg>
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-star"></use>
        </svg>
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-star"></use>
        </svg>
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-star"></use>
        </svg>
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-star"></use>
        </svg>
      </div>
      <div className="location">
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-location-pin"></use>
        </svg>
        <InlineButton>Albufeira, Portugal</InlineButton>
      </div>
      <div className="rating">
        <div className="rating-average">8.6</div>
        <div className="rating-count">429 votes</div>
      </div>
    </OverviewBox>
  );
}

const DetailsBox = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: var(--grey-light-1);
  border-bottom: var(--line);
  font-size: 1.4rem;
   
  ${respond(
        BreakPoint.medium,
        ` padding: 3rem;  
        `
   )}

  ${respond(
        BreakPoint.small,
        `  flex-direction: column;
        `
   )}

`;

function Details() {
  return (
    <DetailsBox>
      <Description />
      <UserReviews />
    </DetailsBox>
  );
}

const DescriptionBox = styled.div`
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;
  box-shadow: var(--shadow-light);

  ${respond(
        BreakPoint.medium,
        `  padding: 2rem; 
           margin-right: 3rem; 
           margin-bottom: 3rem;
        `
   )}

   ${respond(
        BreakPoint.small,
        `   margin-right: 0; 
        `
   )}

  .paragraph:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    margin: 3rem 0;
    padding: 3rem;
    border-top: var(--line);
    border-bottom: var(--line);
    display: flex;
    flex-wrap: wrap;
  }

  li {
    flex: 0 0 50%;
    margin-bottom: 0.7rem;
  }

  li::before {
    content: "";

    display: inline-block;
    margin-right: 1rem;
    height: 1rem;
    width: 1rem;
    background-color: var(--primary);
    mask-image: url("./images/chevron-thin-right.svg");
    mask-size: cover;
  }

  .recommend {
    font-size: 1.3rem;
    color: var(--grey-dark-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .friends {
        display: flex; 
    }
    img {
      box-sizing: content-box;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      border: 3px solid #fff;
      &:not(:last-child) {
        margin-right: -1.15rem;
      }
      
    }
  }
`;

function Description() {
  return (
    <DescriptionBox>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul>
        <li>Close to the beach</li>
        <li>Breakfast included</li>
        <li>Free airport shuttle</li>
        <li>Free wifi in all rooms</li>
        <li>Air conditioning and heating</li>
        <li>Pets allowed</li>
        <li>We speak all languages</li>
        <li>Perfect for families</li>
      </ul>
      <div className="recommend">
        <p className="count">Lucy and 3 other friends recommend this hotel.</p>
        <div className="friends">
          <img src="./images/user-3.jpg" alt="Friend 1" />
          <img src="./images/user-4.jpg" alt="Friend 2" />
          <img src="./images/user-5.jpg" alt="Friend 3" />
          <img src="./images/user-6.jpg" alt="Friend 4" />
        </div>
      </div>
    </DescriptionBox>
  );
}

const UserReviewsBox = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  margin-bottom: 3.5rem;

  ${respond(
        BreakPoint.medium,
        `  padding: 2rem; 
           margin-bottom: 3rem; 
        `
   )}

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 4.5rem;
    height: auto;
    border-radius: 50%;
  }

  figure {
    margin-bottom: 2rem;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--grey-light-1);
    padding: 1rem;
    position: relative;

    &::before {
      content: "\\201C";
      position: absolute;
      top: -2.75rem;
      left: -1rem;
      line-height: 1;
      font-size: 20rem;
      color: var(--grey-light-2);
      font-family: sans-serif;
      z-index: 1;
    }
  }

  .user-text {
    position: relative;
    z-index: 10;
  }

  figcaption {
    display: flex;
    margin: 3rem 0;
    align-items: flex-end;

    .user-box {
      margin-right: auto;
      margin-left: 1.5rem;
      flex: 0 0 8rem;
    }
    .name {
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .date {
      font-size: 0.9rem;
      color: var(--grey-dark-3);
    }
    .review-rating {
      font-size: 2.2rem;
      font-weight: 300;
      color: var(--primary);
    }
  }
`;

function UserReviews() {
  return (
    <UserReviewsBox>
      <figure>
        <blockquote className="user-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption>
          <img src="./images/user-1.jpg" alt="User 1" />
          <div className="user-box">
            <p className="name">Nick Smith</p>
            <p className="date">Feb 23rd, 2017</p>
          </div>
          <div className="review-rating">7.8</div>
        </figcaption>
      </figure>

      <figure>
        <blockquote className="user-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi.
        </blockquote>
        <figcaption>
          <img src="./images/user-2.jpg" alt="User 1" />
          <div className="user-box">
            <p className="name">Mary Thomas</p>
            <p className="date">Sept 13th, 2017</p>
          </div>
          <div className="review-rating">9.3</div>
        </figcaption>
      </figure>

      <InlineButton>
        Show all <span>&rarr;</span>
      </InlineButton>
    </UserReviewsBox>
  )
}

const CallToActionBox = styled.div`
  display: block;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respond(
        BreakPoint.medium,
        `  padding: 2rem; 
        `
   )}

  h2 {
    margin-bottom: 2rem;
  }

  button {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--grey-light-1);
    background-image: linear-gradient(
      to right bottom,
      var(--primary-light),
      var(--primary-dark)
    );
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--shadow-light);
    position: relative;
    overflow: hidden;

    &:focus {
      animation: pulsate 1s infinite;
    }
  }

  .visible,
  .invisible {
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all 0.2s;
  }

  .visible {
    padding: 2rem 7.5rem;
  }

  .invisible {
    position: absolute;
    padding: 2rem 0;
    left: 0;
    top: -100%;
  }

  button:hover .invisible {
    top: 0;
  }
  button:hover .visible {
    transform: translateY(100%);
  }
`;

function CallToAction() {
  return (
    <CallToActionBox>
      <h2>Good news! We have 4 free rooms for your selected dates!</h2>
      <button>
        <span className="visible">Book now</span>
        <span className="invisible">Only 4 rooms left</span>
      </button>
    </CallToActionBox>
  );
}
