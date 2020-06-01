<template>
  <div class="calculator">
    <p>
      Insira o nome do aluno e suas duas primeiras
      notas para descobrir o mínimo necessário para a aprovação.
    </p>
    <form>
      <input type="text" placeholder="Nome do aluno" v-model="name" />
      <input type="number" step="any" placeholder="Nota 1" v-model="nota1" />
      <input type="number" step="any" placeholder="Nota 2" v-model="nota2" />
      <button type="submit" v-on:click.prevent="calculate">Calcular</button>
    </form>
    <div class="scroll">
      <div class="student-info" v-bind:key="index" v-for="(student, index) in students">
        <p>
          <strong>{{student.name}}</strong> precisa tirar, no mínimo,
          <strong>{{student.nota}}</strong>
        </p>
        <span>
          <a href="#" v-on:click.prevent="removeStudent(index)">OK</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
      name: "",
      nota1: "",
      nota2: ""
    };
  },
  methods: {
    calculate() {
      if (
        this.name.trim() === "" ||
        this.nota1.trim() === "" ||
        this.nota2.trim() === ""
      ) {
        return;
      }
      const nota3 =
        (6.2 -
          (parseFloat(this.nota1 * 0.25) + parseFloat(this.nota2 * 0.25))) /
        0.5;
      let result = `${nota3} pontos.`;
      if (nota3 > 10) {
        result = "mais tempo para estudar ano que vem.";
      }

      this.students.push({
        name: this.name,
        nota: result
      });
      (this.name = ""), (this.nota1 = ""), (this.nota2 = "");
    },
    removeStudent(index) {
      this.students.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.calculator {
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6%;
  display: flex;
  flex-direction: column;
  background-color: #4c3585;
  border-radius: 30px 30px 0 0;
}

p {
  width: 60%;
  text-align: justify;
  margin: 0 auto 10%;
  font-size: 1.2em;
  color: #f7af4d;
}

.student-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8% auto;
  border: 2px solid #2cb19e;
  border-radius: 20px;
  padding: 3%;
}

.student-info p {
  text-align: center;
  width: 60%;
  font-size: 2em;
  color: #e7325d;
  margin-bottom: 5%;
}

a {
  color: #f7af4d;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.4em;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7325d;
  padding: 3%;
  border-radius: 100%;
}

.student-info p strong {
  color: #f7af4d;
}

.calculator form {
  display: flex;
  flex-direction: column;
}

button {
  width: 90%;
  padding: 5%;
  font-size: large;
  margin: 2% auto;
  border-radius: 6px;
  border: none;
  background-color: #f7af4d;
  color: #4c3585;
}

input {
  border-radius: 5px;
  margin: 1%;
  border: 2px solid #007a8d;
  padding: 4%;
}

form {
  width: 60%;
}

::-webkit-scrollbar {
  width: 2%;
}

::-webkit-scrollbar-track {
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #f7af4d;
  border-radius: 3px;
}

@media (min-width: 770px) {
  .calculator {
    width: 51%;
    border-radius: 30px 0 0 30px;
    max-height: 100vh;
  }

  .scroll {
    overflow: auto;
    max-height: 50%;
  }
}
</style>