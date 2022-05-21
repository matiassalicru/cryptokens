import styled from "styled-components";
import { DEFAULT_FONT } from "../../../utils/constants";

export const SCCoinContainer = styled.div`
  grid-template-columns: repeat(3, max-content);
  justify-items: center;
  align-items: center;
  display: grid;
  width: 100%;
`

export const SCTokenTitle = styled.h1`
  font-family: ${DEFAULT_FONT};
  font-weight: 300;
  font-size: 2rem;
  width: 220px;
`

export const SCTokenPrice = styled.h2`
  font-family: ${DEFAULT_FONT};
  font-weight: 500;
`

export const SCTokenLogo = styled.img`
  margin: 0 20px;
`
