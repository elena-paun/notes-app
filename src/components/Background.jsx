import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { Formik } from 'formik';

import { useQuery } from 'react-query'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles.'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { Note } from './Note'
import { useToDos, useCreateTodo, useEditTodo } from './useFetchTodos'
export const Background = () => {
  const { data } = useToDos()


  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  // const [getNote, setGetNote] = useState([])
   const [sendNote, setSendNote] = useState([])
  // const [ dataToBeSent, setDataToBeSent] = useState([])
   const [allNotes, setAllNotes] = useState([])
 // const id = Math.floor(Math.random() * 100)
  const [noteID, setNoteID] = useState(0)
  const [todo, setTodo] = useState(null)
  const [content, setContent] = useState('')
  //const [newNote, setNewNote] = useState([{}])
  const { editTodo } = useEditTodo(noteID)
  const { createTodo } = useCreateTodo(noteID)

   

  useEffect(() => {
 
    setAllNotes(data)
  }, [data])
  console.log(data)
  //const {id} = data
 // const timestamp = new Date().toString();
 // console.log(dataToBeSent)
  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])

  const saveNote = async (e) => {
  console.log(e)
  setContent(e.target.value)
  const note={"content":content}
  //editTodo(sendNote)
 try {
  await editTodo(note)
 } catch(error) {
   console.log(error)
 }
}
  const createNote = useCallback(async (color) => {
     const myDate = new Date('0001-01-01T00:00:00Z');
    setNoteID(id => id + 1)
    // setToDoID(id => id + 1)
     const note = {
      "color":color, 
      "id": noteID, 
      "name": '', 
      "content": '', 
      "creationDate": myDate, 
    //  lastEditDate: ''
    }
     setAllNotes(todo => [...todo, note])

    try {
      await createTodo(note)
    } catch(error) {
      console.log(error)
    }
  }, [createTodo, noteID])
  

  if (data) {
      const lastObj = data.pop()
      setNoteID(lastObj.id)
  }
//   axios.get('https://localhost:5001/api/getAll', options)
//   .then((response) => {
//     console.log(response)
//   })

  // const instance = axios.create({
  //   baseURL: 'https://localhost:5001',
  //   timeout: 1000,
  // })
  //   instance.get('/api/getAll').then(res => console.log(res))
 // const initialValues = { note: noteSaved }

  return (
    <Container id='container'>
      <AppBar id='appbar'>
        <Todo id='todo'>
          Todo
        </Todo>
        <AddNote
          className='image rotate'
          rotate='rotate'
          onClick={onClick}
          wobble={wobble}
          onAnimationEnd={() => {
            setWobble(0)
          }}
          size='3em'
        />
            <ColorContainer>
              {startColors &&
                colors.map((color, idx) =>
                  <StyledThemeColor
                    color={color}
                    colors={colors}
                    key={idx}
                    index={idx}
                    showColors={showColors}
                    onClick={() => createNote(color)}
                  />
              )}
            </ColorContainer>
      </AppBar>
      <StyledBackground>
        {allNotes?.map((note, id) => (
             <Note
                key={id}
                color={note.color || '#ffc973'}
                id={note.id}
                content={content}
                setContent={setContent}
                saveNote={saveNote}
                //notes={getNote}
                //sendNote={sendNote}
                // oldContent={note.content || 'aaa'}
                setAllNotes={setAllNotes}
                allNotes={allNotes}
                //newContent={content}
                //creationDate={note.creationDate}
                note={note}
               // handleValue={handleValue}
                 //editTodo={editTodo}
              />        
          )
        )}
        </StyledBackground>
    </Container>
    )
}
