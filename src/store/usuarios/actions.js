import Vue from 'vue'

const actions = {
  setUsuarios ({ commit, store }, obj) {
    Vue.prototype.$axios.get('https://reqres.in/api/users')
      .then((res) => {
        console.log(res.data.data)
        commit('SET_USUARIOS', res.data.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  setUsuario ({ commit, store }, id) {
    Vue.prototype.$axios.get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res.data.data)
        commit('SET_USUARIO', res.data.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export default actions
