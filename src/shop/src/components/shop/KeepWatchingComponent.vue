<template>
    <v-card class="d-flex flex-column" style="height: 100%;">
        <v-card-title>Keep watching</v-card-title>
        <v-card-text class="d-flex flex-column">
            <v-img class="mt-12" :src="require('@/assets/items/sv.jpg')">
                <v-overlay absolute color="black">
                    <span>
                        <v-icon style="font-size: 80px">mdi-play-circle-outline</v-icon>
                    </span>
                </v-overlay>
            </v-img>
        </v-card-text>
        <v-footer class="mt-auto" color="white">
            <div class="mb-12">Silicon Valley - Season 01 [dt./OV]</div>
            <v-btn text class="pa-0" color="primary" href="#">See more from Prime Video</v-btn>
        </v-footer>
   </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class KeepWatchingComponent extends Vue {

}

</script>

