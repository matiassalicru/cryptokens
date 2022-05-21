import styled from "styled-components";
import { COLOR_PRIMARY, DEFAULT_FONT } from "../../utils/constants";

export const SCTokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLOR_PRIMARY}
`

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
  font-family: ${DEFAULT_FONT};
  font-weight: 100;
  color: ${COLOR_PRIMARY};
`

export const SCTokenTitle = styled.h1`
  font-size: 2rem;
  font-family: ${DEFAULT_FONT};
  font-weight: 300;
`

export const SCTokenPrice = styled.h2`
  font-family: ${DEFAULT_FONT};
  font-weight: 300;
`