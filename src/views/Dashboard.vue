<template>
    <div class="">
        <div class="bg">
            <div class="text-center container">
                <h1 class="white-text py-3">Welcome Back {{name}}</h1> 
                <router-link :to="{ name: 'Create'}">
                  <button class="btn btn-black btn-rounded my-4 waves-effect">
                    Create A Memorial Page
                  </button>
                </router-link>
            </div>
            
        </div>

      <div class="container py-5">
        <div class="text-center">
          <h1 class="purple-text pb-2">My Memorials</h1>
          <div v-if="allmemorials.length < 1" class="alert alert-danger">
            You have not created any memorial page yet.
          </div>
          <div class="row">
            <div class="col-md-3 mb-5" v-for="memorial in allmemorials" :key="memorial._id">
              <!-- Card Wider -->
              <div class="card card-cascade wider z-depth-3">

                <!-- Card image -->
                <div class="view view-cascade overlay h-100">
                  <img class="card-img-top" :src="memorial.image" alt="Card image cap">
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <!-- Card content -->
                <div class="card-body card-body-cascade text-center pb-0">

                  <!-- Title -->
                  <h4 class="card-title purple-text"><strong>{{memorial.firstname}} {{memorial.lastname}}</strong></h4>
                  <!-- Subtitle -->
                  <h5 class="text-muted pb-2"><span></span>{{getYear(memorial.dateOfBirth) }} - {{ getYear(memorial.dateOfDeath)}}</h5>
                  <!-- Text -->
                  <!-- Card footer -->
                  <div class="card-footer text-muted text-center">
                      <router-link :to="{ name: 'ViewMemorial', params : {id : memorial._id} }">
                        <button class="btn btn-black btn-sm btn-block ">View Memorial</button>
                      </router-link>
                  </div>

                </div>

              </div>
              <!-- Card Wider -->
            </div>
          </div>
        </div>  
      </div>
    </div>   
</template>

<style scoped>
    .bg{
        background:linear-gradient(to top left, rgba(75,0,130,0.6) 50%,rgba(128,0,128,0.6)), url(../assets/images/milk.jpg) no-repeat no-repeat center center;
        padding-top: 100px;
        padding-bottom: 100px;
        background-size: cover;
        background-attachment: fixed;
    }
    .h-100{
        height: 150px !important;
        margin: 0px !important;
        padding: 0px !important;

    }
</style>

<script>
import axios from "axios"

export default {
  data(){
    return{
      loading:false,
      name :  localStorage.getItem('name'),
      userToken : localStorage.getItem('userToken'),
      allmemorials : [],
    }
  },
  mounted(){
    const config = {
        headers: {
          Authorization:'Bearer ' + this.userToken,
          'Content-Type': 'application/json'
        }
      }

      axios.get("https://missyou-api.azurewebsites.net/api/v1/auth/user-memorials", config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            this.allmemorials = response.data.memorials;
        }else{
          // this.loading = false
          // this.loginErr = response.data["message"];
        }
        
          
      
      })    
  }
}
</script>
