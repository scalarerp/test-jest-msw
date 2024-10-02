import axios from 'axios'
import { User } from './types'
import { endpoints } from './endpoints'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(endpoints.users)
  return response.data
}
