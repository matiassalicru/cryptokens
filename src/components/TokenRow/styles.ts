import styled from "styled-components";
import { COLOR_PRIMARY } from "../../utils/constants";

export const SCCoinContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 600px;
`

export const SCTitle = styled.h1`
  font-size: 3em;
  font-style: italic;
  font-family: 'Montserrat';
  font-weight: 100;
  color: ${COLOR_PRIMARY};
`
