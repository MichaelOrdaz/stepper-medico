<template>
  <q-card dark class="full-height q-py-md">
    <q-card-section>
      <p style="font-size: 32px" class="q-my-none text-weight-bold text-center">
        VENTANA NEUROLÓGICA
      </p>
      <p style="font-size: 32px">
        <ul style="list-style: decimal;">
          <li>Escore de Godet > 9 pts.</li>
          <li>Aspiraciones traqueales con intervalo > 3h</li>
          <li>Esfuerzo de tos > 56 l/min</li>
          <li>Score de disnea &lt; 4</li>
        </ul>
      </p>
    </q-card-section>

    <div class="row text-center">
      <div class="col">
        <q-btn size="lg" class="q-px-xl" color="primary" :to="{name: routeNames.STEP_4}">SI</q-btn>
      </div>
      <div class="col">
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
  </q-card>
</template>

<script setup>
import routeNames from 'src/router/routeNames';
</script>
