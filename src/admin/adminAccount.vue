<template>
   <div class="container mt-5">
   <h1><b>Личный кабинет</b></h1>
    <div class="row">
    <div class="col mt-3">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Расчётный счёт</label>
    <input type="text" class="form-control" value="0000 000000">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Корреспондентский счёт</label>
    <input type="text" class="form-control" value="0000 000000">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">БИК</label>
    <input type="text" class="form-control" value="0000 000000">
  </div>
  <b-button v-b-modal.modal-1 class="btn btn-warning ">Сохранить изменения</b-button>
<b-modal id="modal-1" title = "Ура" ok-only>
    <p class="my-4">Изменения успешно сохранены!</p>
  </b-modal>
    </div>
    <div class="col">
      <h3>Деньги</h3>
        <h5>Необходимо оплатить:</h5><p>10 000 руб.</p>
        <h5>Доступно на счете:</h5><p>100 000 руб.</p>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "adminAccount",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
