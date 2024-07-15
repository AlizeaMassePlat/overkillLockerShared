<template>
  <div>
    <MyButton test="waaaaaaw" @click="handleButtonClick">Click Me (Web)</MyButton>
  </div>
</template>

<script>
import MyButton from '../../shared/components/MyButton.vue';

export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    MyButton
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked (Web)');
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>