import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <ButtonGroup>
          <ButtonWrapper>
            <Button>Subscribe</Button>
            <Link>Already a subscriber?</Link>
          </ButtonWrapper>
        </ButtonGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  flex: 1;
  display: none;
  color: var(--color-gray-900);

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const ButtonGroup = styled.div`
  flex: 1;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: flex-end;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Link = styled.a`
  font-weight: var(--font-weight-normal);
  font-style: italic;
  color: var(--color-gray-900);

  text-decoration: underline;
  text-underline-offset: 1px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
