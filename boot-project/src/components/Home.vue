<template>
  <b-container><br>
    <img src="../assets/logo.png"><br>
    
    <b-form>
      <label for="login"></label>
      <b-row id="user" :key="type1">
        <b-col sm="3">
          <label :for="`type-${type1}`"></label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${type1}`" :type="type1" placeholder="Usuário"></b-form-input>
        </b-col>
      </b-row><br><br>
      
      <b-row id="password" :key="type2">
        <b-col sm="3">
          <label :for="`type-${type2}`"></label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-${type2}`" :type="type2" placeholder="Senha"></b-form-input>
        </b-col>
      </b-row>

      <div id="combo">
        <b-form-select v-model="selected" :options="options" class="mb-3" size="sm">
        </b-form-select>
      </div>
      <label id="legenda" for="comboPrivilegio">*Selecione um tipo de conta</label><br><br>
    </div>
    <div id="loginBttn">
     <b-button :pressed="false" style="background-color: #127a38;">Entrar</b-button>
    </div>
  </b-form>
  <br><br><br><br>
  <div id="quemSomos" ref="quemSomos">
    <p>Teste</p>
  </div>
</b-container>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        msg: 'Cadastro.',
        showDismissibleAlert: false,
        type1: 'text',
        type2: 'password',
        selected: 'a',
        options: [
        { value: 'a', text: 'Cliente' },
        { value: 'b', text: 'Técnico' },
        { value: 'c', text: 'Recepção' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./css/home.css">
</style>