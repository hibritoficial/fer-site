<template>
  <v-app>
    <v-main>

      <div>
        <v-img src="/public/capa1.jpg" cover>
          <div class="transparente1" style="line-height: 18px;" align="center"
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
                Fertilizantes <span class="font-weight-light">e</span> Soluções <span
                  class="text-terciary">agropecuárias</span>.
              </h6>
            </div>

            <div>
              <v-btn size="x-small" style="border-width: 1px; border-color: white;"
                :class="smAndDown ? 'mt-5 px-5 bg-transparent text-white rounded-pill' : ''">SAIBA MAIS</v-btn>
            </div>
          </div>
        </v-img>
      </div>

      <div class="d-flex" :class="smAndDown ? 'mb-3' : ''">
        <div :class="smAndDown ? 'w-100 pl-2 pt-4' : ''">
          <h3 class="text-primary font-weight-medium">Sobre nós</h3>
          <h6 class="text-secondary font-weight-medium" :class="smAndDown ? 'mt-2 pr-6' : ''"><span
              class="text-quartiary font-weight-bold">FERTVIDA</span> é uma linha de aditivos e fertilizantes orgânicos,
            com uma fórmula inovadora que contém complexos
            enzimáticos, carboidratos, proteínas e quitinas.</h6>

          <div>
            <v-btn size="x-small" class="rounded-pill bg-quartiary mt-2 px-5">
              <h6 class="text-white">CONHEÇA MAIS</h6>
            </v-btn>
          </div>
        </div>

        <div :class="smAndDown ? 'w-75 mr-2 mt-3' : ''">
          <v-img src="/public/fotosobre.png"></v-img>
        </div>
      </div>

      <div class="degrade bg-primary" align="center">
        <div class="text-terciary" style="line-height: 25px;" :class="smAndDown ? 'pt-16' : ''">
          <h2>NOSSO</h2>
          <p />
          <h2>DIFERENCIAL</h2>
        </div>

        <div class="d-flex text-center" align="center" :class="smAndDown ? 'mt-8' : ''">

          <div :class="smAndDown ? 'w-50 pl' : ''">
            <v-img src="/public/aceleraçao.png"></v-img>
            <h5>Aceleração</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-4 mr-6' : ''">Favorece a decomposição rápida de resíduos
              orgânicos.</h6>
          </div>

          <div :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/nutriçao.png"></v-img>
            <h5>Nutrição</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-7 mr-7' : ''">Enriquece o solo com complexos enzimáticos,
              carboidratos e proteínas.</h6>
          </div>
        </div>

        <div class="d-flex text-center" align="center" :class="smAndDown ? 'mt-8' : ''">

          <div :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/sustentabilidade.png"></v-img>
            <h5>Sustentabilidade</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-7 mr-7' : ''">Promove práticas agrícolas ecológicas.</h6>
          </div>

          <div :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/estabilidade.png"></v-img>
            <h5>Estabilidade</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-6 mr-6' : ''">Contribui para a formação de um solo mais
              equilibrado e resistente.</h6>
          </div>
        </div>


        <div :class="smAndDown ? 'pt-10 pb-10' : ''">
          <v-btn size="small" class="bg-quartiary rounded-pill px-16">
            <h6 class="text-white">CONHEÇA O PRODUTO</h6>
          </v-btn>
        </div>
      </div>

      <div class="d-flex" :class="smAndDown ? 'mb-6' : ''">

        <div :class="smAndDown ? 'w-100 pl-2 pt-4' : ''">
          <h3 class="text-primary font-weight-medium">O Nosso Produto</h3>
          <h6 class="text-secondary font-weight-medium" :class="smAndDown ? 'mt-2 pr-6' : ''">Os nossos produtos aceleram
            a decomposição, fornecem nutrientes essenciais e promovem a sustentabilidade agrícola.</h6>

          <div align="center" :class="smAndDown ? 'w-75 mt-8' : ''">
            <h6 style="font-size: 8px;">Obtenha de forma <span class="text-quartiary">GRATUITA </span> a ficha técnica do
              nosso produto!</h6>
            <v-btn size="x-small" class="rounded-pill bg-quartiary mt-2 px-5">
              <h6 class="text-white">FAZER DONWLOAD</h6>
            </v-btn>
          </div>
        </div>

        <div :class="smAndDown ? 'w-100 mr-2 mt-3' : ''">
          <v-img src="/public/fotoproduto.jpg"></v-img>
        </div>
      </div>

      <div class="jsutify-center align-center text-center" :class="smAndDown ? 'w-100' : ''">
        <v-img src="/public/capa3.jpg" align="center" cover>

          <div class="transparente2" :class="smAndDown ? 'h-50 mt-16 pt-5' : ''">
            <h1 class="font-weight-medium text-white">FERT<span class="text-quintenary">VIDA</span></h1>
            <p class="text-terciary"><em>O futuro sustentável para a sua plantação.</em></p>

            <div :class="smAndDown ? 'mt-5' : ''">
              <v-btn class="rounded-pill bg-quartiary">
                <h6 class="text-white">FALE CONOSCO</h6>
              </v-btn>
            </div>
          </div>

          <div :class="smAndDown ? 'w-25 mt-8' : ''">
            <v-img src="/public/logo.png"  />
          </div>

        </v-img>
      </div>





      <AppBar />
    </v-main>
  </v-app>
</template>

<style scoped>
.transparente1 {
  background-color: #333333ab;
}

.transparente2 {
  background-color: rgba(0, 0, 0, 0.822)
}

.degrade {
  background: linear-gradient(to bottom, #333333, #000000);
}
</style>

<script setup>
import AppBar from '@/components/AppBar.vue'
import { useDisplay } from 'vuetify';

const { smAndDown, smAndUp, lgAndUp, mdAndUp } = useDisplay()


</script>