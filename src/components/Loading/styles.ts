import styled, { keyframes } from 'styled-components'
import { BACKGROUND_COLOR, COLOR_PRIMARY, COLOR_SECONDARY } from '../../utils/constants'

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const SCContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SCLoadingAnimation = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 5px solid ${COLOR_PRIMARY};
  padding: 20px;
  background-color: transparent;
  border-top-color: ${BACKGROUND_COLOR};
  animation: ${rotate} 1s linear infinite ;
`


