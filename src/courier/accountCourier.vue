<template>
  
  <div class="container mt-5">
   <h1><b>Личный кабинет</b></h1>
    <div class="row">
    <div class="col mt-3">
      <h3>Персональные данные</h3>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>
    <input type="text" class="form-control" value="Иван" >
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="courier@gmail.com" disabled>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Телефон</label>
    <input type="text" class="form-control" value="+7 904 475 75 69">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Город</label>
    <input type="text" class="form-control" value="Москва">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес регистрации</label>
    <input type="text" class="form-control" value="13-я Парковая, д.31, к.3, кв.14">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Номер паспорта</label>
    <input type="text" class="form-control" value="0000 000000" disabled>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Номер банковской карты</label>
    <input type="text" class="form-control" value="0000 000000">
  </div>
  <b-button v-b-modal.modal-1 class="btn btn-warning ">Сохранить изменения</b-button>
<b-modal id="modal-1" title = "Ура" ok-only>
    <p class="my-4">Изменения успешно сохранены!</p>
  </b-modal>
    </div>
    <div class="col">
      <h3>Заработаная плата</h3>
        <h5>Получено:</h5><p>10 000 руб.</p>
        <h5>Будет получено:</h5><p>1000 руб.</p>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "accountCourier",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
