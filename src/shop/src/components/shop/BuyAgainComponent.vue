<template>
    <v-card style="height: 100%">
        <v-card-title>Buy again</v-card-title>
        <v-card-text>
            <v-row>
                <v-col class="d-flex flex-column" cols="6" :key="index" v-for="(item, index) in items">
                    <v-img height="152" :src="require(`@/assets/items/${item.image}`)" />
                </v-col>
            </v-row>
        </v-card-text>
        <v-footer class="mt-auto" color="white">
            <v-btn text class="pa-0" color="primary" href="#">See more</v-btn>
        </v-footer>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BuyAgainComponent extends Vue {
    get items(): { title: string, image: string }[] {
        return [
            {
                title: "Whiskey",
                image: 'whiskey.jpg'
            },
            {
                title: "Pants",
                image: 'pants.jpg'
            },
            {
                title: "Pan",
                image: "pan.jpg"
            },
            {
                title: "Crime and punishment",
                image: "c-and-p.jpg"
            }
        ]
    }
}

</script>