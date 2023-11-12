<template>
    <!-- JQUERY STEP -->

    <div class="container-fluid  mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <div class="card">
                    <h2>Randevu ekle (Doktor Paneli)</h2>
                    <form class="form-card" onsubmit="event.preventDefault()">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">First name<span class="text-danger"> *</span></label>
                                <input type="text" id="fname" v-model="firstname" placeholder="Enter your first name"
                                    onblur="validate(1)"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last
                                    name<span class="text-danger"> *</span></label> <input type="text" id="lname"
                                    v-model="lastname" placeholder="Enter your last name" onblur="validate(2)"> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Business email<span class="text-danger">
                                        *</span></label> <input type="text" id="email" v-model="email" placeholder=""
                                    onblur="validate(3)"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label>
                                <input type="text" id="mob" v-model="phone" placeholder="" onblur="validate(4)"> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Date<span class="text-danger"> *</span></label> <input
                                    type="date" v-model="date" placeholder=""> </div>
                        </div>

                        <div class="row mt-3" style="background: white;">
                            <div class="col-md-3">
                                <ul>
                                    <li class="select-time"><input type="radio" class="mr-2">10:00-11:00</li>
                                    <li class="select-time"><input type="radio" class="mr-2">11:00-12:00</li>
                                    <li class="select-time"><input type="radio" class="mr-2">12:00-13:00</li>
                                    <li class="select-time"><input type="radio" class="mr-2">14:00-15:00</li>
                                    <li class="select-time"><input type="radio" class="mr-2">15:00-16:00</li>
                                    <li class="select-time"><input type="radio" class="mr-2">16:00-17:00</li>
                                </ul>
                            </div>
                            <div class="row mt-3" style="background: white;"></div>
                            <div class="row mt-3" style="background: white;">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" v-model="text" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3 ">
                            <div class="form-group col-sm-6"> <button @click="store" class="btn btn-primary form-control">Randevu Oluştur</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Merhaba, Vue.js!',
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            text:'',
            date:''
        };
    },
  created() {
    // Bugünün tarihini al
    const bugun = new Date();

    // Tarihi ISO formatına dönüştür
    const isoTarih = bugun.toISOString().split('T')[0];

    // Vue veri özelliğini güncelle
    this.date = isoTarih;
  },
    methods: {
        store() {
            alert(this.firstname);
        }
    }
};
</script>

<style >li {
    list-style-type: none;
    margin-left: -50px;
}

/* Bileşen özgü CSS kuralları */
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-image: url("https://i.imgur.com/GMmCQHC.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}

.card {
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2)
}

.blue-text {
    color: #00BCD4
}

.form-control-label {
    margin-bottom: 0
}

input,
textarea,
button {
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00BCD4;
    outline-width: 0;
    font-weight: 400
}

.btn-block {
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    height: 43px;
    cursor: pointer
}

.btn-block:hover {
    color: #fff !important
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}</style>
