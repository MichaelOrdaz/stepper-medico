<template>
  <q-card dark class="q-pa-md full-height">
    <div class="row full-height justify-center items-center">
      <div class="col text-center">
        <p style="font-size: 32px" class="q-my-none text-weight-bold text-center">
          VENTANA NEUROLÓGICA
        </p>
        <p style="font-size: 32px">
          <ul style="list-style: decimal;" class="text-left">
            <li><a href="javascript://" class="link" @click="godet = true">Escore de Godet</a> > 9 pts.</li>
            <li>Aspiraciones traqueales con intervalo > 3h</li>
            <li><a href="javascript://" class="link" @click="esfuerzoDeTos = true">Esfuerzo de tos</a> > 56 l/min</li>
            <li>Score de disnea &lt; 4</li>
          </ul>
        </p>
        <div class="q-gutter-md">
          <q-btn
            size="lg"
            class="q-px-xl"
            color="primary"
            :to="{name: routeNames.STEP_4}"
          >
            SI
          </q-btn>
          <q-btn
            size="lg"
            class="q-px-xl"
            color="orange"
            :to="{name: routeNames.STEP_FINISH}"
          >
            NO
          </q-btn>
        </div>
      </div>
    </div>
  </q-card>

  <q-dialog v-model="esfuerzoDeTos">
    <q-card style="width: 800px; max-width: 80vw; font-size: 18px" class="bg-grey-8 text-white">
      <q-btn flat icon="close" color="white" v-close-popup />
      <q-img src="esfuerzo-tos.png" class="q-mx-auto" style="max-width: 90%; display: block" />

      <q-card-actions align="right">
        <q-btn flat label="Cerrar" color="white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="godet">
    <q-card style="width: 800px; max-width: 80vw; font-size: 18px" class="bg-grey-8 text-white">
      <q-btn flat icon="close" color="white" v-close-popup />
      <q-img src="score-godet-1.png" class="q-mx-auto" style="max-width: 90%; display: block" />

      <div class="bg-yellow q-pa-md q-mx-lg q-my-lg text-dark">
        * La deglución se consideró efectiva si la observación clínica del desplazamiento
        cefálico espontáneo del cartílago tiroideo estaba presente.
      </div>

      <q-img src="score-godet-2.png" class="q-mx-auto" style="max-width: 90%; display: block" />

      <q-card-actions align="right">
        <q-btn flat label="Cerrar" color="white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import routeNames from 'src/router/routeNames';
import { ref } from 'vue';

const esfuerzoDeTos = ref(false);
const godet = ref(false);

</script>
<style scoped>
  .link {
    color: white;
  }
</style>
