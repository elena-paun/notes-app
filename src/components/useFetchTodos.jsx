import React from 'react'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

export const useToDos = () => {
  const { isLoading, error, data } = useQuery('todos', async () => {
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    const { data } = await axios.get('https://localhost:5001/api/getAll', options)
    console.log(data)
    return data
  })

//   axios.get('https://localhost:5001/api/getAll', options)
//   .then((response) => {
//     console.log(response)
//   })
   const [mutatePostTodo] = useMutation(
    text => axios.post('https://localhost:5001/api/getAll', { text }),
    {
      onSuccess: () => {
        // Query Invalidations
        // queryCache.invalidateQueries('todos')
      //  setText('')
      },
    }
  )
  return ({
    data,
    mutatePostTodo
  })
} 