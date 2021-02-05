import React from 'react'
import {Delete, Text, Buttons, DeleteNote, CheckButton} from './styled-components/DeleteModal.styles'
import { darkenColor } from './utils/darkenColor'
export const DeleteModal = ({ deleteNote, allNotes, setAllNotes, color, setShowModal, id, notes, setList, list }) => (
    <Delete color={color} id='modalContainer'>
      <Text style={() => darkenColor(color, -50)}>
        Are you sure you want to delete this note?
      </Text>
      <Buttons id='buttons'>
        <DeleteNote style={() => darkenColor(color, -50)} onClick={() => setShowModal(false)}/>
        <CheckButton style={() => darkenColor(color, -50)} onClick={deleteNote} />
      </Buttons>
    </Delete>
  )
