import React, { useState, useCallback } from 'react'

import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background'
import { AddNote } from './styled-components/AddNoteButton'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors'

import { Note } from './Note'
export const Background = () => {
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  const [multiplyNote, setMultiplyNote] = useState(0)
  const [noteColor, setNoteColor] = useState([])
  const [notesArray, setNotesArray] = useState([])

  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])
  const createNote = useCallback((color) => {
    setNoteColor(oldColor => [...oldColor, color])
    setMultiplyNote(multiplyNote => multiplyNote + 1)
  }, [])
  const notes = []
 console.log(noteColor)
  
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
        {
          [...Array(multiplyNote)].map((_, id) => {
            notes.push(id)
            console.log({notes})
            return (
              <Note
              key={id}
              color={noteColor[id]}
              id={id}
              notes={notes}
            />)
          }
        )}
        </StyledBackground>
    </Container>
    )
}
