<template>
  
   <div class="container mt-5">
    <div class="row">
      <div class="col-md-10">
<h1>Заказы</h1>
      </div>
    </div>
    <div class="row mt-5">
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2"><b>Район:</b></label><br>
      <select class="form-select" aria-label="Default select example">
  <option selected>Ивановский</option>
  <option value="1">...</option>
  <option value="2">...</option>
  <option value="3">...</option>
</select>
    </div>
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2"><b>Дата отправки:</b></label><br>
      <label for="exampleInputEmail1" class="form-label">от:</label>
      <input type="date" class="form-control">
       <label for="exampleInputEmail1" class="form-label mr-2">до:</label>
      <input type="date" class="form-control">
    </div>
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2"><b>Дата доставки:</b></label><br>
       <label for="exampleInputEmail1" class="form-label">от:</label>
      <input type="date" class="form-control">
      <label for="exampleInputEmail1" class="form-label mr-2">до:</label>
      <input type="date" class="form-control">
    </div>
  </div>
  <div class="card mt-5">
    
  <h5 class="card-header">Заказ №125</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-md-10">
<p class="card-text">Стоимость: <span class="text-warning">1 000 руб.</span></p>
    <p class="card-text">Дата отправки:<span class="text-warning">30.05.2021</span></p>
     <p class="card-text">Дата доставки:<span class="text-warning">30.05.2021</span></p>
    <p class="card-text">Вес:<span class="text-warning">100 гр.</span></p>
    <p class="card-text">Адрес:<span class="text-warning">Москва</span></p>
      </div>
      <div class="col-6 col-md-2">
       <b-button v-b-modal.modal-1 class="btn btn-warning ">Принять заказ</b-button>
<b-modal id="modal-1" title="Заказ №1234" ok-only>
    <p class="my-4">Заказ успешно принят!</p>
  </b-modal>
      </div></div>
    
    
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "acceptOrders",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
