<template>
<div class="color-bgfull">
   <div class="row">
 <div class="col-2">
   <div class="border"> 
    <div class="backgroundAvatar">
       <img src="../assets/logo.png"/>
      </div> 
    <div class="color-bgfull">
    <div class="container ">
          <ul class="list-group list-group-flush">
            <p class="root">Dashaboard</p>
               <router-link to="create"><li class="list-group-item item-pug"><i class="fa fa-check-circle" aria-hidden="true"></i> stwórz turnus </li></router-link>
               <router-link to="edit"><li class="list-group-item  item-pug"><i class="fa fa-check-circle" aria-hidden="true"></i> Edytuj Turnusy</li></router-link>
               <a href="#"><li class="list-group-item  item-pug"><i class="fa fa-check-circle" aria-hidden="true"></i> Tablica zamówień</li></a>
               <a href="#"><li class="list-group-item  item-pug"><i class="fa fa-check-circle" aria-hidden="true"></i> Płatność</li></a>
               <a href="#"><li class="list-group-item  item-pug"><i class="fa fa-check-circle" aria-hidden="true"></i> Wyloguj się </li></a>
         </ul>
    </div>
    </div>
</div>
 </div>

 <!-- wraper container -->
    <div class="col-10"> 
      
      <router-view/>
      
    </div>     
   </div>
</div>
</template>
<script> 
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbInput, mdbBtn, mdbSideNav, mdbSubMenu, mdbIcon, waves } from 'mdbvue';

export default {
  name: 'SideNavPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbBtn,
    mdbSideNav,
    mdbSubMenu,
    mdbIcon,
    waves
  },
 
};
</script>
 
<style lang="scss" scoped>
.border{

background-color: rgb(245, 245, 248);
height: 100vh;
width:15%;
position: fixed;
z-index:10;

left:0;

}
.color-bgfull{

background-color: rgba(238, 238, 238, 0.986);


}
.backgroundAvatar{
background-color: rgb(49, 168, 49);
width: 100%;
}
.root{
// padding: 5px;  
 color:gray;
 font-weight: 500;

}
.item-pug{
border-radius:0px !important;;
background-color: rgba(255, 255, 255, 0) !important;
font-weight: 600;

color: grey;
 &:hover{

color:white;
background-color: grey;
 }
}
</style>




