export const onResize = async ({commit}) => {

  const width = document.documentElement.clientWidth
  const height = document.documentElement.clientHeight

  commit('setWidthScreen', width)

  // is_table_xl
  if (width <= 1050) {
    commit('setIsTableXl', true)
  } else {
    commit('setIsTableXl', false)
  }
  // is_table_only
  if (width >= 600 && width <= 960) {
    commit('setIsTableOnly', true)
  } else {
    commit('setIsTableOnly', false)
  }
  // is_table
  if (width <= 960) {
    commit('setIsTable', true)
  } else {
    if (typeof window.orientation !== 'undefined') {
      commit('setIsTable', true)
    } else {
      commit('setIsTable', false)
    }
  }
  // is_mobile
  if (width <= 600) {
    commit('setIsMobile', true)
  } else {
    commit('setIsMobile', false)
  }
}