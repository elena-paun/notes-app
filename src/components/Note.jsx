import React, { useState } from 'react'
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { EditButton } from './styled-components/EditButton.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
export const Note = ({ color, id, notes, setList, list }) => {
  const [showModal, setShowModal] = useState(false)
  
   const onDelete = () => {
    setShowModal(true)
  }

  return (
     <NoteContainer color={color}>
        <TextArea color={color}  placeholder='Write something here...'/>
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