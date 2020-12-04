import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import { TextArea, NoteContainer } from './styled-components/Note.styles'
import { EditButton } from './styled-components/EditButton.styles'
import { DeleteButton } from './styled-components/DeleteButton.styles'
import { DeleteModal } from './DeleteModal'
import { darkenColor } from './utils/darkenColor'
import { Autosave } from './Autosave';
//import { useEditTodo } from './useFetchTodos'

export const Note = ({ 
  color, 
  id, 
  notes, 
  sendNote, 
  content,
  newContent,
 // note,
  setContent,
  handleValue,
  editTodo, 
  setAllNotes,
  allNotes,
  saveNote
}) => {
  const [showModal, setShowModal] = useState(false)
  //const [content, setContent] = useState('')
  //const { editTodo } = useEditTodo(id)
  useEffect(() => {
    if (allNotes) {
      allNotes.map(note => note.content = content)
    }
  }, [allNotes, content])
  // const [note, setNote] = useState(noteSaved)
   const onDelete = () => {
    setShowModal(true)
  }
   console.log(id)
  // const saveNote = async (e) => {
  //      setContent(e.target.value)
  //      const note={"content":content}
  //      //editTodo(sendNote)
  //     try {
  //      await editTodo(note)
  //     } catch(error) {
  //       console.log(error)
  //     }
  // }
  return (
    <NoteContainer color={color}>
      {/* {({ dirty }) => ( */}
        {/* {data.map((note) => ( */}
            <Formik
             initialValues={{ content }}
             onSubmit={saveNote}
             >
           {({handleChange, values, onBlur}) => {
         return (
            <Form >
             <>
              <TextArea 
                //onChange={(e) => {handleChange(e)}} 
                color={color} 
                placeholder='Write something here...' 
                name='content'
               // value={values.content}
                onBlur={saveNote}
              />
              {/* {dirty && <Autosave debounceMs={1000} editTodo={editTodo} />} */}
            </>
          </Form>
  )}}

          </Formik>
        {/* ))} */}
      {/* )}  */}
        
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

