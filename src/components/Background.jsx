import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { Formik } from 'formik';

import { useQuery } from 'react-query'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles.'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { useToDos } from './useFetchTodos'
import { Note } from './Note'

export const Background = () => {
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  const [list, setList] = useState([])

  const { data, mutatePostTodo } = useToDos()
  console.log(data)
 // console.log(mutatePostTodo)
  const onClick = useCallback(() => {
    setWobble(1)
    setShowColors(!showColors)
    setStartColors(true)
  }, [showColors])

  const createNote = useCallback((color) => {
    setList(notes => [...notes, {color, id:  Math.floor(Math.random() * 100) }])
  }, [])



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
        {list.map((element, id) => (
          data.map((note) => (
            <Formik
              initialValues={{note: note.content}}
              onSubmit={(values, { setSubmitting }) => {
                if (values !== note.content) {
                  setSubmitting(false)
                }
              }}>
             <Note
                key={note.id}
                color={element.color}
                id={note.id}
                list={list}
                setList={setList}
                noteSaved={note.content}
              />
            </Formik>
          ))
             
          )
        )}
        </StyledBackground>
    </Container>
    )
}
