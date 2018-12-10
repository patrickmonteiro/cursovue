const SET_USUARIOS = (state, obj) => {
  state.usuarios = obj
}

const SET_USUARIO = (state, obj) => {
  state.usuario = obj
}

const CLEAR_USUARIO = (state) => {
  state.usuario = {}
  console.log('MUTATION DISPARADA')
}

export default {
  SET_USUARIOS,
  SET_USUARIO,
  CLEAR_USUARIO
}
