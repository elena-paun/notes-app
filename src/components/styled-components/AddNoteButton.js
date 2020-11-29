import styled from 'styled-components'
import { AiFillPlusCircle } from "react-icons/ai";

export const AddNote = styled(AiFillPlusCircle).attrs({className: 'image'})`
  border-radius: 50%;
  cursor: pointer;
  margin-top: 40px;
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

  //   0% {
  //   transform: translateY(-30%);
  // } 
  //   10% {
  //   transform: translateY(-50%);
  // } 
  //   15% {
  //   transform: translateY(0%);
  // } 
  //   20% {
  //   transform: translateY(-30%);
  // } 
  // 25% {
  //  transform:rotate(180deg) translateY(0%);

  // }
  // 30% {
  //   transform: rotate(-360deg);
  // }
 
  // 40% {
  //   transform: rotate(180deg);
  // }
  
  // 55% {
  //   transform: rotate(0deg);
  // }

//     @keyframes wobble {
//     0% {
//     -webkit-transform: translateY(-35px);
//             transform: translateY(-35px);
//     -webkit-animation-timing-function: ease-in;
//             animation-timing-function: ease-in;
//     opacity: 1;
//   }
//   24% {
//     opacity: 1;
//   }
//   40% {
//     -webkit-transform: translateY(-24px);
//             transform: translateY(-24px);
//     -webkit-animation-timing-function: ease-in;
//             animation-timing-function: ease-in;
//   }
//   65% {
//     -webkit-transform: translateY(-12px);
//             transform: translateY(-12px);
//     -webkit-animation-timing-function: ease-in;
//             animation-timing-function: ease-in;
//   }
//   82% {
//     -webkit-transform: translateY(-6px);
//             transform: translateY(-6px);
//     -webkit-animation-timing-function: ease-in;
//             animation-timing-function: ease-in;
//   }
//   93% {
//     -webkit-transform: translateY(-4px);
//             transform: translateY(-4px);
//     -webkit-animation-timing-function: ease-in;
//             animation-timing-function: ease-in;
//   }
//   25%,
//   55%,
//   75%,
//   87% {
//     -webkit-transform:  translateY(0px);
//             transform:  translateY(0px);
//     -webkit-animation-timing-function: ease-out;
//             animation-timing-function: ease-out;
//   }
//   100% {
//     -webkit-transform: translateY(0px);
//             transform: translateY(0px);
//     -webkit-animation-timing-function: ease-out;
//             animation-timing-function: ease-out;
//     opacity: 1;

//  }
// }