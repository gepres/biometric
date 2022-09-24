import store from '@/store'

const isNotAuthenticatedGuard = async(to, from, next) => {
  const {ok} = await store.dispatch('auth/checkNotAuthentication')
  console.log('ok',ok);
  if (ok) next({name: 'cliente-ventas'})
  else next()
}

export default isNotAuthenticatedGuard