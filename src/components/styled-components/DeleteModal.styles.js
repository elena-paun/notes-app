import styled from 'styled-components'
import { HiCheckCircle } from 'react-icons/hi'
import { HiOutlineXCircle } from 'react-icons/hi'

export const Text = styled.div`
  font-family: Sofia;
  font-weight: bold;
  color: ${props => props.style};
  margin-top: 40px;
`
export const Buttons = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 45px;
  bottom: 0;
  left: 0;
  margin-bottom: 50px;
`
export const DeleteNote = styled(HiOutlineXCircle)`
  color: ${props => props.style};
  height: 45px;
  width: 45px;
  position: absolute;
  cursor: pointer;
  margin-left: 50px;
  top: 0;
`
export const CheckButton = styled(HiCheckCircle)`
  color: ${props => props.style};
  position: absolute;
  right: 0;
  height: 45px;
  width: 45px;
  float: right;
  cursor: pointer;
  margin-right: 50px;
`
export const Delete = styled.div`
    position: absolute;
    width: 180px;
    height: 180px;
    background: white;
    transform: translate(-50%, -50%);
    background-color: ${props => props.color};
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    align-items: center;
    margin-left: 90px;
    margin-top: -50px;
`