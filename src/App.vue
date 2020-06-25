<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Replacr
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://727021.github.io"
        target="_blank"
        text
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Inputs/>
    </v-content>
  </v-app>
</template>

<script>
import Inputs from './components/Inputs';

export default {
  name: 'App',

  components: {
    Inputs,
  },

  data: () => ({
    //
  }),
};
</script>
