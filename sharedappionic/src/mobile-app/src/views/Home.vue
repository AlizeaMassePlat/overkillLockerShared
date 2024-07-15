<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <MyButton></MyButton>
    </ion-content>
  </ion-page>
</template>

<script>
import MyButton from '../../../shared/components/MyButton.vue';

export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    MyButton
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked (Mobile)');
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>