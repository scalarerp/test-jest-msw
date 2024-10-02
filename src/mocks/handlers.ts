import { User } from 'api/types'
import { http, HttpResponse } from 'msw'

export const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export const handlers = [
  // http.delete("/api/accounts/manage-links/", () => {
  //   return HttpResponse.json(linkDeleteSuccess);
  // }),
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(users)
  }),
]
