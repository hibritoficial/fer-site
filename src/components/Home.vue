<template>
  <v-app>
    <v-main>

      <div>
        <v-img src="/public/capa1.jpg">
          <div class="bloco1" style="line-height: 18px;" align="center"
            :class="smAndDown ? 'w-50 h-100 pt-2' : 'w-50 h-100'">
            <h5 class="text-white" :class="smAndDown ? 'font-weight-medium' : ''">DESCUBRA</h5>
            <h5 class="text-white" :class="smAndDown ? 'font-weight-medium' : ''">O <span
                class="text-terciary">PODER</span> DA <span class="text-terciary">VIDA</span></h5>
            <h5 class="text-white" :class="smAndDown ? 'font-weight-medium' : ''">EM CADA</h5>
            <h1 class="text-terciary" :class="smAndDown ? 'font-weight-medium pt-1' : ''">SEMENTE</h1>

            <div>
              <h6 class="text-white" style="font-size: 9px; line-height: 11px;" :class="smAndDown ? 'px-4 pt-3' : ''">
                Potencialize <span class="font-weight-light">seus </span>
                <span class="text-terciary">resultados</span> <span class="font-weight-light">com nossa</span> <span
                  class="text-terciary">inovação</span> <span class="font-weight-light">em</span>
                Fertilizantes <span class="font-weight-light">e</span> Soluções <span class="text-terciary">agropecuárias</span>.
              </h6>
            </div>

            <div>
              <v-btn size="x-small" style="border-width: 1px; border-color: white;"  :class="smAndDown ? 'mt-5 px-5 bg-transparent text-white rounded-pill' : ''">SAIBA MAIS</v-btn>
            </div>
            
          </div>


















        </v-img>
      </div>
      <div>
        asdasdasdsad
      </div>

      <AppBar />
    </v-main>
  </v-app>
</template>

<style scoped>
.bloco1 {
  background-color: #333333ab;
}
</style>

<script setup>
import AppBar from '@/components/AppBar.vue'
import { useDisplay } from 'vuetify';

const { smAndDown, smAndUp, lgAndUp, mdAndUp } = useDisplay()


</script>