import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  resize: none;
  border: none;
  border-radius: 1rem;
  padding: 1.6rem;

  margin-bottom: .8rem;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: 1.6rem;
    font-family: "Roboto Slab";
  } 
`