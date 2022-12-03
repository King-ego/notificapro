<template>
  <div class="container-generic">
    <div v-if="!step" class="step-one">
      <div class="title-step-box-left">Identificação do Paciente</div>
      <div class="flex flex-col content-is-input before after gap-4">
        <p class="title-step-box-2">Preencha os campos abaixo:</p>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Nome do Paciente"
            v-model="data.user.name"
            required
            :class="nextToStep2 && !data.user.name ? 'error' : ''"
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
            :class="nextToStep2 && !data.user.admissonDate ? 'error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Turno"
            v-model="data.user.turn"
            :class="nextToStep2 && !data.user.turn ? 'error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Idade"
            v-model="data.user.age"
            :class="nextToStep2 && !data.user.age ? 'error' : ''"
            required
          />
        </div>
        <div class="flex items-center row-input-custom">
          <span>*</span>
          <input
            type="text"
            placeholder="Sexo"
            v-model="data.user.sex"
            :class="nextToStep2 && !data.user.sex ? 'error' : ''"
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
          <button @click="nextStep2()" class="btn-form">Proximo</button>
          <span>*Itens Obrigatórios</span>
        </div>
      </div>
    </div>
    <div v-if="step === 1" class="seleted-adverse relative before after">
      <p class="title-step-box-2 md:text-2xl">
        Tipo de Incidentes ou Eventos Adversos
      </p>
      <p class="title-step-box-2 mt-3 mb-6">Selecione uma das opções</p>
      <div class="defalt">
        <div
          v-for="adverse in adverses"
          :key="adverse.id"
          class="box-step-2"
          @click="setAdverse(adverse)"
          :class="validated(adverse.title)"
        >
          <div
            @mouseenter="showDescrition(adverse.description, true)"
            @mouseout="showDescrition(adverse.description, false)"
            :class="
              adverse.description === verifyDescription
                ? 'box-step-2-decription'
                : 'box-step-2-title'
            "
          >
            {{
              adverse.description === verifyDescription
                ? adverse.description
                : adverse.title
            }}
          </div>
        </div>
      </div>
      <div class="content-button-step2">
        <button @click="nextStep3()" class="btn-form">Proximo</button>
      </div>
    </div>
    <div v-if="step === 2" class="step-three">
      <div class="title-step-box-left">{{ data.adverse }}</div>
      <div class="flex flex-col content-is-input before after gap-4">
        <div class="title-step-box-2">Selecione uma das Opções</div>
        <carrossel
          :options="optionsStep3"
          v-on:select="setOption($event)"
          :next="nextToStep4"
          :selectOption="data.option"
        />
        <div class="content-button-step3">
          <button @click="prev()" class="btn-form">Voltar</button>
          <button @click="nextStep4()" class="btn-form">Proximo</button>
        </div>
      </div>
    </div>
    <div v-if="step === 3" class="step-four">
      <div class="title-step-box-left">Descrição do Evento Ocorrido</div>
      <div class="flex flex-col content-is-input before after gap-4">
        <div class="title-step-box-2">Descrição do Evento Ocorrido</div>
        <div>
          <textarea
            class="textare-content"
            placeholder="Digite aqui"
            v-model="data.description"
            :class="nextToStepModal && !data.description ? 'error' : ''"
          ></textarea>
        </div>
        <div>
          <button @click="open()" class="btn-form">Enviar</button>
        </div>
      </div>
    </div>
    <modal-confirm
      :show="showModalConfirm"
      :data="data"
      v-on:close="close()"
      v-on:sucess="sucessModal()"
    />
    <modal-sucess :show="sucess" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stepForm from "../components/step/step";
import ModalConfirm from "../components/ModalConfirm.vue";
import ModalSucess from "../components/ModalSucess.vue";
import Carrossel from "../components/Carrossel.vue";
import { classValidated } from "../methodValidated";

export default defineComponent({
  components: {
    ModalConfirm,
    ModalSucess,
    Carrossel,
  },
  data() {
    return {
      step: 0,
      optionsStep3: [""],
      showModalConfirm: false,
      sucess: false,
      adverses: stepForm["Eventos Adverse"],
      verifyDescription: "",
      nextToStep2: false,
      nextToStep3: false,
      nextToStep4: false,
      nextToStepModal: false,
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
    nextStep2() {
      const validated = {
        ...this.data.user,
        ocorrencyDate: undefined,
        registre: undefined,
      };
      this.nextToStep2 = true;
      if (!Object.values(validated).includes("")) {
        this.next();
      }
    },
    nextStep3() {
      this.nextToStep3 = true;
      if (this.data.adverse) this.next();
    },
    nextStep4() {
      this.nextToStep4 = true;
      if (this.data.option) this.next();
    },
    next() {
      console.log(this.data);
      console.log(this.nextToStep2);
      console.log({ data: this.$data });
      if (this.step + 1 >= 4) return;
      this.step = this.step + 1;
    },
    prev() {
      this.step = this.step - 1;
    },
    close() {
      this.showModalConfirm = false;
      this.step = 0;
    },
    sucessModal() {
      this.sucess = true;
      this.showModalConfirm = false;
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
    },
    setOption(option: string) {
      this.data.option = option;
    },
    open() {
      this.nextToStepModal = true;
      if (this.data.description) this.showModalConfirm = true;
    },
    validated(adverse: string) {
      return classValidated(adverse, this.nextToStep3, this.data.adverse);
    },
  },
});
</script>

<style lang="postcss" scoped>
.step-four,
.step-one,
.step-three,
.seleted-adverse {
  margin-top: 20px;
}

.title-step-box-left {
  @apply flex justify-center;
  font-weight: bold;
}

@media (min-width: 800px) {
  .step-one {
    @apply grid col-span-6 grid-flow-col gap-4;
  }
  .step-three {
    @apply grid col-span-6 grid-flow-col gap-4;
  }
  .step-four {
    @apply grid col-span-6 grid-flow-col gap-4;
  }
  .title-step-box-left {
    font-size: 30px;
    width: 100%;
    max-width: 376px;
    padding-left: 80px;
    text-align: left;
  }
}

.box-step-2 {
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--primaryColor);
  border-radius: 20px;
  cursor: pointer;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-step-2 div {
  @apply flex justify-center items-center;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.box-step-2-decription {
  color: var(--gray200);
  font-size: 12px;
}
.box-step-2-title {
  font-weight: 700;
  color: var(--black);
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
.content-is-input {
  position: relative;
  padding: 20px;
  overflow: hidden;
}

.seleted-adverse::after,
.seleted-adverse::before {
  transform: rotate(0);
  top: -20px;
  border-radius: 200px 50% 200px 200px;
}
/* .seleted-adverse::before {
  top: 0;
  transform: rotate(0);
} */

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
.defalt {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.content-button-step2 {
  margin-top: 40px;
}

.content-button-step3 {
  @apply flex justify-between;
  width: 100%;
}
.title-step-box-2 {
  color: var(--white);
}
</style>
