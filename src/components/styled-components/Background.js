import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
`
export const AppBar = styled.div`
  margin: 0 auto;
  width: 15%;
  position: relative;
  background-color: white;
  background-size: cover;
  height: 700px;
  border-radius: 30px 0 0 30px;
  border-right: 0.5px solid #e6eaf6;
`
export const StyledBackground = styled.div`
  position: relative;
  background-color: white;
  background-size: cover;
  height: 700px;
  width: 85%;
  border-radius: 0 30px 30px 0;
`
export const Todo = styled.div`
  font-family: 'Century Gothic';
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
`