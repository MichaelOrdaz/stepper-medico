<template>
  <div class="row">
    <div
      class="col text-center text-white"
    >
      <h6
        class="q-ma-sm"
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
    <div class="col-auto">
      <q-img
        src="logo.jpg"
        style="width: 150px"
      />
    </div>
  </div>

  <div class="q-mx-xl q-mb-lg">
    <div class="row">
      <div class="col">
        <q-card dark class="text-center">
          <q-card-section>
            <h3 style="font-size: 32px" class="q-my-none">PROTOCOLO</h3>
            <h1 style="font-size: 36px" class="text-weight-bold q-my-none">
              Retiro de la ventilacion mecánica en el paciente neurocrítico
            </h1>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

  <div class="q-mx-xl">
    <div class="row q-col-gutter-lg">
      <div class="col col-sm-8">
        <router-view />
      </div>

      <div class="col col-sm-4">
        <q-card dark>
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

  <div class="q-mb-xl"></div>
</template>
