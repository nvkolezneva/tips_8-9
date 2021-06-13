<template>
  <div class="container mt-5">
    <h1>Новый заказ №1234</h1>
  <div class="row">
    <div class="col mt-3">
 <form>
   <h5>Данные отправителя</h5>
      <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Я отправитель</label>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Телефон</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Город</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <h5>Данные отправки</h5>
      
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Дата отправки</label>
    <input type="date" class="form-control">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Время отправки</label>
    <input type="time" class="form-control">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Дата доставки</label>
    <input type="date" class="form-control">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Время доставки</label>
    <input type="time" class="form-control">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Вес документов</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="1 000" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">гр.</span>
</div>
  </div>
</form>    </div>
    <div class="col">
       <form>
   <h5>Данные получателя</h5>
      <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Я получатель</label>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Имя</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Телефон</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Город</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <h5>Комментарий</h5>
      <div class="mb-3">
        <textarea class="form-control"></textarea>
  
  </div>
  <h5>Стоимость:</h5><p>1000 руб.</p>
<Card/>
        <b-button v-b-modal.modal-1 class="btn btn-warning ">Сделать заказ</b-button>
<b-modal id="modal-1" title="Заказ №1234" ok-only>
    <p class="my-4">Ваш заказ успешно оформлен!</p>
  </b-modal>
    
  
</form>
    </div>

  </div>
  <div>
</div>
</div>
 
</template>

<script>
import Card from './Card.vue';
export default {
  name: "NewOrder",
  components:{
Card
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
