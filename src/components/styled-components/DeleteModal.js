/* eslint-disable no-mixed-operators */
import React from 'react'
import styled from 'styled-components'
import { HiCheckCircle } from 'react-icons/hi'
import { HiOutlineXCircle } from 'react-icons/hi'
export const DeleteModal = ({ color, setShowModal, id }) => {
  const lightenColor = (color, percent) => {
    console.log(color)
  	const num = parseInt(color.replace('#', ''),16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) + amt,
		B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
    

    return '#' + (0x1000000 +
      (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 +
      (G < 255 ? G < 1 ? 0 : G : 255))
      .toString(16).slice(1);
  };
  const deleteNote = (id) => {
    // const delete
  }
  console.log(id)
  return (
    <Delete color={color} id='modalContainer'>
      <Text style={() => lightenColor(color, -50)}>
        Are you sure you want to delete this note?
      </Text>
      <Buttons id='buttons'>
        <DeleteNote style={() => lightenColor(color, -50)} onClick={() => setShowModal(false)}/>
        <CheckButton style={() => lightenColor(color, -50)} onClick={deleteNote} />
      </Buttons>
    </Delete>
  )
}
const Text = styled.div`
  font-family: Century Gothic;
  font-weight: bold;
  color: ${props => props.style};
  margin-top: 40px;
`
const Buttons = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 45px;
  bottom: 0;
  left: 0;
  margin-bottom: 50px;
`
const DeleteNote = styled(HiOutlineXCircle)`
  color: ${props => props.style};
  height: 45px;
  width: 45px;
  position: absolute;
  cursor: pointer;
  margin-left: 50px;
  top: 0;
`
const CheckButton = styled(HiCheckCircle)`
  color: ${props => props.style};
  position: absolute;
  right: 0;
  height: 45px;
  width: 45px;
  float: right;
  cursor: pointer;
  margin-right: 50px;
`
const Delete = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    background: white;
    transform: translate(-50%, -50%);
    background-color: ${props => props.color};
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    align-items: center;
    top: -54%;
    left: 50%;
`