<template>
 
   <container>
 <!--- obraz głowny białogóra -->
    <mdb-row>
      <mdb-col md="12">
        <mdb-card reverse>
          <mdb-view hover cascade>
            <img :src="info.post[0].imgfront" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" />
          </mdb-view>
          <mdb-card-body class="text-center cascade">
            <h2 class="font-weight-bold">
              <a>Rekolekcje {{ info.post[0].title }}</a>
            </h2>
           
            <mdb-btn class="btn-fb waves-light">
              <mdb-icon icon="facebook" class="pr-2"/>
              Facebook
            </mdb-btn>
            <mdb-btn class="btn-tw waves-light">
              <mdb-icon icon="twitter" class="pr-2"/>
              Twitter
            </mdb-btn>
            <mdb-btn class="btn-gplus waves-light">
              <mdb-icon icon="google-plus" class="pr-2"/>
              Google
            </mdb-btn>
            <mdb-btn color="default" class="waves-light">
              <mdb-icon icon="comments" class="pr-2"/>
              Comments
            </mdb-btn>
          </mdb-card-body>
        </mdb-card>
       
      </mdb-col>
    </mdb-row>
  </mdb-container>
<!-- end widoku głownego -->
<!-- Podstawowe informacje -->
 
<!-- koniec podstawowych informacji  --> 
<h2 class="h1-responsive font-weight-bold text-center my-5">Z miłością i dla zdrowia</h2>
            <column  class="con" col="12">
             <mdb-row>
              <mdb-col  col="" sm="6" md="6">
                       <p class="mb-0">..Kiedy po raz pierwszy podjęłam post, wytrwałam na diecie 6 tygodni. Moje samopoczucie z każdym dniem stawało się lepsze, zaczęłam znowu dobrze się wysypiać, poczułam przypływ energii, wróciła chęć do pracy, ustąpiły bóle stawów biodrowych. Wtedy rozpoczął się nowy rozdział w moim życiu. Zapragnęłam popularyzować post Daniela jako metodę oczyszczania i odmładzania organizmu w rożnych środowiskach. Powoli zdobywałam wiedzę na ten temat u samej mistrzyni, dr Ewy Dąbrowskiej, która do dziś jest moim jedynym nauczycielem w tej dziedzinie. W przypadku wątpliwości dotyczących leczenia dietą warzywno-owocową zawsze korzystam z jej doświadczenia, porad i podpowiedzi.
Doświadczenie leczenia postem dowodzi, że czasowe powstrzymywanie się od jedzenia przez współczesnego człowieka, który najczęściej przesyca się niezdrową żywnością jest jedynym ratunkiem. Istnieje kilka odmian postu. Pod wpływem okresowego powstrzymywania się od spożywania spontanicznie uruchamia się w organizmie proces tak zwanego oczyszczania wewnętrznego. Jest to samoleczący mechanizm, który prowadzi do przywrócenia zdrowia. Post jest nie tylko bardzo skuteczny, ale również powszechnie dostępnym sposobem leczenia wszelkich chorób
Post jest darem od Boga, który otwiera człowieka na działanie Ducha świętego. Wielkim błogosławieństwem jest móc Was zaprosić do odbycia postu Daniela w murach sanktuarium pasyjno-maryjnego, w Kalwarii Zebrzydowskiej, w terminie od 24 listopada do 4 grudnia.Okres postu można skrócić do 7 dni. Rezerwacje i płatności za udział w poście można zrealizować na tej stronie, którą teraz czytasz: www.postydaniela.pl.</p>
              </mdb-col>
               <column class="" sm="12" md="6">
               <p class="h5">Krystyna Dajka</p>
               <p class="h6">Post to terapia, która 
nie leczy każdej choroby 
z osobna, lecz wszytkie 
razem </p>
<mdb-view class="zoom overlay" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" alt="zoom">
  <mdb-mask flex-center text="Zoom effect" />
</mdb-view>
     </column>
         </mdb-row> 
      </column>
  <!---============================================= end first information =======================================================-->    
    
      <h2 class="h1-responsive font-weight-bold text-center my-5">{{ info.post[0]. titleTwo}} </h2>
       <span class="block-example border-bottom border-dark"></span>
    
    
     <mdb-carousel :interval="8000" showControls showIndicators>
    <mdb-carousel-item v-for="item in info.post[0].slider" img :src="item" mask="black-light" alt="First slide">
      <mdb-carousel-caption title="Light mask" text="First text"></mdb-carousel-caption>
    </mdb-carousel-item>
  </mdb-carousel>
<!-- card -->
<mdb-col md="12">
  <h2 class="h1-responsive font-weight-bold text-center my-5">{{  info.post[0].message }} </h2>
    <h4 class="h5-responsive  text-center my-5"> {{ info.post[0].messageTwo }}  </h4>
  <mdb-row>
      <mdb-col  v-for="item in info.post[0].card" md="4">
        <mdb-card>
            <mdb-card-image :src="item.Imglink" alt="Card image cap"
              waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>{{ item.title  }}</mdb-card-title>
              <mdb-card-text>{{ item.message  }}</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <!-- <mdb-col  md="4">
        <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"
              waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card with waves effect</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
         <mdb-col  md="4">
        <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"
              waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card with waves effect</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>-->
      </mdb-row> 
   </mdb-col>
     
<!-- koniec nowej sekcji -->
    <br>
    <br>
    <br>
       
       
            <column   class="margin" col="12">
            <p class="h1 ">{{ info.post[0].section.title }}</p>
            </column>
            <column   class="margin" col="12">
          <p class="h5"> <strong> </strong></p>
<p  class="h5">Prowadzący:<strong v-for="item in info.post[0].section.prowadzacy">{{item}}  </strong></p>
<p class="h5" >Opieka duchowa: <strong v-for="item in info.post[0].section.opiek">{{ item}}</strong></p>  
            </column>
            <br>
            <br>
<!-- informacja o połorzeniu -->
<mdb-container v-for="item in info.post[0].sectionTwo">
    <mdb-row  >
      <mdb-col lg="5">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" :src="item.imgfutured" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <a class="green-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="cutlery" class="pr-2" />jedzenie</h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>{{ item.title }}</strong>
        </h3>
        <p>{{ item.data }}</p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 19/08/2018</p>
        
      </mdb-col>
     
    </mdb-row> 
    <hr class="my-5" />
</mdb-container>
 <mdb-container v-for="item in info.post[0].place">
    <mdb-row>
      <mdb-col lg="7">
        <a class="pink-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="image" class="pr-2" />Lifestyle
          </h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>{{ item.title }}</strong>
        </h3>
        <p>{{ item.message }}</p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 14/08/2018</p>
       
      </mdb-col>
      <mdb-col lg="5">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid"  :src="item.imgfutured" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
    </mdb-row>
 </mdb-container>
 <mdb-container  v-for="item in info.post[0].lifestyle">
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid"  :src="item.imgfutured" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <a class="indigo-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="suitcase" class="pr-2" />Food</h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>{{ item.title }}</strong>
        </h3>
        <p>{{ item.message }}</p>
        <p>by
          <a>
            <strong>Carine Fox</strong>
          </a>, 11/08/2018</p>
        
      </mdb-col>
    </mdb-row>
  </mdb-container>
<!-- informacja o połorzeniu -->
            <br>
            <br>
 <column   class="margin" col="12">
        <h1><strong> Nasza Oferta </strong></h1>
            </column>
            <row>

     </row>
     <column  class="top" col="12">
  <p class="h6 fonts-size margin">Ceny na Post Ojców Pustyni <b v-for="item in info.post[0].termins">{{ item.time }} </b></p><br> 

   </column> 
        <row>
            <column v-for="(item , key) in info.post[0].rooms[0].prise"  class="#" lg="4" col="12">
                           <table class="table">
                                        <thead class="thead-dark">
                                          <tr>
                                              <th>{{ item.dni }}</th>
                                              <th></th>
                                              <th></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr v-for="(items,index , keyi) in info.post[0].rooms" >
                                            <th scope="row">{{ index+1 }}</th>
                                            <td>{{ items.rodzaj}}</td>
                                            <td>{{  items.prise[key].prise }}  </td>
                                          </tr>
                                        </tbody>
                                      </table>                                       
                                 </column>
                            </row>
            
                  <column   class="#"  col="12">
                  <row>
   
                  </row>
             </column>
<!-- form -->
      <br>
      <br>
      <br>
       
<form>
  <p class="h4 text-center display-4 mb-4">Zarezerwoj pobyt</p>
 <row>
  <column class="wybor" sm="12" md="4">
  <!-- Default input subject -->
  <label for="" class="grey-text">Wybierz turnus</label>
 <select class="browser-default border-select  custom-select" @change="selectday"   v-model="data" >
  <option v-for="item in info.post[0].termins">{{ item.time }}</option>
 
</select>
</column>
<column class="wybor" sm="12" md="4">
  <!-- Default input subject -->
  <label for="" class="grey-text">Wybierz turnus</label>
 <select class="browser-default border-select  custom-select" @change="prise"  v-model="countday" >
  <option v-for="item in day.chooseDay" >{{ item }}</option>
</select>
</column>
<column  class="wybor" sm="12" md="4">
  <!-- Default input subject -->
  <label  for="" class="grey-text">Wybierz turnus</label>
 <select :disabled="!view" v-model="room"  @change="prise"  class="browser-default border-select  custom-select">
 <option v-for="item in info.post[0].rooms" >{{ item.rodzaj }} </option>
</select>
</column>
  <column sm="12" md="6">
  <row>
<column class="#" sm="12" md="6">
  <!-- Default input name -->
  <label for="defaultFormContactNameEx" class="grey-text border-select ">imie</label>
  <input type="text" id="defaultFormContactNameEx" class="form-control">
</column>
  
<column class="#" sm="12" md="6">
  <!-- Default input email -->
  <label for="defaultFormContactEmailEx" class="grey-text">email</label>
  <input type="email"  id="defaultFormContactEmailEx" class="form-control border-select ">
</column>

<column class="#" sm="12" md="6">
  <!-- Default input subject -->
  <label for="defaultFormContactSubjectEx" class="grey-text">telefon</label>
  <input type="text" id="defaultFormContactSubjectEx" class="form-control border-select ">
</column>



<column class="#"sm="12" md="6">
   <label for="" class="grey-text">liczba osób towarzyszących </label>
 <select  @change="countPeople" v-model="people" class="browser-default custom-select border-select ">
  <option :value="0">0</option>
  <option :value="1">1</option>
  <option :value="2">2</option>
  <option :value="3" >3</option>
  <option :value="4">4</option>
</select>
</column>
<column class="#" col="12">
  <div class="alert  alert-auto" role="alert">
   Proszę podać imię i nazwisko osoby towarzyszącej
   <li class="people" v-for="item in people">
   <input v-if="!people == 0" type="text"    v-model="app[item-1]"   class="form-control border-select" />

   </li>
</div>
</column>
<column class="#" col="12">
 <p>Wybierz sposób płatność </p>
</column>
<column class="#" sm="12" md="6">
  <div class="alert p-style alert-auto container-radio"  role="alert">
     <label for="odpowiedz">
<input id="odpowiedz" type="radio"  v-model="option" class="check-box" name="vehicle1" value="fullpay">Pełna wpłata <br>
    </label>
<p class="h5 p-style"> Cena całkowita {{ cenakoncowa}}zł </p>

</div>
</column>
<column class="#" sm="12" md="6">
  <div class="alert p-style alert-auto   container-radio" role="alert">
    <label for="odpowiedz">
<input id="odpowiedz" type="radio" class="check-box " v-model="option" name="vehicle1" value="litlepay"> czesciowa wpłata 
    </label>
<p class="h5 p-style"> zadatek {{ cenakoncowa/3 }} zł </p>


</div>
</column>
</row>
  </column>
  
  <column  sm="12" md="6" >
  <row>
  
<column sm="12" md="6">
 <button class="btn btn-outline-info"  ><div class="">
 <i class="fa fa-paypal icon-size p-style"  @click="methodPay(true)" style="color:blue" aria-hidden="true"></i>
 
 <column sm="12" md="12">
 Przelwe tradycyjny
 </column>
 </div></button>
 </column>
 <column sm="12" md="6">
   <button class="btn btn-outline-success"><div class="">
<i class="fa fa-money icon-size p-style"  @click="methodPay(false)" style="color:green " aria-hidden="true"></i>
 
   <column col="12">
 Przelwe tradycyjny
 </column>
   </div></button>
 </column>
 
<column col="12">
 <input type="checkbox" name="vehicle1" @click="allcheckclick"  v-model="allcheck"  value="Bike">Zaznacz wszystko <br>
<div class="border-check"> </div>
<div class="border-lol">
  <div v-for="item in checkbox " >
 <input  type="checkbox"  name="vehicle1" v-model="item.check"  value="Bike"><div class="info-H">{{ item.title }}</div><br>
 </div>
</div>
 <p class="size-info"> Administratorem Pani/Pana danych będzie 4biznes.eu z siedzibą w Pelplinie, ul. Sambora 17. Dane przekazane nam w formularzu będą przetwarzane w celach marketingowych i handlowych Przysługuje Pani/Panu prawo dostępu do treści swoich danych, ich sprostowania, zgłoszenia sprzeciwu, żądania ograniczenia ich przetwarzania, w każdym momencie prawo do wycofania udzielonych zgód, a także prawo żądania usunięcia przetwarzanych danych</p>
</column>
  </row>
</column>
     </row>
     
  <!-- Default textarea message -->
  <!-- <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
  <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3"></textarea> -->

  <div class="text-center mt-4">
      <button class="btn btn-outline-warning" type="submit">Send<i class="fa fa-paper-plane-o ml-2"></i></button>
  </div>
</form>
     <!--end-form -->
  </br>
  </br>
  </br>   
  <p class="h4 text-center display-4 mb-4">Świadectwa</p>
  <p class="h4 text-center display-5 mb-4">Anna, 41 lat z Lublina.</p>
       <p> Uczestniczyłam w Poście Ojców Pustynie w Gryżynie, rozpoczynając post jeszcze w domu przed przyjazdem na turnus, tak aby w sumie było 6 tygodni. Wcześniej w Wielkim Poście podjęłam dietę dr E. Dąbrowskiej (post Daniela) z o. A. Szustakiem (na Youtube) i też pociągnęłam 6 tygodni . 
W sumie straciłam 16 kg (+ ok. 6 kg rok wcześniej, stosując inną dietę).
Przy pierwszym poście oprócz utraty wagi - zauważalna poprawa samopoczucia, jasności umysłu, a także obniżenie dawki leków w związku z obniżeniem wyniku TSH we krwi (od wielu lat choroba Hashimoto).
Przy drugim poście - dalsza utrata wagi, ale refleksja, że dwie 6-tygodniowe głodówki w tak krótkim odstępie czasu to za dużo - były pewne oznaki zmęczenia organizmu, brak energii, jasności umysłu. Natomiast bezcenne było doświadczenie postu w połączeniu z rekolekcjami i wykładami (Post Ojców Pustyni) - jedno nadawało sens drugiemu.</p>

<column col="12" style="margin:auto;">
<figure class="figure">
  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" class="figure-img img-fluid z-depth-1"
    alt="..." style="width: 350px">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
<figure class="figure">
  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" class="figure-img img-fluid z-depth-1"
    alt="..." style="width: 350px">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
<figure class="figure">
  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" class="figure-img img-fluid z-depth-1"
    alt="..." style="width: 350px">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
</column>
{{info}}

</container>
    </template>

<script>
const header = { Authorization: 'Bearer' + localStorage.getItem('token')};
console.log(header);
import { Container, Column, Row, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, EdgeHeader, CardBody,mdbBtnFixed, mdbBtnFixedItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavItem, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText,mdbTbl, mdbTblHead, mdbTblBody,mdbMask, mdbView } from 'mdbvue';
import axios from 'axios';
export default {
  name: 'post',
  data() {
    return {
      imgs: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
      ],
      checkbox:[
        {
          check : false,
          title : 'Zgadzam się na otrzymywanie informacji handlowych i marketingowych drogą elektroniczną – (email/sms/mms).'
        },
        {
          check : false,
          title : 'Zgadzam się na kontakty telefoniczne.'  
        },
        {
          check : false,
          title : 'Znam i akceptuję Regulamin serwisu'
        }
      ],
      allcheck : false,
      visible: false,
      view :false,
      index: 0,
      data : '',
      day : [],
      app:[],
      room : '',
      cena : 0,
      cenakoncowa : 0,
      people : "",
      partner : 0,
      countday:'',
      info:[],
      option: '',
      optionPay :false
    };
  },
  mounted() {
    this.getPost();

  },
  watch : {
    '$route'(to,from){
      this.getPost();
    },
  },
  methods: {
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    getPost(){
      axios.get('http://localhost:3000/postText/'+this.$route.params.slug,{ 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') }})
        .then(response => {
          this.info = response.data;})
        .catch(function (error){
          console.log(error);});
      
    },
    selectday(){
      this.day=this.info.post[0].termins.find(value => value.time==this.data);
      this.view = true;
      this.prise();
    },
    countPeople(){
      this.people =  this.people;
      this.showPrise();
      this.app.splice(this.people);
    },
    prise(){
      this.cena =this.info.post[0].rooms.find(value => value.rodzaj==this.room);
      this.cena =this.cena.prise;
      this.cena = this.cena.find(value => value.dni==this.countday);
      this.cena = this.cena.prise;
      this.cena = this.cena.replace("zł","");
      this.showPrise();
    },
    showPrise(){
      this.cena= Number(this.cena);
      this.cena = this.cena;
      this.partner = this.cena*this.people;
      this.cenakoncowa = this.cena+this.partner;
    },
    methodPay(pay){
      this.optionPay = pay;
    },
    allcheckclick(){
      for (let i=0;i<= this.checkbox.length-1;i++)
        if (this.checkbox[i].check == false)
          this.checkbox[i].check = true;
        else
          this.checkbox[i].check = false;
    }
  },
  components: {
    Container,
    Column,
    Row,
    Fa,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    EdgeHeader,
    CardBody,
    mdbBtnFixed,
    mdbBtnFixedItem,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbLightbox,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbCard,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbNavItem,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbMask,
    mdbView,
    axios
   
  }
  
};
</script>
<style scoped>
.con{
display: flex;
align-items: center;
justify-content: center;

}
.size-img{

width :100vw;

}
.margin{
text-align: center;
padding-left:10%;
padding-right: 10%;
}
.top{

margin-top:0px;
padding-top:0px;
margin-bottom: 2px;
padding-bottom: 0px;  
}

.fonts-size{

font-size:1.5rem;
padding: 10px;
}
.alert-auto{

margin-top:10px;
margin-bottom: 10px;
border: 3px  dashed rgb(190, 183, 183);

}

.p-style{

text-align: center;

}
.icon-size{

font-size:5rem;

}
.border-pay{

text-align: center;
justify-content: center;
align-items: center;
border : 5px solid rgba(226, 221, 221, 0.747);
padding: 10px;
margin-top:10px;
margin-bottom: 10px;
}

.border-check{

border : 2px  dashed rgba(128, 128, 128, 0.384);

}

.size-info{

font-size: 0.8rem;

}
.border-box{

font-size: 1rem;

}
.border-select{

border-radius:0px;

}


.border-lol p{

font-size: 0.7rem;
margin: 0;
}

.wybor{

background-color: rgb(226, 217, 217);
padding: 10px;
color:black;
}

.grey-text{

color:black !important;
font-weight: 500;
}
.info-H{
display:inline-block;
font-size:0.64rem;

}
.people{

text-decoration: none;
list-style-type: none;

}

</style>

