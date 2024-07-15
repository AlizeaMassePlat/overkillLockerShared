<template>
  <div>
    <MyButton v-model:value="test" :onClick="handleButtonClick" />
    <p>Test value in parent: {{ test }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MyButton from '../../../shared/components/MyButton.vue'; // Assurez-vous que le chemin est correct

export default defineComponent({
  name: "HomeView",
  components: {
    MyButton
  },
  setup() {
    const test = ref("toto"); // Définir la variable test comme une référence réactive

    const handleButtonClick = () => {
      console.log('Button clicked in parent component');
    };

    return {
      test,
      handleButtonClick,
    };
  },
});
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
