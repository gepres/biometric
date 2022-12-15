import store from '@/store'

const isNotAuthenticatedGuard = async(to, from, next) => {
  const {ok} = await store.dispatch('auth/checkNotAuthentication')
  if (ok) next({name: 'cliente-ventas'})
 next()
}

export default isNotAuthenticatedGuard