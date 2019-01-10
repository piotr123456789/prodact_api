<template>
    <!-- Default form register -->
<container>
  <div class="container-register">
    <column class="border-table" col="4">
             <form @submit="onSubmit">
                <p class="h4 text-center mb-4">Sign up</p>
                <label for="defaultFormRegisterNameEx" class="grey-text">Your name</label>
                <input type="text" id="defaultFormRegisterNameEx" v-model.trim="register.username" class="form-control"/>
                <br/>
                <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
                <input type="password" id="defaultFormRegisterPasswordEx" v-model.trim="register.password" class="form-control" />
                <div class="text-center mt-4">
                    <button class="btn btn-unique" type="submit">Register</button>
                </div>
             </form>
    </column>
  </div> 
</container>
<!-- Default form register -->
</template>
<script>
import { Container, Column, Row, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, EdgeHeader, CardBody,mdbBtnFixed, mdbBtnFixedItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavItem, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText,mdbTbl, mdbTblHead, mdbTblBody,mdbMask, mdbView } from 'mdbvue';
import axios from 'axios';
export default {
  name:'register',
  data(){
    return {
      register: {},
      errors: [] 
    };
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault();
      axios.post(`http://localhost:3000/users/register`, this.register)
        .then(response => {
          this.$router.push({
            name: 'login'
          });
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    },
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
    mdbView
  }
};
</script>
<style scoped>
.container-register{
display: flex;
justify-content: center;
}
.border-table{

padding: 20px;
margin: 30px;

}
</style>
