<template>
  
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10">
<h1>Заказы</h1>
      </div>
   
      <div class="col-6 col-md-2">
        <router-link to="/accept-orders" class="btn btn-warning">Принять заказ</router-link>
        <!-- <button type="button" class="btn btn-warning">Новый заказ</button> -->
      </div>
    </div>
    <div class="row mt-5">
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2">Статус:</label><br>
      <select class="form-select" aria-label="Default select example">
  <option selected>Принят от отправителя</option>
  <option value="1">В пути</option>
  <option value="2">Принят получателем</option>
</select>
    </div>
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label">от:</label>
      <input type="date" class="form-control">
    </div>
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2">до:</label>
      <input type="date" class="form-control">
    </div>
  </div>
  <div class="card mt-5">
    
  <h5 class="card-header">Заказ №125</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-md-10">
<p class="card-text">Заказчик: <span class="text-warning">Иван Иванов</span></p>
    <p class="card-text">Дата:<span class="text-warning">30.05.2021</span></p>
    <p class="card-text">Вес:<span class="text-warning">100 гр.</span></p>
    <p class="card-text">Адрес:<span class="text-warning">Москва</span></p>
      </div>
      <div class="col-6 col-md-2">
       <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3 form-select"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
      </div></div>
    
    
  </div>
  <modal-form-signature v-if="selected == 'A'"/>
  <modal-form-signature-end v-if="selected == 'C'"/>
</div>

  </div>
</template>

<script>
import ModalFormSignature from './ModalFormSignature.vue';
import ModalFormSignatureEnd from './ModalFormSignatureEnd.vue';
export default {
  components: { ModalFormSignature, ModalFormSignatureEnd },
  name: "hisOrders",
  data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Принят от отправителя' },
          { item: 'B', name: 'В пути' },
          { item: 'C', name: 'Принят получателем'},
        ]
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
