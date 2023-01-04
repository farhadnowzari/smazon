<template>
    <v-carousel height="100%" hide-delimiters v-model="slide">
        <template v-slot:next="{ attrs, on }">
            <div style="margin-top: -150px">
                <v-btn x-large icon v-on="on" v-bind="attrs">
                    <v-icon x-large>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
        </template>
        <template v-slot:prev="{ attrs, on }">
            <div style="margin-top: -150px">
                <v-btn x-large icon v-on="on" v-bind="attrs">
                    <v-icon x-large>mdi-chevron-left</v-icon>
                </v-btn>
            </div>
        </template>
        <v-carousel-item :key="index" v-for="(slide, index) in slides">
            <v-sheet>
                <v-img :src="require(`@/assets/slides/${slide}`)"></v-img>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SliderComponent extends Vue {
    get slides(): string[] {
        return [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
        ]
    }
    slide = 0;
}

</script>