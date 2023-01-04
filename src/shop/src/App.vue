<template>
  <v-app style="background-color: #E3E6E6">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue{

}

</script>

<style lang="scss">
.v-btn__content {
  text-transform: none;
}
</style>