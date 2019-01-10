<template>
    <!-- Default form register -->
<container>
  <div class="container-login">
    <column class="border-table-1" col="4">
      <form  @submit="onSubmit">
         <p class="h4 text-center mb-4">Sign in</p>
          <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
          <input type="text" v-model.trim="login.username" id="defaultFormLoginEmailEx" class="form-control"/>
          <br/>
           <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
            <input type="password" v-model.trim="login.password" id="defaultFormLoginPasswordEx" class="form-control"/>
            <div class="text-center mt-4">
             <button class="btn btn-indigo" type="submit">Login</button>
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
  name:'login',
  data(){
    return {
      login :{},
      errors : []
    };
  },
  methods:{
    onSubmit(e){
      e.preventDefault();
      axios.post(`http://localhost:3000/admin?username=${this.login.username}&password=${this.login.password}`) 
      //rozwiaz dlaczego nie mozna innym sposobem
        .then(response => {
          localStorage.setItem('token',response.data.token);
        })
        .catch(e => {
          console.log('nie wykonało sie'+e);
          this.errors.push(e);
        });
    },
    register () {
      this.$router.push({
        name: 'login'
      });
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
    mdbView
  }
};
</script>
<style scoped>
.container-login{
display: flex;
justify-content: center;
align-items: center;
}
.border-table-1{

display:flex;
padding: 50px;
margin-top: 50px;
margin-left: 150px;

}