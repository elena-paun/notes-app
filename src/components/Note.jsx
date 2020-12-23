import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { EditButton } from './styled-components/EditButton.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
import { Autosave } from './Autosave';
import { useEditTodo, useDeleteTodo } from './useFetchTodos'

export const Note = ({ 
  color, 
  id, 
  notes, 
  setAllNotes,
  newContent,
  allNotes,
}) => {
  const [showModal, setShowModal] = useState(false)
  const { editTodo } = useEditTodo(id)

   const onDelete = () => {
    setShowModal(true)
  }
  const { deleteTodo } = useDeleteTodo(id)
  const deleteNote = async () => {
    await deleteTodo(id)
    setAllNotes(allNotes => allNotes.filter((note) => note.id !== id)) 
    setShowModal(false)
  }
  const saveNote = async (values) => {
    console.log({id})
    try {
      await editTodo({ "content": values.newContent })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <NoteContainer color={color}>
            <Formik
             initialValues={{ newContent }}
             onSubmit={(e, id) => saveNote(e, id)}
             > 
              {({handleChange, values, onBlur, dirty}) => {
                return (
                  <Form >
                    <>
                      <TextArea 
                        id={id}
                        value={values.newContent}
                        color={color} 
                        placeholder='Write something here...' 
                        name='newContent'
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                    <Autosave debounceMs={1000} dirty={dirty} />
                    </>
                  </Form>
                )
              }} 
            </Formik>
        {/* <EditButton style={() => darkenColor(color, -50)}/> */}
        <DeleteButton onClick={onDelete} style={() => darkenColor(color, -50)}/>
      {showModal &&
        <DeleteModal
          color={color}
          setShowModal={setShowModal}
          id={id}
          notes={notes}
          setAllNotes={setAllNotes}
          allNotes={allNotes}
          deleteNote={deleteNote}
        />}
      </NoteContainer>
  )
}

