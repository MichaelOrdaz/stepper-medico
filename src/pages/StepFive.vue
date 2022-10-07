<template>
  <q-card dark class="text-center full-height q-py-md">
    <q-card-section>
      <p style="font-size: 32px">
        Extubación
      </p>
      <p style="font-size: 32px">
        Considere el reposo respiratorio: <br />
        Parámetros previos de ventilación por 1 hora
      </p>
    </q-card-section>

    <div class="row">
      <div class="col">
        <q-btn size="lg" class="q-px-xl" color="primary" :to="{name: routeNames.START}">
          Ir al comienzo
        </q-btn>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import routeNames from 'src/router/routeNames';
</script>
