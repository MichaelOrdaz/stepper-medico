<template>
  <q-card dark class="text-center full-height q-py-md">
    <q-card-section>
      <p style="font-size: 32px" class="q-my-none">
        ¿Hay estabilidad fisiologica y metabolica?
      </p>
    </q-card-section>

    <div class="row">
      <div class="col">
        <q-btn size="lg" class="q-px-xl" color="primary" :to="{name: routeNames.STEP_3}">SI</q-btn>
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
