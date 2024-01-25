<template>
    <v-app-bar height="70" class="bg-primary">
        <div>
            <v-btn icon="mdi-menu" color="quartiary" :class="smAndDown ? 'ml-5' : 'ml-8'"></v-btn>
        </div>

        <v-app-bar-title align="center" class="d-none d-sm-block d-lg-block ml-12" :class="smAndDown ? 'mr-5' : ''">
            <v-img src="/public/logo.png" width="80"></v-img>
        </v-app-bar-title>

        <div class="d-flex">
            <v-btn icon="mdi-instagram" color="quartiary" :class="smAndDown ? '' : ''"></v-btn>
            <v-btn icon="mdi-facebook" color="quartiary" :class="smAndDown ? '' : 'mr-8'"></v-btn>
        </div>

        <v-img src="/public/logo.png" align="center" class="d-md-none d-lg-none d-sm-none" height="50"></v-img>
    </v-app-bar>
</template>

<style scoped></style>

<script setup>
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>