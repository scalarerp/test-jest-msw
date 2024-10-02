import { users } from '../mocks/handlers'
import { fetchUsers } from './user'

it('receives a mocked response to a REST API request', async () => {
  const response = await fetchUsers()
  expect(await response).toEqual(users)
})

