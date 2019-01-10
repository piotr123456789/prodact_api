<template>
<container class="color-bgfull">
         <label for="title"> Rekordy </label>
         <column class="cardrooms">  
         <row>
            <column>
           <img src="http://localhost:3000/show/800,480.jpg" height="60" width="100"/>
            </column>
                <column>
            <h5>Rekolekcje w białogórze</h5>
                </column>
                   <column>
                   <div class="colMd" style="float:right;" >
           <mdb-btn color="info"><i class="fa fa-edit " aria-hidden="true"></i></mdb-btn>
             <mdb-btn  color="danger" ><i class="fa fa-trash " aria-hidden="true"></i></mdb-btn>
                   </div>
                </column>
         </row>
     
    </column> 
 </p>
</column>
</container>  
</template>
<script>
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
      pingwin: null
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load(){  
      axios.get('/postTextfull')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  },
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







