<template>
  <q-card dark class="q-pa-md full-height">
    <div class="row full-height justify-center items-center">
      <div class="col text-center">
        <p style="font-size: 32px; font-weight: bold;" class="text-positive">
          Extubación
        </p>
        <p style="font-size: 32px">
          Considere el reposo respiratorio: <br />
          Parámetros previos de ventilación por 1 hora
        </p>
        <div class="q-gutter-md">
          <q-btn
            size="lg"
            class="q-px-xl"
            color="primary"
            :to="{name: routeNames.START}"
          >
            Ir al comienzo
          </q-btn>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import routeNames from 'src/router/routeNames';
</script>
