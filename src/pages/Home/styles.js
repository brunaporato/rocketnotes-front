import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
  "logo header"
  "menu search"
  "menu content"
  "newnote content";

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Logo = styled.div`
  grid-area: logo;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 6.4rem;
  text-align: center;
`

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
`

export const NewNote = styled(Link)`
  grid-area: newnote;
  background: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  font-size: 1.8rem;

  display: flex;
  gap: .8rem;
  align-items: center;
  justify-content: center;
`
