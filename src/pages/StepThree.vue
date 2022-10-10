<template>
  <q-card dark class="q-pa-md full-height">
    <div class="row full-height justify-center items-center">
      <div class="col text-center">
        <p style="font-size: 32px" class="q-my-none text-weight-bold text-center">
          VENTANA NEUROLÓGICA
        </p>
        <p style="font-size: 32px">
          <ul style="list-style: decimal;" class="text-left">
            <li>Escore de Godet > 9 pts.</li>
            <li>Aspiraciones traqueales con intervalo > 3h</li>
            <li>Esfuerzo de tos > 56 l/min</li>
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
</template>

<script setup>
import routeNames from 'src/router/routeNames';
</script>
