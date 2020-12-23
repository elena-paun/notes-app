import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { EditButton } from './styled-components/EditButton.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
import { Autosave } from './Autosave';
import { useEditTodo } from './useFetchTodos'

export const Note = ({ 
  color, 
  id, 
  notes, 
  sendNote, 
  handleValue,
  setAllNotes,
  initialState,
  allNotes,
  noteID,
  response,
  newContent
}) => {
  const [todoID, setID] = useState()
  const [showModal, setShowModal] = useState(false)
  const [content, setContent] = useState('')
  const { editTodo } = useEditTodo(todoID)
 
  // useEffect(() => {
  //   if (allNotes) {
  //     allNotes.map(note => note.content = content)
  //   }
  // }, [allNotes, content])
  // const [note, setNote] = useState(noteSaved)
   const onDelete = () => {
    setShowModal(true)
  }

  const saveNote = async (e) => {
    setContent(e.target.value)
    // if (response) {
      //const editedNoteID = response.data.map(todo => todo.id)
      console.log(e)
      // console.log(id)
      // response.data.map(async(todo) => {
        // if (id) {
          //console.log(editedNoteID)
        
          setID(e.target.id)
          console.log(todoID)
          const what = allNotes.find(({id}) => id === Number(todoID))
          console.log(what)
          // const note={"content": content}
          console.log(content)
          console.log(allNotes)
         try {
          // if(content)
          await editTodo({ "content": content })
         } catch(error) {
           console.log(error)
         }
        // }
      // })
    // }
  }
  return (
    <NoteContainer color={color}>
            <Formik
             initialValues={{ newContent }}
             onSubmit={(e) => saveNote(e)}
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
                    {dirty && <Autosave debounceMs={1000} dirty={dirty} />}
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
        />}
      </NoteContainer>
  )
}

