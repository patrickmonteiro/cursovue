<template>
  <b-container fluid>
    <b-row>
      <b-col col lg="6" md="10">
        <b-table striped hover :items="usuarios" :fields="fields">
          <template slot="first_name" slot-scope="data">
            {{data.item.first_name}}
          </template>
          <template slot="last_name" slot-scope="data">
            {{data.item.last_name}}
          </template>
          <template slot="avatar" slot-scope="data">
            <b-img :src="data.item.avatar" alt="Responsive image" class="rounded-circle" height="50"></b-img>
          </template>
          <template slot="acoes" slot-scope="data">
             <b-button variant="primary" @click="editar(data.item.id)" data-cy="editar">Editar</b-button>
             <b-button variant="danger">Excluir</b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <!-- MODAL DE DETALHES -->
    <b-modal ref="myModalRef" hide-footer hide-header-close title="Detalhes do Usuário" @hidden="CLEAR_USUARIO">
      <div class="d-block">
        <p>
          <b-img :src="usuario.avatar" alt="Responsive image" class="rounded-circle" height="50"></b-img>
        </p>
        <p><span class="font-weight-bold">Id: </span> {{ usuario.id }}</p>
        <p><span class="font-weight-bold">Nome: </span>{{ usuario.first_name + ' ' + usuario.last_name}}</p>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal()" data-cy="fechaModal">Fechar</b-btn>
    </b-modal>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      fields: [
        { key: 'first_name' },
        { key: 'last_name' },
        { key: 'avatar' },
        { key: 'acoes', label: 'Ações' }
      ],
      items: []
    }
  },
  computed: {
    ...mapState('usuarios', ['usuarios', 'usuario'])
  },
  created () {
    this.setUsuarios()
  },
  methods: {
    ...mapActions('usuarios', ['setUsuarios', 'setUsuario']),
    ...mapMutations('usuarios', ['CLEAR_USUARIO']),
    editar (id) {
      this.$refs.myModalRef.show()
      this.setUsuario(id)
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
