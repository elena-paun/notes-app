import styled from 'styled-components'

export const StyledThemeColor = styled.div.attrs({ className: 'load' })`
  transition: opacity 1s both;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  margin-top: 15px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  transition-delay: 5s;
  animation: ${props => props.showColors ? 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' : 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'};
  @keyframes slide-in-bottom {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
  @keyframes slide-in-top {
  0% {
    opacity: 0;
  }
  100% {
    opacity:  1;
  }

}
   &:nth-of-type(1) {
    animation-delay: ${props => props.showColors ? '0s' : '.8s'};

  }
 &:nth-of-type(2) {
    animation-delay: ${props => props.showColors ? '.2s' : '.6s'}; 
 
  }
  &:nth-of-type(3) {
    animation-delay: .4s;
  }
 &:nth-of-type(4) {
    animation-delay: ${props => props.showColors  ? '.6s' : '.2s'};
  }
 &:nth-of-type(5) {
    animation-delay: ${props => props.showColors? '.8s' : '0s'};
  }
`
  // &:nth-child(1) {
  //   animation-delay: 0s;
  // }
  // &:nth-child(2) {
  //   animation-delay: .2s; 
  // }
  // &:nth-child(3) {
  //   animation-delay: .4s;
  // }
  // &:nth-child(4) {
  //   animation-delay: .6s;
  // }
  // &:nth-child(5) {
  //   animation-delay: .8s;
  // }
export const ColorContainer = styled.div`
  text-align: -webkit-center;
`
//  &:nth-child(1) {
//         animation-delay: ${props => props.wobble === '0' ? '0s' : '.8s'};

//   }
//   &:nth-child(2) {
//         animation-delay: ${props => props.wobble === '0' ? '.2s' : '.6s'}; 
 
//   }
//   &:nth-child(3) {
//     animation-delay: .4s;
//   }
//   &:nth-child(4) {
//     animation-delay: ${props => props.wobble === '0' ? '.6s' : '.2s'};
//   }
//   &:nth-child(5) {
//     animation-delay: ${props => props.wobble === '0' ? '.8s' : '0s'};
//   }
//  &:nth-of-type(1) {
//     animation-delay: 6s; 
//   }
//   &:nth-child(2) {
//     animation-delay: 4s; 
//   }
//   &:nth-child(3) {
//     animation-delay: 2s; 
//   }
//   &:nth-child(4) {
//     animation-delay: 0s; 
//   }
