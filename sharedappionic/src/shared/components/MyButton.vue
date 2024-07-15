<template>
  <div>
    <ion-button class="my-component" v-if="isMobile" @click="handleClick">
      Enregistrer (mobile)
      <p>Valeur : {{ localTest }}</p>
    </ion-button>
    <button class="my-component" v-else @click="handleClick">
      Enregistrer (web)
      <p>Valeur : {{ localTest }}</p>
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MyButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    value: {
      type: String,
      required: true,
    }
  },
  setup(props, { emit }) {
    const isMobile = ref(false);
    const localTest = ref(props.value); // Définir une variable locale réactive

    onMounted(() => {
      // Vérifiez si la plateforme est mobile
      if (typeof window !== "undefined") {
        isMobile.value = /Mobi|Android/i.test(navigator.userAgent);
      }
    });

    const handleClick = () => {
      localTest.value = "test"; // Mettre à jour la variable locale
      emit('update:value', localTest.value); // Émettre un événement pour mettre à jour la prop dans le parent
      props.onClick(); // Appeler la fonction onClick passée en prop
    };

    return {
      isMobile,
      localTest,
      handleClick,
    };
  },
});
</script>

<style>
.my-component {
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
}
</style>