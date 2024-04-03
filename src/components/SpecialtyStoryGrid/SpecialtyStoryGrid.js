import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 64px;
  grid-template-areas:
    "markets-section"
    "sports-section";

  @media ${QUERIES.laptopAndUp} {
    --laptop-grid-spacing: 32px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "markets-section sports-section";
    gap: 0px;
  }
`;

const MarketsSection = styled.section`
  grid-area: markets-section;

  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--laptop-grid-spacing);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  grid-area: sports-section;
  overflow: auto;

  @media ${QUERIES.laptopAndUp} {
    padding-left: var(--laptop-grid-spacing);
    border-left: 1px solid var(--color-gray-300);
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  overflow: auto;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
