<template>
  <div class="row q-mb-md">
    <div
      class="col-12 col-sm text-center text-white order-xs-last"
    >
      <h6
        class="q-ma-sm micolor"
      >
        Servicios de Salud del Estado de Puebla
        <br/>
        Hospital de Traumatología y Ortopedia
        <br/>
        “Dr. y Gral. Rafael Moreno Valle”
        <br/>
        Terapia Intensiva
      </h6>
    </div>
    <div class="col-sm-auto col-12 q-mb-sm">
      <q-img
        src="logo.jpg"
        style="width: 150px"
      />
    </div>
  </div>

  <div style="width: 100%; max-width: 1320px; margin: 0 auto;">
    <div class="q-mx-sm q-my-sm">
      <div class="row">
        <div class="col">
          <q-card class="text-center text-white bg-red-10">
            <q-card-section>
              <span style="font-size: 32px" class="text-yellow">PROTOCOLO</span> <br />
              <span style="font-size: 36px" class="text-weight-bold">
                Retiro de la ventilacion mecánica en el paciente neurocrítico
              </span>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="row q-mx-sm q-my-sm" v-if="$route.name !== 'start'">
      <q-btn
        icon="home"
        color="black"
        class="q-mr-sm"
        :to="{name: routeNames.START}"
      />
      <q-btn icon="arrow_back" color="black" @click="$router.back()" />
    </div>

    <div class="q-mx-sm">
      <div class="row q-col-gutter-lg" style="min-height: 400px">
        <div class="col-12 col-sm-7 col-md-8">
          <router-view />
        </div>

        <div class="col-12 col-sm-5 col-md-4" v-if="$route.name === 'start'">
          <q-card class="bg-grey-9 text-white">
            <q-card-section>
              <p
                style="font-size: 32px"
                class="q-my-none text-text-weight-bold text-center">
                Políticas
              </p>
              <ul style="list-style: decimal; font-size: 24px;">
                <li>Se limitará el uso de Pieza en T.</li>
                <li>Las PVE no durarán más de 30.</li>
                <li>Las PVE se realizarán con PS 7 cmH2O</li>
                <li>Se favorecerá el reposo respiratorio.</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>

  <div class="q-mb-xl"></div>
</template>
<script setup>
import routeNames from 'src/router/routeNames';
</script>
<style lang="scss" scoped>
@media (max-width: $breakpoint-xs) {
  .order-xs-last {
    order: 1;
  }
}
</style>
