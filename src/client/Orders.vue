<template>
  
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10">
<h1>Заказы</h1>
      </div>
   
      <div class="col-6 col-md-2">
        <router-link to="/new-order" class="btn btn-warning">Новый заказ</router-link>
        <!-- <button type="button" class="btn btn-warning">Новый заказ</button> -->
      </div>
    </div>
    <div class="row mt-5">
    <div class="col-sm">
      <label for="exampleInputEmail1" class="form-label mr-2">Статус:</label><br>
      <select class="form-select" aria-label="Default select example">
  <option selected>В процессе</option>
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
    
  <h5 class="card-header">Заказ №125</h5>
  <div class="card-body">
    <div class="row">
      <div class="col-md-10">
<p class="card-text">Курьер: <span class="text-warning">Иван Иванов</span></p>
    <p class="card-text">Дата:<span class="text-warning">30.05.2021</span></p>
    <p class="card-text">Вес:<span class="text-warning">100 гр.</span></p>
    <p class="card-text">Адрес:<span class="text-warning">Москва</span></p>
      </div>
      <div class="col-6 col-md-2">
       <div class="btn-group">
  <button type="button" class="btn btn-outline-warning">В процессе</button>
  <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      </div></div>
    
    
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
