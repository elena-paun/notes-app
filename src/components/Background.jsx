import React, { useState, useCallback, useEffect } from 'react'
import colors from './utils/colors'
import { StyledBackground, Todo, Container, AppBar, Notes } from './styled-components/Background.styles'
import { AddNote } from './styled-components/AddNoteButton.styles'
import { StyledThemeColor, ColorContainer } from './styled-components/ThemeColors.styles'
import { Note } from './Note'
import { PaginationContainer } from './styled-components/PageButton.styles';
import { useToDos, useCreateTodo } from './api/useFetchTodos'
import { SkeletonBox, SkeletonNote } from './styled-components/Loading.styles';

export const Background = () => {
  const { response, isLoading } = useToDos()
  const [wobble, setWobble] = useState(0)
  const [showColors, setShowColors] = useState(false)
  const [startColors, setStartColors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(document.body.clientWidth);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  const MIN = 845;
  const MED = 1080;
  const MAX = 1405;
  const [notesPerPage, setNotesPerPage] = useState(6);
  useEffect(() => {
    switch (true) {
      case (width < MIN):
        setNotesPerPage(2)
        break;
      case (width < MED):
        setNotesPerPage(4)
        break;
      case (width < MAX):
        setNotesPerPage(6)
        break;
      case (width > MAX):
        setNotesPerPage(8)
        break;
      default:
        setNotesPerPage(1)
    }
  }, [width])
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
  }, [createTodo])

  const indexOfLastPost = currentPage * notesPerPage;
  const indexOfFirstPost = indexOfLastPost - notesPerPage;
  const currentPosts = response?.rev?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (_, pageNumber) => {
    setIsSelected(!isSelected)
    return setCurrentPage(pageNumber)
  };
  
  return (
    <Container>
      {isLoading ? <SkeletonNote variant="rect" width="15%" height="610px" /> :  
        <AppBar>
          <Todo>
            todo
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
      }
     {isLoading ? 
        <SkeletonBox>
          <SkeletonNote variant="rect" width="180px" height="180px"/>
          <SkeletonNote variant="rect" width="180px" height="180px"/>
          <SkeletonNote variant="rect" width="180px" height="180px"/>
        </SkeletonBox> :
        <Notes>
        <StyledBackground>
            {currentPosts.slice(0).map((note, id) => (
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
            {/* <Pagination isSelected={isSelected} notesPerPage={notesPerPage} totalPosts={response?.data.length} paginate={paginate} /> */}
          </StyledBackground>
          <PaginationContainer onChange={paginate} page={currentPage} count={Math.ceil(response?.rev.length / notesPerPage)}/>
        </Notes>
    }
      
    </Container>
    )
}
