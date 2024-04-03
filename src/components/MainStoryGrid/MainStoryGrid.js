import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";

  --column-gap: 32px;
  row-gap: 48px;

  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";

    row-gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: calc(var(--column-gap) / 2);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: calc(var(--column-gap) / 2);
  }

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: calc(var(--column-gap) / 2);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    --border-spacing: 16px;
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: var(--border-spacing);
    margin-bottom: var(--border-spacing);
  }
`;

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    & > *:not(:last-child) {
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: calc(var(--column-gap) / 2);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    margin-left: calc(var(--column-gap) / 2);
    padding-top: calc(var(--column-gap) / 2);
    margin-top: calc(var(--column-gap) / 2);
  }
`;

export default MainStoryGrid;
