import React, { useState, useCallback } from 'react'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { Note } from './Note'
import { useToDos, useCreateTodo } from './useFetchTodos'
export const Background = () => {
  
  const { response, isLoading } = useToDos()
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  const { createTodo } = useCreateTodo()
 
 
  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])

  const createNote = useCallback(async (color) => {
      const note = {
        "color": color, 
        "content": '', 
      }
        try {
          await createTodo(note)
        } catch(error) {
          console.log(error)
        }
    if (isLoading) {
      <div>Loading...</div>
    }
  }, [createTodo, isLoading])
  

  if (isLoading || !response) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <Container>
      <AppBar>
        <Todo>
          Todo
        </Todo>
        <AddNote
          className='image'
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
        {response?.data.map((note, id) => (
             <Note
                key={id}
                color={note.color}
                id={note.id}
                note={note}
                content={note.content}
                response={response}
              />        
          ) 
        )}
        </StyledBackground>
    </Container>
    )
}
