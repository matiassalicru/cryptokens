import styled from "styled-components";
import { COLOR_PRIMARY } from "../../utils/constants";

export const SCInputSearch = styled.input`
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 1px solid ${COLOR_PRIMARY};
  border-radius: 5px;
  width: 50%;
  background: none;
  color: ${COLOR_PRIMARY};

  &:placeholder-shown {
    color: ${COLOR_PRIMARY} !important;
    font-style: italic;
    opacity: .5;
  }
`
