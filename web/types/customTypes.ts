export interface UseAuthObject {
  logIn: Record<string, unknown>
  logOut: Record<string, unknown>
  signUp: Record<string, unknown>
  currentUser: CkCurrentUser
  userMetadata: Record<string, unknown>
  reauthenticate: Record<string, unknown>
  getToken: Record<string, unknown>
  client: string
  isAuthenticated: boolean
  hasRole: Array<string>
  loading: boolean
}

export interface CkCurrentUser {
  firstName: string
  id: string
  lastName: string
  points: number
  roles: Array<string>
}
