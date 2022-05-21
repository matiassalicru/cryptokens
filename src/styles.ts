import styled from "styled-components";

// Constants
import { BACKGROUND_COLOR, COLOR_PRIMARY, DEFAULT_FONT } from "./utils/constants";

export const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${BACKGROUND_COLOR};
  height: fit-content;
  padding: 50px 0;
`

export const SCTitle = styled.h1`
  font-size: 3em;
  font-style: italic;
  font-family: ${DEFAULT_FONT};
  font-weight: 600;
  color: ${COLOR_PRIMARY};
`

export const SCButtonsWrapper = styled.div`
  display: flex;
`
