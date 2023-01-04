<template>
    <v-card style="height: 100%;">
        <v-card-title>Keep shopping for</v-card-title>
        <v-card-text>
            <v-row>
                <v-col class="d-flex flex-column" cols="6" :key="index" v-for="(item, index) in items">
                    <v-img height="152" :src="require(`@/assets/items/${item.image}`)" />
                    <span>{{ item.title }}</span>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class KeepShoppingCardComponent extends Vue {
    get items(): { title: string, image: string }[] {
        return [
            {
                title: "Arduino kit",
                image: 'arduino.jpg'
            },
            {
                title: "dog in the bucket",
                image: 'dog-in-bucket.jpg'
            },
            {
                title: "Cute baby groot",
                image: "groot-baby.jpg"
            },
            {
                title: "Evil monster yoda",
                image: "yoda.jpg"
            }
        ]
    }
}
</script>