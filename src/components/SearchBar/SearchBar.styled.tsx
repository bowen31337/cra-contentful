import styled from "styled-components";

export const SearchIconStyled = styled.button`
  padding: 0 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: white;
`;

export const InputBaseStyled = styled.div`
  & .MuiInputBase-input {
    color: inherit;
    padding: 8px;
    padding-left: 48px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    @media (min-width: 768px) {
      width: 200px;
      &:focus {
        width: 300px;
      }
    }
  }
`;


export const SearchFormStyled = styled.form`
    position: relative;
    borderRadius: 2px;
    background-color: #1976d2;
    margin-left: 0;
    background-color: rgba(255, 255, 255, 0.15);
  `