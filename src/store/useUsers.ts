import { fetchUsers } from 'api/user'
import { useQuery } from '@tanstack/react-query'
import { User } from 'api/types'

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
