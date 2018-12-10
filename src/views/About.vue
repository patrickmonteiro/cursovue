<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button data-cy="botao-cadastro" @click="teste()">Botão</button>
    <p v-if="msg" style="color:red">
      <input type="text" data-cy="nome" v-model="nome">
      <button data-cy="botao-finaliza" @click="finalizarCadastro()"></button>
    </p>
    <h2 style="color:red" v-if="msgFinalizar">Cadastro concluido com sucesso!</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: false,
      nome: '',
      msgFinalizar: false
    }
  },
  methods: {
    teste () {
      this.msg = true
    },
    finalizarCadastro () {
      this.msgFinalizar = true
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    }
  }
}
</script>
