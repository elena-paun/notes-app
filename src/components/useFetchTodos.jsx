import axios from 'axios'
import { useQuery, useMutation, queryCache } from 'react-query'

export const useToDos = () => {
  const { isLoading, error, data: response } = useQuery('todos', async () => {
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    const { data } = await axios.get(`https://localhost:5001/api/getAll`, options)
    return { data }
  })
  return ({
    response,
    isLoading
  })
} 

export const useEditTodo = (id) => {
  const [mutate, {isLoading: isEditing}] = useMutation(
    async (data) => axios.patch(`https://localhost:5001/api/edit/${id}`, data),
    {
      onSuccess: (response) => {
        console.log(response)
      },
    }
  )
  return {
    editTodo: mutate, 
    isEditing
  }
}  
export const useCreateTodo = () => {
  const [mutate, {isLoading: isCreating}] = useMutation(
    async (todo) => await axios.post('https://localhost:5001/api/add', todo),
    {
      onSuccess: (response) => {
        queryCache.refetchQueries('todos')
      },
    }
  )
  return {
    createTodo: mutate,
    isCreating
  }
}

export const useDeleteTodo = (id) => {
  const [mutate, { error, isLoading: isDeleting }] = useMutation(
    async () => await axios.delete(`https://localhost:5001/api/delete/${id}`),
     {
       onSuccess: response => {
         queryCache.refetchQueries('todos')
       }
     }
  )
  return {
    deleteTodo: mutate,
    isDeleting
  }
}