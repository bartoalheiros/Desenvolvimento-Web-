<template>
  <div class="table">
    <h1>{{ msg }}</h1>
    <table></table>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
      template: '<form name="funcForm">' +
        '<fieldset>' +
            '<legend>' + 'Manutenção de Funcionários' + '</legend>' + '<p>' + 'Por favor, preencha os dados abaixo:' + '</p>' +

            '<label for="firstname">' + 'CPF:' + '</label>' + '<input type="text" name="cpf"  placeholder="Informe o cpf" autofocus>' + "<label for='firstname'>Nome:</label>" +
            "<input type='text' name='nome'  placeholder='Informe o nome' autofocus>" + "<label for='lastname'>Cargo:</label>" +
            "<input type='text' name='cargo' placeholder='Informe o cargo'>" + "<label for='age'>Salário:</label>" +
            "<input type='number' name='salario' required>" +

            "<input type='button' value='Adicionar' onclick='adicionar()'/>" +
        '</fieldset>' +
    '</form>'

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
</style>
