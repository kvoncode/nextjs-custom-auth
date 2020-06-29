import styled from "styled-components";

export const StyledInfoError = styled.div`
  color: red;
`;
export const StyledInfo = styled.div`
  color: green;
`;

export const StyledInput = styled.input`
  border: none;
  background: ${(props) => props.theme.colors.tertiary};
  font-size: 1rem;
  height: 1.5rem;
  width: 20rem;
  padding: 0.1rem 0.5rem;
  color: #333232;
  border: 2px solid ${(props) => props.theme.colors.quaternary};
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.quaternary};
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledSubmit = styled.button`
  margin: 1rem 0;
  background: ${(props) => props.theme.colors.secondary};
  color: white;
  width: 100%;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: white;
    color: ${(props) => props.theme.colors.secondary};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 1px 10px ${(props) => props.theme.colors.secondary};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledHeader = styled.h2`
  color: ${(props) => props.theme.colors.quaternary};
  font-family: "MuseoModerno", cursive;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.secondary};
`;

// limited area with shadow
export const StyledFormContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 330px;
`;

// most outer layer div container
export const StyledFormOutermost = styled.div`
  color: #232b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  font-family: "Open Sans", sans-serif;
  height: 80vh;
`;
