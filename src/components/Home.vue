<template>
  <v-app>
    <v-main>

      <div>
        <v-img src="/public/capa1.jpg" cover>
          <div class="transparente1" style="line-height: 18px;" align="center"
            :class="smAndDown ? 'w-50 h-100 pt-4' : 'w-50 h-100 pt-8 mb-10'">
            <h5 class="text-white font-weight-medium text-sm-h4 text-md-h3" :class="smAndDown ? '' : ''">DESCUBRA</h5>
            <h5 class="text-white font-weight-medium text-sm-h4 text-md-h3" :class="smAndDown ? '' : ''">O <span
                class="text-terciary">PODER</span> DA <span class="text-terciary">VIDA</span></h5>
            <h5 class="text-white font-weight-medium text-sm-h4 text-md-h3" :class="smAndDown ? '' : ''">EM CADA</h5>
            <h1 class="text-terciary font-weight-medium text-sm-h2 text-md-h1" :class="smAndDown ? 'pt-1' : ''">SEMENTE
            </h1>

            <div class="d-sm-none">
              <h6 class="text-white" style="font-size: 9px; line-height: 11px;" :class="smAndDown ? 'px-4 pt-3' : ''">
                Potencialize <span class="font-weight-light">seus </span>
                <span class="text-terciary">resultados</span> <span class="font-weight-light">com nossa</span> <span
                  class="text-terciary">inovação</span> <span class="font-weight-light">em</span>
                Fertilizantes <span class="font-weight-light">e</span> Soluções <span
                  class="text-terciary">agropecuárias</span>.
              </h6>
            </div>

            <div class="d-none d-sm-block d-md-none">
              <h6 class="text-white text-md-h5" style="font-size: 20px; line-height: 21px;"
                :class="smAndDown ? 'px-4 pt-5' : 'pt-5 px-10'">
                Potencialize <span class="font-weight-light">seus </span>
                <span class="text-terciary">resultados</span> <span class="font-weight-light">com nossa</span> <span
                  class="text-terciary">inovação</span> <span class="font-weight-light">em</span>
                Fertilizantes <span class="font-weight-light">e</span> Soluções <span
                  class="text-terciary">agropecuárias</span>.
              </h6>
            </div>

            <div class="d-none d-md-block">
              <h6 class="text-white" style="font-size: 30px; line-height: 30px;"
                :class="smAndDown ? 'px-4 pt-5' : 'pt-8 px-10 mb-16'">
                Potencialize <span class="font-weight-light">seus </span>
                <span class="text-terciary">resultados</span> <span class="font-weight-light">com nossa</span> <span
                  class="text-terciary">inovação</span> <span class="font-weight-light">em</span>
                Fertilizantes <span class="font-weight-light">e</span> Soluções <span
                  class="text-terciary">agropecuárias</span>.
              </h6>
            </div>

            <div class="d-sm-none">
              <v-btn size="x-small" style="border-width: 1px; border-color: white;"
                :class="smAndDown ? 'mt-5 px-5 bg-transparent text-white rounded-pill' : ''" href="#sobre">SAIBA
                MAIS</v-btn>
            </div>

            <div class="d-none d-sm-block">
              <v-btn size="large" style="border-width: 1px; border-color: white;"
                class="bg-transparent text-white rounded-pill"
                :class="smAndDown ? 'mt-16 mb-16 px-16' : 'px-16 mt-16 w-50'" href="#sobre">SAIBA
                MAIS</v-btn>
            </div>
          </div>
        </v-img>
      </div>

      <div id="sobre">
        <div class="d-flex" :class="smAndDown ? 'mb-3' : 'mb-3 mt-3'">
          <div class="d-sm-none" :class="smAndDown ? 'w-100 pl-2 pt-4' : ''">
            <h3 class="text-primary font-weight-medium text-sm-h4">Sobre nós</h3>
            <h6 class="text-secondary font-weight-medium text-sm-h5" :class="smAndDown ? 'mt-1 pr-6' : ''"><span
                class="text-quartiary font-weight-bold">FERTVIDA</span> é uma linha de aditivos e fertilizantes orgânicos,
              com uma fórmula inovadora que contém complexos
              enzimáticos, carboidratos, proteínas e quitinas.</h6>

            <div>
              <v-btn href="#diferencial" size="x-small" class="rounded-pill bg-quartiary mt-2 px-5">
                <h6 class="text-white">CONHEÇA MAIS</h6>
              </v-btn>
            </div>
          </div>

          <div class="d-none d-sm-block" :class="smAndDown ? 'w-100 pl-4 pt-4' : 'pl-8 pt-16 pr-16'">
            <h3 class="text-primary font-weight-medium text-sm-h4 text-md-h3" :class="smAndDown ? 'pt-4' : ''">Sobre nós
            </h3>
            <h6 class="text-secondary font-weight-medium text-sm-h6 text-md-h5"
              :class="smAndDown ? 'pt-5 pr-16' : 'pt-6 pr-16'"><span
                class="text-quartiary font-weight-bold">FERTVIDA</span> é uma linha de aditivos e fertilizantes orgânicos,
              com uma fórmula inovadora que contém complexos
              enzimáticos, carboidratos, proteínas e quitinas.</h6>

            <div>
              <v-btn href="#diferencial" size="large" class="rounded-pill bg-quartiary mt-5 ml-4 px-16"
                :class="smAndDown ? '' : 'mt-16 w-50'">
                <h5 class="text-white">CONHEÇA MAIS</h5>
              </v-btn>
            </div>
          </div>

          <div :class="smAndDown ? 'w-75 mr-2 mt-3' : 'w-75 mt-3 mr-3 mb-3'">
            <v-img src="/public/fotosobre.png"></v-img>
          </div>
        </div>
      </div>

      <div id="diferencial" class="degrade bg-primary" align="center">
        <div class="d-sm-none text-terciary" style="line-height: 25px;" :class="smAndDown ? 'pt-16' : ''">
          <h2>NOSSO</h2>
          <p />
          <h2>DIFERENCIAL</h2>
        </div>

        <div id="diferencial" class="d-none d-sm-block text-terciary text-sm-h4" style="line-height: 50px;"
          :class="smAndDown ? 'pt-16' : 'pt-16'">
          <h2>NOSSO</h2>
          <p />
          <h2>DIFERENCIAL</h2>
        </div>

        <div class="d-flex text-center d-md-none" align="center" :class="smAndDown ? 'mt-8' : ''">

          <div class="text-sm-h5" :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/aceleraçao.png"></v-img>
            <h5>+ Aceleração</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-4 mr-6' : ''">Favorece a decomposição rápida de resíduos
              orgânicos.</h6>
          </div>

          <div class="text-sm-h5" :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/nutriçao.png"></v-img>
            <h5>+ Nutrição</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-7 mr-7' : ''">Enriquece o solo com complexos enzimáticos,
              carboidratos e proteínas.</h6>
          </div>
        </div>

        <div class="d-flex text-center d-md-none" align="center" :class="smAndDown ? 'mt-8' : ''">

          <div class="text-sm-h5" :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/sustentabilidade.png"></v-img>
            <h5>+ Sustentabilidade</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-7 mr-7' : ''">Promove práticas agrícolas ecológicas.</h6>
          </div>

          <div class="text-sm-h5" :class="smAndDown ? 'w-50' : ''">
            <v-img src="/public/estabilidade.png"></v-img>
            <h5>+ Estabilidade</h5>
            <h6 class="text-terciary" :class="smAndDown ? 'ml-6 mr-6' : ''">Contribui para a formação de um solo mais
              equilibrado e resistente.</h6>
          </div>
        </div>

        <div class="d-flex justify-space-between mt-16 mb-16">

          <div class="text-sm-h5 w-25 text-center d-none d-md-block">
            <v-img src="/public/aceleraçao.png"></v-img>
            <h4>+ Aceleração</h4>
            <h6 class="text-terciary px-16">Favorece a decomposição rápida de resíduos
              orgânicos.</h6>
          </div>

          <div class="text-sm-h5 w-25 d-none d-md-block">
            <v-img src="/public/nutriçao.png"></v-img>
            <h4>+ Nutrição</h4>
            <h6 class="text-terciary px-16">Enriquece o solo com complexos enzimáticos,
              carboidratos e proteínas.</h6>
          </div>


          <div class="text-sm-h5 w-25 d-none d-md-block">
            <v-img src="/public/sustentabilidade.png"></v-img>
            <h4>+ Sustentabilidade</h4>
            <h6 class="text-terciary px-16">Promove práticas agrícolas ecológicas.</h6>
          </div>

          <div class="text-sm-h5 w-25 d-none d-md-block">
            <v-img src="/public/estabilidade.png"></v-img>
            <h4>+ Estabilidade</h4>
            <h6 class="text-terciary px-16">Contribui para a formação de um solo mais
              equilibrado e resistente.</h6>
          </div>
        </div>



        <div class="d-sm-none" :class="smAndDown ? 'pt-10 pb-10' : ''">
          <v-btn href="#produto" size="small" class="bg-quartiary rounded-pill px-16">
            <h6 class="text-white">CONHEÇA O PRODUTO</h6>
          </v-btn>
        </div>

        <div class="d-none d-sm-block" :class="smAndDown ? 'pt-16 pb-16' : 'mt-16 pt-16 pb-16'">
          <v-btn href="#produto" size="large" class="bg-quartiary rounded-pill px-16" :class="smAndDown ? '' : 'w-50'">
            <h5 class="text-white">CONHEÇA O PRODUTO</h5>
          </v-btn>
        </div>
      </div>

      <div id="produto" class="d-flex" :class="smAndDown ? 'mb-6' : ''">
        <div class="d-sm-none" :class="smAndDown ? 'w-100 pl-2 pt-4' : ''">
          <h3 class="text-primary font-weight-medium">O Nosso Produto</h3>
          <h6 class="text-secondary font-weight-medium" :class="smAndDown ? 'mt-2 pr-6' : ''">Os nossos produtos
            aceleram
            a decomposição, fornecem nutrientes essenciais e promovem a sustentabilidade agrícola.</h6>

          <div align="center" :class="smAndDown ? 'w-75 mt-8' : ''">
            <h6 style="font-size: 8px;">Obtenha de forma <span class="text-quartiary">GRATUITA </span> a ficha técnica
              do
              nosso produto!</h6>
            <v-btn size="x-small" class="rounded-pill bg-quartiary mt-2 px-5">
              <h6 class="text-white">FAZER DOWNLOAD</h6>
            </v-btn>
          </div>
        </div>

        <div id="produto" class="d-none d-sm-block" :class="smAndDown ? 'w-100 pl-4 pt-8' : 'pt-16 pl-8 pr-16'">
          <h3 class="text-primary font-weight-medium text-sm-h4 text-md-h3">O Nosso Produto</h3>
          <h6 class="text-secondary font-weight-medium text-sm-h6 text-md-h5"
            :class="smAndDown ? 'mt-2 pr-6' : 'pt-6 pr-16'">Os nossos
            produtos
            aceleram
            a decomposição, fornecem nutrientes essenciais e promovem a sustentabilidade agrícola.</h6>

          <div align="center" :class="smAndDown ? 'w-75 mt-8' : 'pt-16 mt-16 pr-16 mr-16'">
            <h6 class="text-md-h6" :class="smAndDown ? '' : 'mr-16'" style="font-size: 9px;">Obtenha de forma <span
                class="text-quartiary">GRATUITA </span> a ficha técnica
              do
              nosso produto!</h6>

            <v-btn size="large" class="rounded-pill bg-quartiary mt-3 px-16" :class="smAndDown ? '' : 'mr-16 w-75'">
              <h6 class="text-white">FAZER DOWNLOAD</h6>
            </v-btn>
          </div>
        </div>

        <div :class="smAndDown ? 'w-100 mr-2 mt-3' : 'w-75 pt-3 pb-3 pr-3'">
          <v-img src="/public/fotoproduto.jpg"></v-img>
        </div>

      </div>

      <div class="jsutify-center align-center text-center d-md-none" :class="smAndDown ? 'w-100' : ''">
        <v-img src="/public/capa3.jpg" align="center" cover>

          <div class="transparente2 d-sm-none" :class="smAndDown ? 'h-50 mt-16 pt-5' : ''">
            <h1 class="font-weight-medium text-white">FERT<span class="text-quintenary">VIDA</span></h1>
            <p class="text-terciary"><em>O futuro sustentável para a sua plantação.</em></p>

            <div :class="smAndDown ? 'mt-5' : ''">
              <v-btn href="#faleconosco" class="rounded-pill bg-quartiary">
                <h6 class="text-white">FALE CONOSCO</h6>
              </v-btn>
            </div>
          </div>

          <div class="transparente2 d-none d-sm-block" :class="smAndDown ? 'h-75 mt-16 pt-16' : ''">
            <h1 class="font-weight-medium text-white text-sm-h2" :class="smAndDown ? 'mt-16 pt-8' : ''">FERT<span
                class="text-quintenary">VIDA</span></h1>
            <p class="text-terciary text-sm-h5 mt-2"><em>O futuro sustentável para a sua plantação.</em></p>

            <div :class="smAndDown ? 'mt-16' : ''">
              <v-btn href="#faleconosco" size="large" class="rounded-pill bg-quartiary px-16">
                <h5 class="text-white">FALE CONOSCO</h5>
              </v-btn>
            </div>
          </div>

          <div :class="smAndDown ? 'w-25 mt-8' : ''">
            <v-img class="d-sm-none" src="/public/logo.png" />
            <v-img class="d-none d-sm-block" src="/public/logo.png" :class="smAndDown ? 'mt-9 w-50' : ''" />
          </div>
        </v-img>
      </div>

      <div class="d-none d-md-block">
        <v-img src="/public/capa3desktop.jpg" class="pt-16" align="center" cover height="800">

          <div class="transparente2 h-75 mt-16">
            <h1 class="font-weight-medium text-white text-md-h1 pt-16">FERT<span class="text-quintenary">VIDA</span></h1>
            <p class="text-terciary pt-5 text-md-h4"><em>O futuro sustentável para a sua plantação.</em></p>

            <div class="mt-16">
              <v-btn href="#faleconosco" size="x-large" class="rounded-pill bg-quartiary w-50 mt-16">
                <h6 class="text-white">FALE CONOSCO</h6>
              </v-btn>
            </div>
          </div>
          <v-img width="100" class="mt-5" src="/public/logo.png" />
        </v-img>
      </div>




      <div id="faleconosco" align="center" :class="smAndDown ? 'w-100 pt-10 pb-10' : 'pt-16 pb-16'">

        <h2 class="text-secondary text-sm-h3 text-md-h4">FALE CONOSCO</h2>
        <h5 class="font-weight-medium text-sm-h6 text-md-h6" :class="smAndDown ? '' : 'pt-3'">Como podemos ajudar o seu negócio?</h5>
        <h5 class="text-sm-h6" :class="smAndDown ? 'mt-2' : ''"><v-icon size="x-small">mdi-email</v-icon>
          contato@fertvida.com.br</h5>

        <div :class="smAndDown ? 'pt-5' : 'pt-10'">
          <h3 class="text-quartiary text-sm-h4 text-md-h4">Nosso Contato</h3>
          <h5 class="text-sm-h6" :class="smAndDown ? 'mt-2' : 'text-h6'"><v-icon size="x-small">mdi-phone</v-icon> xxxxxxxxxx
          </h5>
          <h5 class="text-sm-h6" :class="smAndDown ? 'mt-2' : 'text-h6'"><v-icon size="x-small">mdi-instagram</v-icon> xxxxxxxxxx
          </h5>
        </div>

      </div>

      <div class="bg-secondary" align="center" :class="smAndDown ? 'w-100 pt-10' : 'pt-16 pb-16'">
        <h4 class="font-weight-bold text-sm-h4 pb-10 px-5" style="font-size: 48px;">COMO PODEMOS AJUDAR O SEU NEGÓCIO?
        </h4>

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="nome" :rules="nomeRules" label="Nome" color="quartiary"
                  hint="Informe seu nome"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="Email" :rules="emailRules" label="Email" placeholder="email@email.com.br"
                  hint="Informe seu E-mail" color="quartiary"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="WhatsApp" :rules="WhatsAppRules" label="WhatsApp" color="quartiary"
                  hint="Informe seu WhatsApp"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="Mensagem" :rules="MensagemRules" label="Mensagem" color="quartiary"
                  hint="Informe sua mensagem"></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <div class="d-sm-none" :class="smAndDown ? 'w-100 pt-5 pb-10' : ''">
            <v-btn class="bg-quartiary px-16 rounded-pill">
              <h3 class="text-white">ENVIAR</h3>
            </v-btn>
          </div>

          <div class="d-none d-sm-block" :class="smAndDown ? 'w-100 pt-5 pb-10' : ''">
            <v-btn size="large" class="bg-quartiary px-16 rounded-pill" :class="smAndDown ? '' : 'w-50 mt-8 mb-10'">
              <h5 class="text-white">ENVIAR</h5>
            </v-btn>
          </div>
        </v-form>

      </div>



      <v-footer class="bg-primary">
        <div align="center" :class="smAndDown ? 'w-100' : 'w-100'">
          <v-img src="/public/logo.png" width="50" />
        </div>
      </v-footer>
      <AppBar />
    </v-main>
  </v-app>
</template>

<style scoped>
#sobre {
  scroll-margin-top: 100px;
}

#diferencial {
  scroll-margin-top: 30px;
}

#produto {
  scroll-margin-top: 100px;
}

#faleconosco {
  scroll-margin-top: 230px;
}


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
import { ref } from 'vue';

const { smAndDown, smAndUp, lgAndUp, mdAndUp } = useDisplay()
const valid = ref(false);

const nome = ref('');
const nomeRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir um Nome.';
  },
  value => {
    if (value?.length <= 50) return true;
    return 'Insira um nome de no minimo 3 letras.';
  },
]);

const Email = ref('');
const emailRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir um E-mail.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail deve ser válido.';
  },
]);

const WhatsApp = ref('');
const WhatsAppRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir um Número';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'O número deve ser válido.';
  },
]);

const Mensagem = ref('');
const MensagemRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir uma Mensagem.';
  },
]);
</script>