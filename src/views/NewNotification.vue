<template>
  <div class="container-generic">
    <div v-if="!step" class="grid col-span-6 grid-flow-col gap-4">
      <div class="flex items-center justify-center">
        Identificação do Paciente
      </div>
      <div class="flex flex-col content-is-input gap-4">
        <p>Preencha os campos abaixo:</p>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Nome do Paciente"
            v-model="data.user.name"
            required
            :class="nextToStep2 && !data.user.name ? 'input-error' : ''"
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span class="opacity-0">*</span>
          <input
            type="text"
            placeholder="Registro"
            v-model="data.user.registre"
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Data de Admissão"
            v-model="data.user.admissonDate"
            :class="nextToStep2 && !data.user.admissonDate ? 'input-error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Turno"
            v-model="data.user.turn"
            :class="nextToStep2 && !data.user.turn ? 'input-error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Idade"
            v-model="data.user.age"
            :class="nextToStep2 && !data.user.age ? 'input-error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Sexo"
            v-model="data.user.sex"
            :class="nextToStep2 && !data.user.sex ? 'input-error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span class="opacity-0">*</span>
          <input
            type="text"
            placeholder="Data de Ocorrência"
            v-model="data.user.ocorrencyDate"
          />
        </div>
        <div class="flex justify-between">
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
          v-for="adverse in adverses"
          :key="adverse.id"
          class="box-step-2"
          @mouseenter="showDescrition(adverse.description, true)"
          @mouseout="showDescrition(adverse.description, false)"
          @click="setAdverse(adverse)"
        >
          <p v-if="adverse.description === verifyDescription">
            {{ adverse.description }}
          </p>
          <span v-else>
            {{ adverse.title }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="step === 2" class="grid col-span-6 grid-flow-col gap-4">
      <div>{{ data.adverse }}</div>
      <div class="flex flex-col content-is-input gap-4">
        <div>Selecione uma das Opções</div>
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
        <div>Descrição do Evento Ocorrido</div>
        <div>
          <textarea
            class="textare-content"
            placeholder="Digite aqui"
            v-model="data.description"
          ></textarea>
        </div>
        <div>
          <button @click="next()" class="btn-form">Enviar</button>
        </div>
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
      adverses: stepForm["Eventos Adverse"],
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
        adverse: "",
        option: "",
        description: "",
      },
    };
  },
  methods: {
    next() {
      console.log(this.data);
      const validated = {
        ...this.data.user,
        ocorrencyDate: undefined,
        registre: undefined,
      };
      this.nextToStep2 = true;
      console.log(this.nextToStep2);
      if (this.step + 1 >= 4) return;
      if (!Object.values(validated).includes("")) {
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
    setAdverse(value: { title: string; options: string[] }) {
      this.data.adverse = value.title;
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
  cursor: pointer;
}
.content-is-input input {
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--white);
  width: 100%;
  height: 45px;
}

.content-is-input input:focus {
  border: 1px solid var(--primaryColor);
}

.content-is-input input::placeholder {
  color: var(--lightGray);
}

.input-error {
  border: 1px solid red !important;
  animation: errorAnimated 2s forwards;
}
.input-error::placeholder {
  color: red !important;
}
.content-is-input {
  position: relative;
  padding: 20px;
  overflow: hidden;
}
.content-is-input::after {
  content: "";
  position: absolute;
  top: -300px;
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
  top: -200px;
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
  padding: 10px 20px;
  border-radius: 20px;
}

.textare-content {
  resize: none;
  width: 100%;
  max-width: 500px;
  height: 200px;
  border-radius: 10px;
  outline: none;
  padding: 10px;
}
.row-input-custom span {
  color: var(--white);
}

@keyframes errorAnimated {
  from {
    box-shadow: 1px 1px 1px red;
  }
  to {
    box-shadow: 1px 1px 10px red;
  }
}
</style>
