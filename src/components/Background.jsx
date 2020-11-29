import React, { useState, useRef, forwardRef, createRef, useEffect } from 'react'

import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background'
import { AddNote } from './styled-components/AddNoteButton'
import { StyledThemeColor } from './ThemeColors'
export const Background = () => {
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [translateY, setTranslateY] = useState([])
  // const [elRefs, setElRefs] = useState([])
  const elRefs = useRef([])
  const onClick = () => {
    setWobble(1)
    setShowColors(!showColors)
  }
  const colors = ['#ffc973', '#ff9b71', '#b692fe', '#01d4ff', '#e4ee90']
  
  // console.log(colors)
    const createColorDelay = (elem, i) => {
    console.log(elem)
      setTimeout(function () {
          //.classList.add('load'))
        },150 * i);
  }
  useEffect(() => {
    for (let i = 0; i < colors.length; i++) {
       setTimeout(() => {
         elRefs.current.map((el) => el.current && el.current.classList.add('load'));
         setTranslateY(Array(colors.length).fill().map((_, i) => 50*i))
    }, 150 * i)
    }
   
  }, [colors.length, elRefs])
  // useEffect(() => {
  //   Object.keys(elRefs).map((current) => console.log(elRefs[current]))
  // }, [])
  // for (let i = 0; i < colors.length; i++) {
  //  Object.keys(elRefs).map((current) => console.log(elRefs[current]))

  //   createColorDelay(colors[i], i)
  // }
  // useEffect(() => {
  //   setElRefs(elRefs => 
  //     Array(colors.length).fill().map((_, i) => elRefs[i] || createRef()))
  // }, [colors.length])
    if (elRefs.current.length !== colors.length) {
    // add or remove refs
    elRefs.current = Array(colors.length).fill().map((_, i) => elRefs.current[i] || createRef());
  }
  console.log(elRefs.current)
console.log(translateY)
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
            colors.map((color, idx) => {
              return (
                <StyledThemeColor
                  color={color}
                  colors={colors}
                  key={idx}
                  index={idx}
                  ref={elRefs.current[idx]}
                  translateY={translateY[idx]}
                />
              )
        })}
      </AppBar>
        <StyledBackground>
        </StyledBackground>
      </Container>
    )
}
