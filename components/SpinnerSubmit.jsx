import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import MoonLoader from "react-spinners/MoonLoader";

const StyledSpinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledSpinner>
      <MoonLoader
        size={15}
        color={themeContext.colors.primary}
        loading={true}
      />
    </StyledSpinner>
  );
};

export default Spinner;
