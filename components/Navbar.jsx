import styled from "styled-components";

import Link from "next/link";

const StyledNavbar = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const StyledLink = styled.a`
  display: inline-flex;
  justify-content: center;
  width: 120px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Open Sans", sans-serif;
  margin: 1rem;
  text-decoration: none;
  padding: 7px 10px;
  border-bottom: 3px solid ${(props) => props.theme.colors.quaternary};
  transition: all 0.4s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.tertiary};
    border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  }
`;

const StyledLinks = styled.div``;

export const Navbar = () => {
  return (
    <div>
      <StyledNavbar>
        <StyledLinks>
          <Link href="/" passHref>
            <StyledLink>HOME</StyledLink>
          </Link>
          <Link href="/registration" passHref>
            <StyledLink>SIGN UP</StyledLink>
          </Link>
        </StyledLinks>
      </StyledNavbar>
    </div>
  );
};
