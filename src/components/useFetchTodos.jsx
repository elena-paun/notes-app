import React from 'react'
import axios from 'axios'
import { useQuery, useMutation, queryCache } from 'react-query'
import api from './skeleton'

export const useToDos = (id) => {
 // const { id } = payload
  const { isLoading, error, data } = useQuery('todos', async () => {
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    const { data } = await axios.get(`https://localhost:5001/api/getAll`, options)
    //const json = await data.json()
    //console.log(json)
    console.log(data)
    
    return data
  })
  return ({
    data,
  })
} 
//   axios.get('https://localhost:5001/api/getAll', options)
//   .then((response) => {
//     console.log(response)
//   })
export const useEditTodo = (todoId) => {
  const [mutate, {isLoading: isEditing}] = useMutation(
    async (data) => axios.put('https://localhost:5001/api/edit', data),
    {
      onSuccess: (response) => {
        console.log(response.data)
        // console.log(response)
        // const { id, content } = response.data
        // console.log(id)
        // const queryKey = `todo-${todoId}`
        // const cache = queryCache.getQueryData(queryKey)
        // console.log(cache)
        // const newTodo = { id, content }
        // const newData = cache.data ? [newTodo, ...cache.data] : [newTodo]
        // queryCache.setQueryData(queryKey, {
        //   ...cache,
        //   data: newData
        // })
        // Query Invalidations
        // queryCache.invalidateQueries('todos')
      //  setText('')
      },
    }
  )
  return {
    editTodo: mutate, 
    isEditing
  }
}  
export const useCreateTodo = (todoId) => {
  const [mutate, {isLoading: isCreating}] = useMutation(
    async (todo) => await axios.post('https://localhost:5001/api/add', todo),
    {
      onSuccess: (response) => {
        console.log(response)
        const { id, color } = response.data
        const queryKey = `todo-${todoId}`
        const cache = queryCache.getQueryData(queryKey)
        const newTodo = { id, color }
        console.log(newTodo)
        const newData = cache.data ? [newTodo, ...cache.data] : [newTodo]
        queryCache.setQueryData(queryKey, {
          ...cache,
          data: newData
        })
        return queryCache.setQueryData(queryKey, cache)
        // Query Invalidations
        // queryCache.invalidateQueries('todos')
      //  setText('')
      },
    }
  )
  return {
    createTodo: mutate,
    isCreating
  }
}
// const getIds = (data) => {
//   const mapIds = data.map((todo) => {
//     const { editTodo } = useEditTodo(todo.id)
//     return editTodo
//   })
//   console.log(mapIds)
// }
export const useDeleteTodo = (id) => {
  const [mutate, { error, isLoading: isDeleting }] = useMutation(
    async () => await axios.delete(`https://localhost:5001/api/delete/${id}`),
     {
       onSuccess: response => {
         console.log(response)
       }
     }
  )
  return {
    deleteTodo: mutate,
    isDeleting
  }
}