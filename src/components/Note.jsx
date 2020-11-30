import React, { useEffect, useState } from 'react'
import { TextArea, NoteContainer } from './styled-components/Note'
import { EditButton } from './styled-components/EditButton'
import { DeleteButton } from './styled-components/DeleteButton'
import { DeleteModal } from './styled-components/DeleteModal'
export const Note = ({ color, id, notes }) => {
  const [showModal, setShowModal] = useState(false)
  console.log(notes)
   const onDelete = () => {
    console.log('delete me')
    setShowModal(true)
  }

  return (
    <>
     <NoteContainer color={color}>
        <TextArea color={color}  placeholder='Write something here...'/>
        <EditButton />
        <DeleteButton onClick={onDelete} />
        {showModal &&
          <DeleteModal
            color={color}
            setShowModal={setShowModal}
            id={id}
          />}

      </NoteContainer>

     </>         
  )
}