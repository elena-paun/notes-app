import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
import { Autosave } from './Autosave';
import { useEditTodo, useDeleteTodo } from './useFetchTodos'

export const Note = ({ 
  color, 
  id, 
  notes, 
  content,
}) => {
  const { editTodo } = useEditTodo(id)
  const [showModal, setShowModal] = useState(false)

   const onDelete = () => {
    setShowModal(true)
  }
  const { deleteTodo } = useDeleteTodo(id)

  const deleteNote = async () => {
    await deleteTodo(id)
    setShowModal(false)
  }
  const saveNote = async (values) => {
    try {
      await editTodo({ "content": values.content, "id": id })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <NoteContainer color={color}>
            <Formik
             enableReinitialize
             initialValues={{ content }}
             onSubmit={(values) => saveNote(values)}
             > 
              {({ handleChange, values, onBlur, dirty, submitForm, isSubmitting }) => (
                  <Form>
                    <TextArea 
                      id={id}
                      value={values.content}
                      color={color} 
                      placeholder='Write something here...' 
                      name='content'
                      onChange={handleChange}
                      onBlur={onBlur}
                    />
                    <Autosave debounceMs={1000} dirty={dirty} submitForm={submitForm} values={values} isSubmitting={isSubmitting} />
                  </Form>
                )
              } 
            </Formik>
        {/* <EditButton style={() => darkenColor(color, -50)}/> */}
        <DeleteButton onClick={onDelete} style={() => darkenColor(color, -50)}/>
      {showModal &&
        <DeleteModal
          color={color}
          setShowModal={setShowModal}
          id={id}
          notes={notes}
          deleteNote={deleteNote}
        />}
      </NoteContainer>
  )
}

