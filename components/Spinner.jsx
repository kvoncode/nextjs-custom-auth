import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import MoonLoader from "react-spinners/MoonLoader";

const StyledSpinner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Spinner = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledSpinner>
      <MoonLoader size={20} color={themeContext.colors.secondary} loading={true} />
    </StyledSpinner>
  );
};
