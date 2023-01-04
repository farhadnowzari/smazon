<template>
  <v-container class="pt-0" style="max-width: 1500px">
    <SliderComponent></SliderComponent>
    <v-container style="margin-top: -370px;">
      <v-row>
        <v-col cols="3">
          <KeepShoppingCardComponent></KeepShoppingCardComponent>
        </v-col>
        <v-col cols="3">
          <KeepWatchingComponent></KeepWatchingComponent>
        </v-col>
        <v-col cols="3">
          <BuyAgainComponent></BuyAgainComponent>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-card-title>Smazon Smile :)</v-card-title>
            <v-card-text class="d-flex flex-column youtube">
              <span class="text-body-1 black--text">Subscribe to the youtube channel, </span>
              <v-btn class="my-12" x-large text href="https://www.youtube.com/@ferisharp?sub_confirmation=1" target="blank">
                <v-icon x-large color="red">mdi-youtube</v-icon> Subscribe :)
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SliderComponent from '../components/general/SliderComponent.vue'
import KeepShoppingCardComponent from '@/components/shop/KeepShoppingCardComponent.vue';
import KeepWatchingComponent from '@/components/shop/KeepWatchingComponent.vue';
import BuyAgainComponent from '@/components/shop/BuyAgainComponent.vue';
@Component({
  components: {
    KeepShoppingCardComponent,
    KeepWatchingComponent,
    BuyAgainComponent,
    SliderComponent,
  }
})
export default class HomeView extends Vue {
}
</script>
