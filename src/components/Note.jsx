import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { EditButton } from './styled-components/EditButton.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
import { Autosave } from './Autosave';
export const Note = ({ color, id, notes, setList, list, noteSaved }) => {
  const [showModal, setShowModal] = useState(false)
  // const [note, setNote] = useState(noteSaved)
   const onDelete = () => {
    setShowModal(true)
  }
  console.log(noteSaved)
  return (
    <NoteContainer color={color}>
     
          <Form>
            <TextArea color={color} placeholder='Write something here...' name='note'/>
            <Autosave debounceMs={1000} />
          </Form>
        <EditButton style={() => darkenColor(color, -50)}/>
        <DeleteButton onClick={onDelete} style={() => darkenColor(color, -50)}/>
        {showModal &&
          <DeleteModal
            color={color}
            setShowModal={setShowModal}
            id={id}
            notes={notes}
            setList={setList}
            list={list}
          />}
      </NoteContainer>
  )
}

