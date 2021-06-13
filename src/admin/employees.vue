<template>
  
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10">
<h1>Работники</h1>
      </div>
    </div>
    <div class="row mt-5">
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2">Статус:</label><br>
      <select class="form-select" aria-label="Default select example">
  <option selected>Не оплачено</option>
  <option value="1">...</option>
  <option value="2">...</option>
  <option value="3">...</option>
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
    
  <h5 class="card-header">Иванов Иван</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-md-10">
<p class="card-text">Сумма: <span class="text-warning">5 000 руб.</span></p>
    <p class="card-text">Дата последней оплаты:<span class="text-warning">30.05.2021</span></p>
    <p class="card-text">Номер карты:<span class="text-warning">0000 000000</span></p>
      </div>
      <div class="col-6 col-md-2">
       <b-button v-b-modal.modal-1 class="btn btn-warning ">Оплатить</b-button>
<b-modal id="modal-1" title="Иванов Иван" ok-only>
    <p class="my-4">Оплачено!</p>
  </b-modal>
      </div></div>
    
    
  </div>
</div>
  
  </div>
</template>

<script>
export default {
  name: "Employees",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
