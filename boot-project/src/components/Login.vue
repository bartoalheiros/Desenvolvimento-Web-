<template>
  <b-container><br>
    
    
    <b-form id="user">
      <img id="imgLogin" src="../assets/logo.png"><br>
      <b-form-group>
        <b-form-input :id="txtLogin" :type="text" placeholder="Usuário" v-model="user.login" style="margin-bottom: 5px"></b-form-input>
        <b-form-input :id="passwordField" :type="password" placeholder="Senha" v-model="user.password"></b-form-input>
        <label id="legenda" for="comboConta">*Selecione um tipo de conta</label>
        <b-form-select id="comboConta" name="comboConta" v-model="selected" :options="options" size="sm"/><br>
        <b-button id="loginBttn" @click="validarLogin">Entrar</b-button>
      </b-form-group><br><br>
    </b-form>
 
    
    <div id="loginBttn">
     
     <!--<b-button :pressed="false" style="background-color: #127a38;" @click="testeMetodo">Entrar</b-button>-->
     <p id="demo"></p>
   </div>
 

</b-container>
</template>


<script>
import router from '../router/index.js'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Cadastro.',
      user: {},
      showDismissibleAlert: false,
      selected: 'a',
      options: [
        { value: 'a', text: 'Cliente' },
        { value: 'b', text: 'Técnico' },
        { value: 'c', text: 'Recepção'}
      ],
      html: '<a href="#">Link</a>',
      registros: [{
        usuario: 'usuario1',
        senha: 'senha123'
      },
      {
        usuario: 'usuario2',
        senha: 'senha456'
      },
      {
        usuario: 'usuario3',
        senha: 'senha789'
      }
      ]
    }
  },
  methods: {
    validarLogin () {
      for (var i = 0; i < this.registros.length; i++) {
        console.log('rodei o for')
        if (this.user.login === this.registros[i].usuario && this.user.password === this.registros[i].senha) {
          alert('Voce conseguiu logar.')
          router.push('/painelAdmin')
          break
        } else {
          alert('Login ou senha incorretos')
          break
        }
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./css/login.css">
</style>
