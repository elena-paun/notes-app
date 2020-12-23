import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles.'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { Note } from './Note'
import { useToDos, useCreateTodo, useEditTodo } from './useFetchTodos'
export const Background = () => {
  
  const { response, isLoading } = useToDos()
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
   const [allNotes, setAllNotes] = useState([])
   const [id, setID] = useState()
  const { createTodo } = useCreateTodo()

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

  const createNote = useCallback(async (color) => {
    if (response) {
      setID(response.lastId + 1)
      const note = {
        "color":color, 
        "id": id, 
        "name": `todo-${id}`, 
        "content": '', 
      }
        setAllNotes(todo => [...todo, note])
  
        try {
          await createTodo(note)
        } catch(error) {
          console.log(error)
        }
    }
    if (isLoading) {
      <div>Loading...</div>
    }
  }, [createTodo, id, isLoading, response])
  

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
                setAllNotes={setAllNotes}
                allNotes={allNotes}
                note={note}
                newContent={note.content}
                response={response}
              />        
          ) 
        ): null}
        </StyledBackground>
    </Container>
    )
}
