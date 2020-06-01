<template>
  <div class="hello">
    <img alt="logo" src="../assets/Logo.png">
    <h1>{{ msg }}</h1>
    <p>
      Utilize esta plataforma para descobrir a situação acadêmica de seus alunos.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6%;
  display: flex;
  flex-direction: column;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 2em;
  margin: 5%;
  color: #4C3585;
}
p {
  width: 80%;
  text-align: justify;
  color: #E7325D;
  font-size: 1.2em;
}
img {
  width: 100%;
}

@media (min-width: 770px) {

  .hello {
    width: 49%;
    max-height: 100vh;
  }

  .hello h1 {
    width: auto;
    text-align: center;
  }

  .hello p {
    width: 76%;
  }

  img {
    width: 70%;
  }
}
</style>
