import React, { useState, useCallback } from 'react'

import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles.'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'

import { Note } from './Note'
export const Background = () => {
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  const [list, setList] = useState([])

  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])

  const createNote = useCallback((color) => {
    setList(notes => [...notes, {color, id:  Math.floor(Math.random() * 100) }])
  }, [])
  
  
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
        { list.map((element, id) => (
              <Note
                key={element.id}
                color={element.color}
                id={element.id}
                list={list}
                setList={setList}
            />
          )
        )}
        </StyledBackground>
    </Container>
    )
}
