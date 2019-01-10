<template>
<container class="color-bgfull">
    <column col="12">
    <p class="h2"style="justify-contnet:center;">Stwórz strone reklamujacą rekolekcje </p>
    </column>
    <column>
    <form   enctype="multipart/form-data" @submit.prevent="formvalid">
    <column class="cardrooms">
   <input type="text" class="form-control input-control" disabled v-model="slug" name="filed" v-validate="'required|max:130|alpha'" id="exampleFormControlInput1" placeholder="np: białogóra">
    <p> <span  class="red-text" v-for="errors in errors.collect('filed')">{{ errors }}</span> </p>
     <p> <span  class="red-text" v-show="checkValidServer.isstSlug== true">SERVER ! :dany rekort juz istnieje sprobuj iną specjalną nazwe</span> </p>

    <label for="title">Jak ma sie nazywać towoja podstrona</label>
   <input type="text" v-model="title" name="titleOne" v-validate="'required|max:130|alpha'"  class="form-control input-control" id="exampleFormControlInput1" placeholder="Tytuł">
   <p> <span  class="red-text" v-for="errors in errors.collect('titleOne')">{{ errors }}</span> </p>
   <!-- ===============   fileimage       =============-->
    <label for="title">Zdjecie</label>
     <div style="position:relative;">  
            <input type="file" @change="ImageFront" v-validate="'required|dimensions:290,174'" name="size_field" class="form-control-file fileStyle" id="exampleFormControlFile1">
                 <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
        <input type="text" style="border:0;" :value="showImagesFront"/> 
     </div>   
      <p> <span  class="red-text" v-for="errors in errors.collect('size_field')">{{ errors }}</span> </p>
    <hr class="my-5" />
      <p class="h5"> </p>
         <label for="title">Informacje o ośrodku</label>
        <input type="text" v-model="titleTwo"  name="title" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Tytuł">
      <p> <span  class="red-text" v-for="errors in errors.collect('title')">{{ errors }}</span> </p>
    <label for="title">Slader</label>
   
            <!-- =================   fileimage   =================-->
  <div style="position:relative;">
    <input type="file" name="size_field2"  ref="file" v-validate="'size:400'" class="form-control-file hhhuu fileStyle" @change="fileimage" id="exampleFormControlFile1" accept=".jpg, .png, .jpeg"  multiple/>
      <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
      <input type="text" style="border:0;" :value="showImageslider"/>
  </div>
     <p> <span  class="red-text" v-for="errors in errors.collect('size_field2')">{{ errors }}</span> </p>
             <!-- ================   fileimage    ==================--> 
    <column col="12">
      <img v-for="item in preslider" :src="preslider" height="25" width="25"/>
    </column>
    <textarea v-model="message" placeholder="Opis" name="filed1" v-validate="'required|max:130'" class="form-control-file input-control" id="exampleFormControlFile1"></textarea>
    <p> <span  class="red-text" v-for="errors in errors.collect('filed1')">{{ errors }}</span> </p>
    <textarea v-model="messageTwo" name="filed2" placeholder="opis" v-validate="'required|max:130'" class="form-control-file input-control" id="exampleFormControlFile1"></textarea>
      <p> <span  class="red-text" v-for="errors in errors.collect('filed2')">{{ errors }}</span> </p>
         <hr class="my-5" />
         </column>
         <label for="title">Termin </label>
         <column class="cardrooms" v-for="(item,key) in termins">
         <button @click.stop.prevent="addTermin(key)" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj termin</button>
         <button v-show="key > 0" @click.stop.prevent="RemoveTermin(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button>
          
    <input type="text" name="filed3" v-validate="'required|max:130'" class="form-control input-control" v-model="item.time" id="exampleFormControlInput1" placeholder="np: 27.05.20r do 1.06.20r">
     <p> <span  class="red-text" v-for="errors in errors.collect('filed3')">{{ errors }}</span> </p> 
  <label for="title">Ilość dni w których bedzie sie odbywać <button @click.stop.prevent="addChoose(key,item.chooseDay)" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i></button></label>
    <column v-for="(lol,l) in termins[key].chooseDay">
     <button v-show="l > 0" @click.stop.prevent="RemoveTerminDay(key,l)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button>
   <select  class="form-control input-control" id="exampleFormControlInput1" v-model="termins[key].chooseDay[l]"   placeholder="Tytuł">
       <option >7Dnowy</option>
        <option>10Dniowe</option>
         <option>14Dniowe</option>
   </select> 
   <br>
    </column>
     <hr class="my-5" />
         </column>
      <hr class="my-5" />
        
      <!--=============================== Start =======================================================================-->
        <column col="12"> 
        <row>
     <column class="cardrooms" v-for="(item,key) in card" col="12" md="3" sm="6">  
     <p class="h5"><i class="fa fa-hand-peace-o" aria-hidden="true"></i>  Karta </p> 
        <hr class="my-5" />
         <!-- ===============   fileimage       =============-->
   <div style="position:relative">      
     <input type="file" v-validate="'required|dimensions:936,704'"  :name="'file_size_card'+key" :disabled="viusallyCard" @change="Imagecard" :number="key" class="form-control-file fileStyle"  id="exampleFormControlFile1">
     <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
     <input type="text" style="border:0;" :value="showImagesCard[key]"/> 
   </div>    
     <p> <span  class="red-text" v-for="errors in errors.collect('file_size_card'+key)">{{ errors }}</span> </p>
        <!-- ===============   fileimage       =============-->
    <input type="text" class="form-control input-control"  :name="'pole'+key" v-validate="'required|max:130'" v-model="item.title" id="exampleFormControlInput1" placeholder="Tytuł">
          <p> <span  class="red-text" v-for="errors in errors.collect('pole'+key)">{{ errors }}</span> </p> 
    <textarea class="form-control-file input-control" placeholder="Opis"  :name="'textarea'+key" v-validate="'required|max:130'" v-model="item.message" id="exampleFormControlFile1"></textarea> 
          <p> <span  class="red-text" v-for="errors in errors.collect('textarea'+key)">{{ errors }}</span> </p>  
       </column>  
        </row> 
        </column>
              <!--================================================= krótka wiadomość ======================================-->
         <hr class="my-5" />
         <p class="h5"> krótkie informaje</p>
         <column class="cardrooms">
             <input type="text" v-model="section.title" class="form-control input-control" name="filed6" v-validate="'required|max:130'" id="exampleFormControlInput1" placeholder="Rekolekcje z postem Daniela (dieta warzywno-owocowa)">
        <p><span  class="red-text" v-for="errors in errors.collect('filed6')">{{ errors }}</span> </p> 
        
    <column  col="12">
        <row>
            <column   col="12" md="4" sm="6">
            <row>
              
                <label for="title">Prowadzacy</label> <button @click.stop.prevent="AddLider" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj</button>
                <p v-for="(item,key) in section.prowadzacy">
                <input style="width:80%; float:left;"  :name="'lider'+key" v-validate="'required|max:130'" type="text" class="form-control input-control" id="exampleFormControlInput1" v-model="section.prowadzacy[key]" placeholder="Jan Kowaski">
                <button v-show="key > 0" @click.stop.prevent="RemoveLider(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                </p>
                <p> <span  class="red-text" v-for="errors in errors.collect('lider'+key)">{{ errors }}</span> </p>
            </row>
           
            </column>
         </row>
      
    </column>
            <label for="title">Opieka duchowna </label>
            <input type="text" v-model="section.opiek"  name="filed7" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Jan Kowaski">
                  <p> <span  class="red-text" v-for="errors in errors.collect('filed7')">{{ errors }}</span> </p> 
            <hr class="my-5" />
              </column>
                <p class="h5"> Jedzenie <button v-if="sectionTwo.length < 3" @click.stop.prevent="Addfood" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj</button></p>
    <column col="12"> 
      <row>
        <!--================================================ Jedzonko =====================================================================-->
       <column class="cardrooms" v-for="(item,key) in sectionTwo" col="12" md="5" sm="6">  
            <p class="h5"> <mdb-icon color="blue" icon="cutlery" class="pr-2" />Jedzenie <button v-show="key > 0" @click.stop.prevent="RemovesectionTwo(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button></p> 
            <hr class="my-5" />
                <!-- ===============   fileimage       =============-->
          <div style="position:relative;">      
            <input type="file" :name="'file_section_image'+key"  v-validate="'required|dimensions:936,704'" @change="imageSectionTwo" :number="key" class="form-control-file fileStyle" id="exampleFormControlFile1">
             <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
            <input type="text" style="border:0;" :value="showImagessectionTwo[key]"/> 
          </div>   
             <p> <span  class="red-text" v-for="errors in errors.collect('file_section_image'+key)">{{ errors }}</span> </p>
                <!-- ===============   fileimage       =============-->
           
            <input type="text" v-model="item.title"  :name="'section'+key" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Tytuł">
                    <p> <span  class="red-text" v-for="errors in errors.collect('section'+key)">{{ errors }}</span> </p> 
           
            <textarea class="form-control-file input-control" placeholder="Opis"  :name="'sectionTwo'+key" v-validate="'required|max:130'" v-model="item.message" id="exampleFormControlFile1"></textarea> 
                  <p> <span  class="red-text" v-for="errors in errors.collect('sectionTwo'+key)">{{ errors }}</span> </p> 
       </column>
     </row>
    </column> 
    <!--=================================== Atrakcje ===============================================-->
     <hr class="my-5" />
                <p class="h5"> 
             <button v-if="place.length <3" @click.stop.prevent="Addplace" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj</button></p>
    <column col="12"> 
      <row>
       <column class="cardrooms" v-for="(item,key) in place" col="12" md="5" sm="6">  
            <p class="h5"><mdb-icon color="blue" icon="suitcase" class="pr-2" />Miejsce<button v-show="key > 0" @click.stop.prevent="Removeplace(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button></p> 
             <hr class="my-5" />
              <!-- ===============   fileimage       =============-->
          <div style="position:relative">    
            <input type="file" @change="Imageplace" v-validate="'required|dimensions:936,704'" :name="'file_section_place'+key" :number="key" class="form-control-file fileStyle" id="exampleFormControlFile1">
             <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
             <input type="text" style="border:0;" :value="showImagesplace[key]"/> 
          </div>    
             <p> <span  class="red-text" v-for="errors in errors.collect('file_section_place'+key)">{{ errors }}</span> </p>
              <!-- ===============   fileimage       =============-->
            <input type="text" v-model="item.title"  :name="'place'+key" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Tytuł">
            <p> <span  class="red-text" v-for="errors in errors.collect('place'+key)">{{ errors }}</span> </p> 
            <textarea class="form-control-file input-control" placeholder="Opis" :name="'placeTwo'+key" v-validate="'required|max:130'" v-model="item.message" id="exampleFormControlFile1"></textarea>
              <p> <span  class="red-text" v-for="errors in errors.collect('placeTwo'+key)">{{ errors }}</span> </p> 
        </column>
      </row>
   </column> 
              <!--==================================== lifestyles   ===========================================-->
   <hr class="my-5" />
                <p class="h5"><button v-if="lifestyle.length <3" @click.stop.prevent="Addlifestyle" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj</button></p>
    <column col="12"> 
      <row>
       <column class="cardrooms" v-for="(item,key) in lifestyle" col="12" md="5" sm="6">  
            <p class="h5"><mdb-icon color="blue" icon="image" class="pr-2" />Styl życia  <button v-show="key > 0" @click.stop.prevent="Removelifestyle(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button> </p> 
                <hr class="my-5" />
              <!-- ===============   fileimage       =============-->
          <div style="position:relative;">    
            <input type="file" @change="imagelifestyle" v-validate="'required|dimensions:936,704'" :name="'file_section_livestyle'+key" :number="key" class="form-control-file fileStyle" id="exampleFormControlFile1">
            <mdb-btn id="stop" color="warning"><i class="fa fa-file-photo-o" aria-hidden="true"></i> Włóz zdjecia</mdb-btn>
            <input type="text" style="border:0;" :value="showImageslifestyle[key]"/> 
          </div>  
              <p> <span  class="red-text" v-for="errors in errors.collect('file_section_livestyle'+key)">{{ errors }}</span> </p>
              <!-- ===============   fileimage       =============-->
            <input type="text" v-model="item.title" :name="'livestyle'+key" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Tytuł">
             <p> <span  class="red-text" v-for="errors in errors.collect('livestyle'+key)">{{ errors }}</span> </p>
            <textarea v-model="item.message" placeholder="Opis" :name="'livestyleTwo'+key" v-validate="'required|max:130'" class="form-control-file input-control" id="exampleFormControlFile1"></textarea> 
            <p> <span  class="red-text" v-for="errors in errors.collect('livestyleTwo'+key)">{{ errors }}</span> </p>
        </column>
      </row>
   </column> 
   <hr class="my-5" />
    <!--=========================================================== Cenik pokoj ==================================================================-->
     <p class="h5">Pokoje<button @click.stop.prevent="addRooms" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj Pokój</button></p> <p>
    
     </p>
     <column col="12"> 
     <row v-for="(main ,key,index) in rooms" >
      <column class="cardrooms" col="12" >    
       <label for="title"> <button v-show="key > 0" @click.stop.prevent="Removeobject(key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button> </label>
            <input type="text" v-model="main.rodzaj" :name="'rooms'+key" v-validate="'required|max:130'" class="form-control input-control" id="exampleFormControlInput1" placeholder="Rodzaj pokoju">
              <p><span  class="red-text" v-show="errors.has('rooms'+key)">to pole jest wymagane3</span></p>
             <label for="title"> ilość Miejsc </label>
            <input type="number"v-model="main.count" min="0" max="40" class="form-control input-control" id="exampleFormControlInput1" placeholder="Rodzaj pokoju">
            <br>
      </column>
      <column col="12">
      <p class="h5"> cennik 
        <button @click.stop.prevent="clickPrise(key)" class="size-add"><i class="fa fa-plus-circle" aria-hidden="true"></i>Dodaj cennik</button>
        
      </p>
      </column> 
       <column class="cardrooms" col="8" md="4" sm="6" v-for="(item,Twokey) in rooms[key].prise">  
            <label for="title"> Ilość Dni  <button v-show="Twokey > 0" @click.stop.prevent="Removecountday(Twokey,key)" class="size-add" style="color:red;" ><i class="fa fa-trash" aria-hidden="true"></i></button> </label>
            <select  class="form-control input-control" v-model="item.dni" id="exampleFormControlInput1"  placeholder="Wybierz ilosć Dni">
              <option >7Dnowy</option>
              <option>10Dniowe</option>
              <option>14Dniowe</option>
            </select>
            <label for="title"> Cena za pokój </label>
            <input type="number" min="0" v-model="item.prise" class="form-control input-control" id="exampleFormControlInput1" placeholder="Podaj cene">
                <hr class="my-5" />
            <!--    <p class="red-text" v-if="checkValidServer.error">Nie kombinuj : Odpowiedzi z servera: Sprawdzi poprwność znaków czy Nie ma ,.>/ </p>
                --> <mdb-alert color="warning"  v-if="checkValidServer.error">
                    servera: Sprawdzi poprwność znaków czy Nie ma ,.>/
               </mdb-alert>      
        </column>
      
        </row>
     </column>
    <mdb-btn type="submit" color="blue">Wyślij</mdb-btn>
  </form>   
</column>
</container>  
</template>
<script>
const imageUrl = 'http://localhost:3000/show/';
//let tab=[];
let tab1=[];
//let tab2=[];
//let tab3=[];
import { Container, Column, Row, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, EdgeHeader, CardBody,mdbBtnFixed, mdbBtnFixedItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavItem, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText,mdbTbl, mdbTblHead, mdbTblBody,mdbMask, mdbView,mdbAlert } from 'mdbvue';
import axios from 'axios';
export default {
  name:"create", 
  components:{
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
    mdbAlert 
  },
  data(){
    return {
      fullcontent:null,  
      checkValidServer:{},
      validSlug:[],
      showImageslider:[],
      showImagesFront:[],
      showImagesCard:[],
      showImagesplace:[],
      showImageslifestyle:[],
      showImagessectionTwo: [],
      key:'',
      imgFront: '',
      post:null,
      title:'',
      slug:'',
      mody :0,
      viusallyCard:false,
      image:{ imagelifestyle:[], Imageplace:[],imageSectionTwo:[],Imagecard:[]},
      file: [],
      preslider:[],
      slider: [],
      titleTwo:'',
      message:'',
      messageTwo:'',
      termins:[{time :"" ,chooseDay : [""]}],  
      rooms:[{rodzaj:'', prise:[{  dni : '', prise : '' }],count:0}],
      lifestyle:[{imgfutured : '' , title : "" , data : '', message:''}],
      place :[{imgfutured : '' , title : "" , data : '', message:''}],
      sectionTwo :[{ imgfutured :'', title :"", data :'', message:''}],
      section:{title:'',prowadzacy:[''] ,opiek :''},
      card:[{ Imglink:'',title:"", message :''},{Imglink:'',title: "",message:''},{Imglink:'',title:"",message:''}] 
    };
  },
  mounted() {
    this.loadContent(); 
  },
  methods:{
    loadContent(){
      axios.get('http://localhost:3000/postText/'+this.$route.params.slug)
        .then(res => {this.fullcontent = res.data; 
          this.slug = res.data.post[0].slug;
          this.title = res.data.post[0].title;
          this.titleTwo = res.data.post[0].titleTwo;
          this.message = res.data.post[0].message;
          this.messageTwo =res.data.post[0].messageTwo;
          this.termins = res.data.post[0].termins;
          this.rooms = res.data.post[0].rooms;
          this.card = res.data.post[0].card;
          this.sectionTwo = res.data.post[0].sectionTwo;
          this.place = res.data.post[0].place;
          this.lifestyle = res.data.post[0].lifestyle;
          this.section =res.data.post[0].section;
          console.log(res.data);})
        .catch(res => console.log(res));
      axios.get('http://localhost:3000/apload/'+this.$route.params.slug)
        .then(response => {
          console.log(response);
          // for (let i=0 ; i <= response.data.Imagecard.length-1;i++)
          // {
          //   console.log('wykonało sie');
          //   this.showImagesCard[i] = response.data.Imagecard[i]; 
          // }
          // this.showImagesFront = response.data.front;
          // this.imgFront = imageUrl+response.data.front;
          // this.showImageslider = response.data.Imageslider.length+'plikow';
          // for (let i=0 ; i <= response.data.Imageslider.length-1;i++)
          // {
          //   this.slider[i] = imageUrl+response.data.Imageslider[i]; 
          // }
          // for (let i=0 ; i <= response.data.Imagecard.length-1;i++)
          // {
          //   console.log('wykonało sie');
          //   this.showImagesplace[i] = response.data.Imageplace[i]; 
          // }
          // for (let i=0 ; i <= response.data.imgestyle.length-1;i++)
          // {
          //   console.log('wykonało sie');
          //   this.showImageslifestyle[i] = response.data.imgestyle[i]; 
          // }
          // for (let i=0 ; i <= response.data.sectionTwo.length-1;i++)
          // {
          //   console.log('wykonało sie');
          //   this.showImagessectionTwo[i] = response.data.sectionTwo[i]; 
          // }
        })
        .catch(err => console.log(err)); 
    }, 
    addRooms(){
      this.rooms.push({rodzaj:'', prise:[{  dni : '', prise : '' }],count:0});
    },  
    clickPrise(key){
      this.rooms[key].prise.push({ dni : '', prise : ''});
    },
    Addlifestyle(){
      this.lifestyle.push({imgfutured : '' , title : "" , data : '', message:''});
    },
    Addplace(){
      this.place.push({imgfutured : '' , title : "" , data : '', message:''});
    },
    Addfood(){
      this.sectionTwo.push({ imgfutured :'', title :"", data :'', message:''});  
    },
    AddLider(){
      this.section.prowadzacy.push('');  
    },
    addChoose(key){
      this.termins[key].chooseDay.push('');  
    },
    addTermin(){
      this.termins.push({time :"" ,chooseDay : [""]}); 
    },
    Removeplace(key){
      this.place.splice(key,1);
    },
    RemovesectionTwo(key){
      this.sectionTwo.splice(key,1);
    },
    Removelifestyle(key){
      this.lifestyle.splice(key,1);
    },
    Removecountday(Twokey,key){
      this.rooms[key].prise.splice(Twokey,1);
    },
    Removeobject(key){
      this.rooms.splice(key,1);
    },
    RemoveLider(key){
      this.section.prowadzacy.splice(key,1);
    },
    RemoveTermin(key){
      this.termins.splice(key,1);
    },
    RemoveTerminDay(key,l){
      this.termins[key].chooseDay.splice(l,1);
    },
    fileimage(e){
      this.file = [];
      this.showImageslider=[];
      for (let y=0 ;y <= e.target.files.length-1;y++)
      {  
        this.showImageslider[0]= e.target.files.length+'plikow';
        this.slider[y] = imageUrl+e.target.files[y].name; 
        this.file[y] = e.target.files[y];
      }
      console.log(e.target.files[0]);
    },
    imagelifestyle(e){
      this.showImageslifestyle[e.target.attributes.number.value] = [];
      this.showImageslifestyle[e.target.attributes.number.value] = e.target.files[0].name;
      this.image.imagelifestyle[e.target.attributes.number.value] = e.target.files[0];
      this.lifestyle[e.target.attributes.number.value].imgfutured = imageUrl+e.target.files[0].name;
      tab1[e.target.attributes.number.value] = e.target.files[0];
      //this.image.imagelifestyle = tab1;
     
    },
    Imageplace(e){
      this.showImagesplace[e.target.attributes.number.value] = [];
      this.showImagesplace[e.target.attributes.number.value] = e.target.files[0].name;
      this.image.Imageplace[e.target.attributes.number.value] = e.target.files[0];
      this.place[e.target.attributes.number.value].imgfutured = imageUrl+e.target.files[0].name;
      // console.log(e.target.files[0].lastModified);
      // if (tab.length-1 >= 1){
      //   this.viusallyCard = true;
      // }
      // tab2.push(e.target.files[0]);
      // this.image.Imageplace = tab2;
    },
    imageSectionTwo(e){
      this.showImagessectionTwo[e.target.attributes.number.value] = [];
      this.showImagessectionTwo[e.target.attributes.number.value] = e.target.files[0].name;
      this.image.imageSectionTwo[e.target.attributes.number.value] = e.target.files[0];
      this.sectionTwo[e.target.attributes.number.value].imgfutured = imageUrl+e.target.files[0].name;
      // console.log(e.target.files[0].lastModified);
      // if (tab.length-1 >= 1){
      //   this.viusallyCard = true;
      // }
      // tab3.push(e.target.files[0]);
      // this.image.imageSectionTwo = tab3;
    },
    Imagecard(e){
      this.showImagesCard[e.target.attributes.number.value] = [];
      this.showImagesCard[e.target.attributes.number.value] = e.target.files[0].name;
      this.image.Imagecard[e.target.attributes.number.value] = e.target.files[0];
      this.card[e.target.attributes.number.value].Imglink = imageUrl+e.target.files[0].name;
      // if (tab.length-1 >= 1){
      //   this.viusallyCard = true;
      // }
      // tab.push(e.target.files[0]);
      // this.image.Imagecard = tab;
    },
    ImageFront(e){
      this.showImagesFront =[];
      this.showImagesFront = e.target.files.length+'plik';
      this.image.imgFront = e.target.files[0];
      this.imgFront = imageUrl+e.target.files[0].name;
      console.log('ImageFront');
    },
    submit(e){
      var formdata = new FormData();
      console.log('stop');
      formdata.append('front',this.image.imgFront);
      for (let i=0 ;i <= this.file.length-1;i++)
      {
        formdata.append(`slider${i}`,this.file[i]);
      }
      for (let i=0 ;i <= this.image.Imagecard.length-1;i++)
      {
        formdata.append(`card${i}`,this.image.Imagecard[i]);
      }
      for (let i=0 ;i <= this.image.Imageplace.length-1;i++)
      {
        formdata.append(`place${i}`,this.image.Imageplace[i]);
      }
      for (let i=0 ;i <= this.image.imagelifestyle.length-1;i++)
      {
        formdata.append(`life${i}`,this.image.imagelifestyle[i]);
      }
      for (let i=0 ;i <= this.image.imageSectionTwo[0].length-1 ;i++)
      {
        formdata.append(`section${i}`,this.image.imageSectionTwo[i]);
      }
      const data={
        ImgFront:this.imgFront,
        post: this.post,
        title: this.title,
        slug: this.slug,
        file : this.file,
        slider: this.slider,
        titleTwo: this.titleTwo,
        message: this.message,
        messageTwo: this.messageTwo,
        termins: this.termins,  
        rooms:this.rooms,
        lifestyle: this.lifestyle,
        place : this.place,
        sectionTwo : this.sectionTwo,
        section: this.section,
        card:this.card,
      };
      console.log(data);
      axios.post('http://localhost:3000/apload',formdata)
        .then(res => console.log(res))
        .catch(err => console.log('error'+err));
      console.log('wykonalo sie');
      console.log(formdata);
      axios.put('http://localhost:3000/postTextapdata/'+this.$route.params.slug,data)
        .then(res => console.log('powiodło sie'))
        .catch(err => console.log('error'+err));
      console.log('wykonalo sie');
    },
    formvalid(e){
      e.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          this.submit();
          //alert('All Passes!');
          return;
        }
        console.log('cos poszło nie tak');
      });
    }
  }   
};
</script>
<style lang="scss" scoped>
.form-border{

border-top:0px;
border-left:0px;
border-right: 0px;
border-bottom: 1px solid grey;

  &:focus{

  }
}
.input-control{
border-top:0px;
border-left:0px;
border-right:0px;
border-bottom: 1px solid rgb(182, 180, 180);
border-radius:0px;
box-shadow: 0; 
cursor: pointer;
 outline-offset: 0px;

    &:focus{
      border-bottom: 1px solid rgb(87, 18, 177);
         outline-offset: 0px;
      }
}
.fileStyle{
  display: block;
  
position: absolute;
top:0px;
z-index:2; 
font-size: 32px; 
opacity: 0;
}
.inputstyle{

}
.cardrooms{

background-color: white;
margin:6px;
padding: 10px;
border-radius: 3px;
box-shadow:3px 3px 6px rgba(0, 0, 0, 0.452);

}
.size-add{

}
.addItem{

width:100%;
height: 100%;


}

.fa-plus-size{

font-size: 100px;

}
.size-add{

background-color: rgba(255, 255, 255, 0);
border:0;
color:green;
}

</style>




