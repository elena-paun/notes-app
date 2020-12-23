import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles.'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { Note } from './Note'
import { useToDos, useCreateTodo, useEditTodo } from './useFetchTodos'
export const Background = () => {
  
  const { response, isLoading } = useToDos()

  const [initialState, setInitialState] = useState()

  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
   const [allNotes, setAllNotes] = useState([])
  const [noteID, setNoteID] = useState(initialState)
  // const [content, setContent] = useState('')
  const { createTodo } = useCreateTodo(noteID)
  const { editTodo } = useEditTodo(noteID)

  // useEffect(() => {
  //   crea
  // }, [])

  useEffect(() => {
    if (response) {
      setInitialState(response.lastId)
    }
  }, [response])
  useEffect(() => {
 
    if (response) {
console.log(response.data)

      setAllNotes(response.data)
    }
  }, [response])
 
  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])
console.log(noteID)
 
// const saveNote = async (e) => {
//   setContent(e.target.value)
//   console.log(content)
//   const note = { "content": content }
//   try {
//     await editTodo(note)
//   } catch(error) {
//     console.log(error)
//   }
// }
// console.log(content)

  const createNote = useCallback(async (color) => {
    console.log(initialState)
    setNoteID(initialState + 1)

    const note = {
      "color":color, 
      "id": noteID, 
      "name": `todo-${noteID}`, 
      "content": '', 
    }
      setAllNotes(todo => [...todo, note])

    try {
      await createTodo(note)
    } catch(error) {
      console.log(error)
    }
    return { note }
  }, [createTodo, initialState, noteID])
  

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  if(!response) {
    return null;
  }
  

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
        {allNotes.length ? allNotes?.map((note, id) => (
             <Note
                key={id}
                color={note.color || '#ffc973'}
                id={note.id}
                // content={content}
                // setContent={setContent}
                noteID={noteID}
                setAllNotes={setAllNotes}
                allNotes={allNotes}
                note={note}
                editTodo={editTodo}
                newContent={note.content}
                // saveNote={saveNote}
                initialState={initialState}
                response={response}
              />        
          ) 
        ): null}
        </StyledBackground>
    </Container>
    )
}
