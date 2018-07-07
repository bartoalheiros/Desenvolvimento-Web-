<template>
  <div class="container"> <br><br>
    <img src="../assets/logo.png"><br><br>
    <div class="well col-md-3">
      <form>
        <div class="form-row">
          <div class="form-group">
           <label for="login"></label>
           <input type="text" class="form-control form-control-sm" id="login" aria-describedby="login" placeholder="Login">
         </div>
       </div>
       <div class="form-row">
         <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password">
        </div>
      </div>
    </form>
    <div class="well2">
      <select>
        <option value="tecnico">Técnico</option>
        <option value="gerente">Gerente</option>
        <option value="recep">Recepção</option>
      </select><br><br>
      <input type="submit" name="entrar" data-toggle="button" class="btn btn-dark btn-warning" value="Entrar" style="background-color: #127a38;">
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        msg: 'Cadastro.',
        showDismissibleAlert: false,
        type_text: 'text'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn-primary {
  background-color: #127a38;
  border-color: #127a38;
}

.btn-primary:active {
  background: #0A4520;
}

.container {
 position: relative;
}

.well {
 position: absolute;
 top: 60%;
 right: 50%;
 transform: translate(64%, 52%);
}

.well2 {
 position: absolute;
 top: 70%;
 right: 50%;
 transform: translate(10%, 52%);
}

.well3 {
 position: absolute;
 top: 70%;
 right: 50%;
 transform: translate(10%, 52%);
}
</style>
