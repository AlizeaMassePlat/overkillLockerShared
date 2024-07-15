<template>
    <ion-app id="app">
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  </template>
  
  <script>
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  
  export default {
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet
    }
  };
  </script>
  
  <style>
  /* Add your global styles here */
  </style>
  