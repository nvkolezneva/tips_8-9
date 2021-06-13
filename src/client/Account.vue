<template>
  
  <div class="container mt-5">
   <h1>Личный кабинет</h1>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>
    <input type="text" class="form-control" value="Надежда" >
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="nvkolezneva@gmail.com" disabled>
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
    <label for="exampleInputEmail1" class="form-label">Адрес</label>
    <input type="text" class="form-control" value="13-я Парковая, д.31, к.3, кв.14">
  </div>
  <b-button v-b-modal.modal-1 class="btn btn-warning ">Сохранить изменения</b-button>
<b-modal id="modal-1" title = "Ура" ok-only>
    <p class="my-4">Изменения успешно сохранены!</p>
  </b-modal>
    
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
