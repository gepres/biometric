import authApi from "@/api/authApi";

export const signInUser = async({commit}, user) => {
  try {
    const {data} = await authApi.post('/token/', user)
    const {access, refresh}  = data
    delete user.password
    commit('loginUser', {user, access, refresh})
    return {ok: true}
  } catch (error) {
    return {ok: false, message: error.response.data.detail}
  }
}


export const checkAuthentication = async({commit}) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  if(!accessToken) {
    commit('logout')
    return {ok: false, message: 'No hay Token'}
  }
  try {
    let user = 'test'
    commit('loginUser', {user, accessToken, refreshToken})
    return {ok:true}
  } catch (error) {
    commit('logout')
    return {ok: false, message: error.response.data.error.message}
  }
}


export const checkNotAuthentication = async() => {
  const accessToken = localStorage.getItem('accessToken')
  if(accessToken) {
    return {ok: true, message: 'hay Token'}
  } else {
    return {ok: false, message: 'no hay Token'}
  }
}