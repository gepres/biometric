export const loginUser = (state, {user, access, refresh}) => {
  if(access) {
    localStorage.setItem('accessToken', access)
    state.accessToken = access
  }
  if(refresh) {
    localStorage.setItem('refreshToken', refresh)
    state.refreshToken = refresh
  }
  state.user = user
  state.status = 'authenticated'
}

export const logout = (state) => {
  state.user = null
  state.access = null
  state.refresh = null
  state.status = 'no-authenticated'
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}