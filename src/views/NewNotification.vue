<template>
  <div class="container-generic">
    <div v-if="!step" class="grid col-span-6 grid-flow-col gap-4">
      <div>Identificação do Paciente</div>
      <div class="flex flex-col content-is-input gap-4">
        <p>Preencha os campos abaixo:</p>
        <input
          type="text"
          placeholder="Nome do Paciente"
          v-model="data.user.name"
          required
          :class="nextToStep2 && !data.user.name ? 'input-error' : ''"
        />
        <input
          type="text"
          placeholder="Registro"
          v-model="data.user.registre"
          :class="nextToStep2 && !data.user.registre ? 'input-error' : ''"
          required
        />
        <input
          type="text"
          placeholder="Data de Admissão"
          v-model="data.user.admissonDate"
          :class="nextToStep2 && !data.user.admissonDate ? 'input-error' : ''"
          required
        />
        <input
          type="text"
          placeholder="Turno"
          v-model="data.user.turn"
          :class="nextToStep2 && !data.user.turn ? 'input-error' : ''"
          required
        />
        <input
          type="text"
          placeholder="Idade"
          v-model="data.user.age"
          :class="nextToStep2 && !data.user.age ? 'input-error' : ''"
          required
        />
        <input
          type="text"
          placeholder="Sexo"
          v-model="data.user.sex"
          :class="nextToStep2 && !data.user.sex ? 'input-error' : ''"
          required
        />
        <input
          type="text"
          placeholder="Data de Ocorrência"
          v-model="data.user.ocorrencyDate"
          :class="nextToStep2 && !data.user.ocorrencyDate ? 'input-error' : ''"
          required
        />
        <div>
          <button @click="next()" class="btn-form">Proximo</button>
          <span>*Itens Obrigatórios</span>
        </div>
      </div>
    </div>
    <div v-if="step === 1">
      <p>Tipo de Incidentes ou Eventos Adversos</p>
      <p>Selecione uma das opções</p>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="adverso in adversos"
          :key="adverso.id"
          class="box-step-2"
          @mouseenter="showDescrition(adverso.description, true)"
          @mouseout="showDescrition(adverso.description, false)"
          @click="salveAdverso(adverso)"
        >
          <p v-if="adverso.description === verifyDescription">
            {{ adverso.description }}
          </p>
          <span v-else>
            {{ adverso.title }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="step === 2" class="grid col-span-6 grid-flow-col gap-4">
      <div>{{ data.adverson }}</div>
      <div class="flex flex-col content-is-input gap-4">
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="option in optionsStep3"
            :key="option"
            class="box-step-2"
            @click="setOption(option)"
          >
            <p>
              {{ option }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 3" class="grid col-span-6 grid-flow-col gap-4">
      <div>Descrição do Evento Ocorrido</div>
      <div class="flex flex-col content-is-input gap-4">
        <div class="grid grid-cols-4 gap-3">
          <div class="box-step-2">
            <textarea
              class="textare-content"
              placeholder="Digite aqui"
              v-model="data.description"
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <button @click="prev()" class="btn-form">Voltar</button>
        <button @click="next()" class="btn-form">Proximo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stepForm from "../components/step/step";

export default defineComponent({
  data() {
    return {
      step: 0,
      optionsStep3: [""],
      adversos: stepForm["Eventos Adversos"],
      verifyDescription: "",
      nextToStep2: false,
      data: {
        user: {
          name: "",
          registre: "",
          admissonDate: "",
          turn: "",
          age: "",
          sex: "",
          ocorrencyDate: "",
        },
        adverson: "",
        option: "",
        description: "",
      },
    };
  },
  methods: {
    next() {
      console.log(this.data);
      this.nextToStep2 = true;
      console.log(this.nextToStep2);
      if (!Object.values(this.data.user).includes("")) {
        this.step = this.step + 1;
      }
    },
    prev() {
      this.step = this.step - 1;
    },
    showDescrition(value: string, verify: boolean) {
      if (!verify) {
        this.verifyDescription = "";
        return;
      }
      this.verifyDescription = value;
    },
    salveAdverso(value: { title: string; options: string[] }) {
      this.data.adverson = value.title;
      this.optionsStep3 = value.options;
      this.next();
    },
    setOption(option: string) {
      this.data.option = option;
      this.next();
    },
  },
});
</script>

<style scoped>
.box-step-2 {
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--primaryColor);
}
.content-is-input input {
  border-radius: 20px;
  padding: 5px 10px;
  outline: none;
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--white);
}

.content-is-input input:focus {
  border: 1px solid var(--primaryColor);
}

.content-is-input input::placeholder {
  color: var(--gray900);
}

.input-error {
  border: 1px solid red !important;
}
.input-error::placeholder {
  color: red !important;
}
.content-is-input {
  position: relative;
  padding: 20px;
}
.content-is-input::after {
  content: "";
  position: absolute;
  top: 0;
  left: -52px;
  bottom: 0;
  width: 96%;
  background: var(--primaryColor);
  z-index: -1;
  transform: rotate(-18deg);
  border-radius: 20px 100px 50% 100px;
}
.content-is-input::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--secundaryColor);
  z-index: -1;
  transform: rotate(110deg);
  border-radius: 100px;
}
.btn-form {
  background: var(--secundaryColor);
  border: none;
  color: var(--white);
}

.textare-content {
  resize: none;
  width: 500px;
  height: 400px;
}
</style>
