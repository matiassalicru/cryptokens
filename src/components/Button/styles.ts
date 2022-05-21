import styled from "styled-components";
import { BACKGROUND_COLOR, COLOR_PRIMARY, COLOR_SECONDARY } from "../../utils/constants";

export const SCButton = styled.button`
  padding: 10px 20px;
  background: none;
  color: ${COLOR_PRIMARY};
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  box-shadow: 2px 2px 2px white;
  font-size: 1.2em;
  margin: 20px;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 0 0;
  }

  &:disabled {
    background-color: ${COLOR_PRIMARY};
    color: ${COLOR_SECONDARY};
    cursor: auto;
  }
`
