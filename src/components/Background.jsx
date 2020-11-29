import React, { useState, useRef } from 'react'

import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background'
import { AddNote } from './styled-components/AddNoteButton'
import { StyledThemeColor } from './ThemeColors'
export const Background = () => {
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const onClick = () => {
    setWobble(1)
    setShowColors(!showColors)
  }
  const colors = ['#ffc973', '#ff9b71', '#b692fe', '#01d4ff', '#e4ee90']
  
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
          onAnimationEnd={() => setWobble(0)}
          size='3em' />
        {showColors &&
            colors.map((color, idx) => 
                <StyledThemeColor
                  color={color}
                  colors={colors}
                  key={idx}
                  index={idx}
                />
        )}
      </AppBar>
        <StyledBackground>
        </StyledBackground>
      </Container>
    )
}
