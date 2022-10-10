<template>
  <q-card dark class="q-pa-md full-height">
    <div class="row full-height justify-center items-center">
      <div class="col text-center">
        <p style="font-size: 32px">
          ¿Hay estabilidad fisiologica y metabolica?
        </p>
        <div class="q-gutter-md">
          <q-btn
            size="lg"
            class="q-px-xl"
            color="primary"
            :to="{name: routeNames.STEP_3}"
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
