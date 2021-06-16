<template>

  <div>
    <div>
  <b-button v-b-modal.modal-1 class="m-2 btn btn-warning">Подписать</b-button>

  <b-modal id="modal-1" hide-footer title="Подтвердите передачу документов отправителем курьеру">
    <section class="modal-card-body">
          <div class="flexxx">
            <canvas style="width: 50%" id="canvas1"></canvas>
            <canvas style="width: 50%" id="canvas2"></canvas>
          </div>
          <div class="flexxx">
            <p >Подпись отправителя</p>

            <p>Подпись курьера</p>
          </div>
          <div class="flexxx">
            <b-button variant="outline-warning" @click="clear(1)">Очистить</b-button>
            <b-button variant="outline-warning" @click="clear(2)">Очистить</b-button>
          </div>
        </section>
          <b-button variant="warning" @click="confirm">Подтвердить</b-button>
  </b-modal>
</div>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
var signaturePad, signaturePad2;
function resizeCanvas(canvas1, canvas2) {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas1.width = canvas1.offsetWidth * ratio;
  canvas1.height = canvas1.offsetHeight * ratio;
  canvas1.getContext("2d").scale(ratio, ratio);
  signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  resizeCanvas2(canvas2);
}
function resizeCanvas2(canvas2) {
  var ratio2 = Math.max(window.devicePixelRatio || 1, 1);
  canvas2.width = canvas2.offsetWidth * ratio2;
  canvas2.height = canvas2.offsetHeight * ratio2;
  canvas2.getContext("2d").scale(ratio2, ratio2);
  signaturePad2.clear(); // otherwise isEmpty() might return incorrect value
}
export default {
  name: "ModalFormSignature",
  methods: {
    confirm() {
      if (!signaturePad.isEmpty() && !signaturePad2.isEmpty()) {
        let code1 = signaturePad.toDataURL();
        let code2 = signaturePad2.toDataURL();
        signaturePad.clear();
        signaturePad2.clear();
        this.$emit("close");
        require("pidcrypt/seedrandom")
  
var pidCrypt = require("pidcrypt")
require("pidcrypt/aes_cbc")

var aes = new pidCrypt.AES.CBC()

var  crypted1 = aes.encryptText(code1, "courier", {nBits: 256});

var  crypted2 = aes.encryptText(code2, "client", {nBits: 256});

console.log("Отправитель: '%s'", crypted1);
console.log("Курьер: '%s'", crypted2);
      }
    },
    clear(id) {
      if (id == 1) signaturePad.clear();
      if (id == 2) signaturePad2.clear();
    }
  },
  mounted() {
    let interval = setInterval(() => {
      var canvas1 = document.querySelector("#canvas1");
      var canvas2 = document.querySelector("#canvas2");
      if (canvas1 != null && canvas2 != null) {
        clearInterval(interval);
        canvas1.style.border = "1px dashed gray ";
        canvas1.style.width = "180px";
        canvas1.style.height = "180px";
        canvas2.style.border = "1px dashed gray";
        canvas2.style.width = "180px";
        canvas2.style.height = "180px";
        signaturePad = new SignaturePad(canvas1);
        signaturePad2 = new SignaturePad(canvas2);
        window.addEventListener("resize", resizeCanvas(canvas1, canvas2));
        resizeCanvas(canvas1, canvas2);
      }
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
.flexxx {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>