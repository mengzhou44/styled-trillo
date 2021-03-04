import React from "react";
import styled from "styled-components";
import { BreakPoint, respond } from "../_styles/media";
import Header from "./header";
import HotelView from "./hotel-view";
import Navigation from "./navigation";

const HomeBox = styled.div`
  max-width: 120rem;
  background-color: var(--grey-light-2);
  margin: 8rem auto;
  box-shadow: var(--shadow-dark);
  min-height: 50rem;

  ${respond(
    BreakPoint.largest,
    `
            margin: 0;
            max-width: 100%; 
            width: 100%; 
     `
  )}

  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    ${respond(
        BreakPoint.medium,
        `
           flex-direction: column; 
        `
    )}
  }
`;

export default function Home() {
  return (
    <HomeBox>
      <Header />
      <div className="content">
        <Navigation />
        <HotelView />
      </div>
    </HomeBox>
  );
}
