import styled from 'styled-components'
import { AiFillPlusCircle } from "react-icons/ai";

export const AddNote = styled(AiFillPlusCircle).attrs({className: 'image'})`
  border-radius: 50%;
  width: 60%;
  cursor: pointer;
  margin-top: 30px;
  &.image[wobble='1'] {
      animation: swirl-in-fwd 0.6s ease-out both;
  }
  @keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
`
