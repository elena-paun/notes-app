import { create } from 'apisauce'

const api = create({
    baseURL: 'https://localhost:5001',
    headers: {
        Accept: '*/*'
    }
})

export default api