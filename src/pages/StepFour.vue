<template>
  <q-card dark class="q-pa-md full-height">
    <div class="row full-height justify-center items-center">
      <div class="col text-center">
        <p style="font-size: 32px">
          ¿Prueba de ventilación espontanea exitosa?
        </p>
        <div style="font-size: 30px" class="text-left">
          Mida a todos los pacientes <span class="text-red">F/Vt  debe ser &lt; 105*</span><br />
          Considere medir según sea necesario: <br />
          <ul>
            <li><a href="javascript://" class="link" @click="testDeFuga = true">Test de fuga</a> (VM > 6 días)</li>
            <li>Pimax > 20 cmH2O</li>
            <li>P01 &lt; -4 cmH2O</li>
            <li>
              <a href="javascript://" class="link" @click="diafragmatico = true">Fracción de acortamiento diafragmático</a>
              > 28%</li>
            <li>
              <a href="javascript://" class="link" @click="excursion = true">Excursión diafragmática</a>
              > 26 mm
            </li>
          </ul>
        </div>
        <div class="q-gutter-md">
          <q-btn
            size="lg"
            class="q-px-xl"
            color="primary"
            :to="{name: routeNames.STEP_5}"
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

  <q-dialog v-model="testDeFuga">
    <q-card style="width: 800px; max-width: 80vw; font-size: 18px" class="bg-grey-8 text-white">
      <q-btn flat icon="close" color="white" v-close-popup />
      <q-card-section>
        <div class="text-h6">PROCEDIMIENTO</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <ul>
          <li>Aspire las secreciones de la cavidad oral.</li>
          <li>Programe el ventilador en VC CMV. (Asisto-control por volumen)</li>
          <li>Con el globo inflado registre en VTI y el VTE y corrobore que sean similares.</li>
          <li>DESINFLE EL GLOBO DEL TUBO ENDOTRAQUEAL.</li>
          <li>Registre el volumen corriente espiratorio durante
          los próximos seis ciclos para que el VTE alcance un valor meseta.</li>
          <li>Registre el promedio de los 3 más bajos.</li>
        </ul>

        <div class="text-red-5 text-bold text-center">
          VOLUMEN DE FUGA  =   VTI (inflado) – VTE (desinflado)
        </div>
      </q-card-section>

      <q-img src="fuga.png" class="q-mx-auto" style="max-width: 90%; display: block" />

      <q-card-actions align="right">
        <q-btn flat label="Cerrar" color="white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="diafragmatico">
    <q-card style="width: 800px; max-width: 80vw; font-size: 18px" class="bg-grey-8 text-white">
      <q-btn flat icon="close" color="white" v-close-popup />
      <q-card-section>
        <div class="text-h6">Fracción de acortamiento diafragmático</div>
      </q-card-section>
      <q-img
        src="acortamiento-diafragmatico.png"
        class="q-mx-auto"
        style="max-width: 90%; display: block"
      />

      <q-card-actions align="right">
        <q-btn flat label="Cerrar" color="white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="excursion">
    <q-card style="width: 800px; max-width: 80vw; font-size: 18px" class="bg-grey-8 text-white">
      <q-btn flat icon="close" color="white" v-close-popup />
      <q-card-section>
        <div class="text-h6">Excursión diafragmática</div>
      </q-card-section>
      <q-img
        src="excursion-diafragmatica.png"
        class="q-mx-auto"
        style="max-width: 90%; display: block"
      />

      <q-card-actions align="right">
        <q-btn flat label="Cerrar" color="white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import routeNames from 'src/router/routeNames';
import { ref } from 'vue';

const testDeFuga = ref(false);
const diafragmatico = ref(false);
const excursion = ref(false);

</script>
<style scoped>
  .link {
    color: white;
  }
</style>
