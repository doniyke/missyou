<template>
  <div class="">
      <div class="bg">
          <div class="text-center container">
              <h1 class="white-text py-3">Create Memories... Relive Moments</h1>
              <div class="col-md-6 offset-md-3 input-group mb-3">
                <input type="text" class="form-control" v-model="search" placeholder="Search memorial page..." aria-label="Recipient's username"
                  aria-describedby="MaterialButton-addon2">
                <div class="input-group-append">
                  <button class="btn btn-md btn-secondary m-0 px-3" type="button" id="MaterialButton-addon2">Find Memory</button>
                </div>
              </div>
          </div>
      </div>
      <div class="container py-5">
        <div class="text-center">
          <h1 class="purple-text pb-2">Recent Memories</h1>
          <div class="row">
            <div class="col-md-3 mb-5" v-for="memorial in filteredList" :key="memorial._id">
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
      <!-- Alternate: Background Image Parallax -->
      <div class="bg text-center white-text">
          <div class="container">
            <h1>Create A Memorial Page</h1>
            <h3>Make Memories and Share with Friends!!</h3>
            <router-link to="/dashboard">
              <button class="btn btn-purple">Get Started</button>
            </router-link>
            <button class="btn btn-black z-depth-5">
              <a href="https://dashboard.flutterwave.com/donate/kqhqoh2pdof0" target="_blank" rel="noopener noreferrer">Donate To MissYou</a>
            </button>
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

  }
</style>
<script>
import axios from "axios"
// import router from "@/router"

export default {
  name: 'Home',
  components: {
    
  },
  data(){
      return{
      allmemorials : [],
      search:''
      }
    },
    methods:{
      getYear(date){
        return new Date(date).getFullYear();
         
      }
    },
    
  mounted(){
  const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.get("https://missyou-api.azurewebsites.net/api/v1/memorials", config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            this.allmemorials = response.data.memorials;
        }else{
          // this.loading = false
          // this.loginErr = response.data["message"];
        }
        
          
      
      })    
  },
  computed: {
        filteredList() {
            return this.allmemorials.filter(memorial => {
                return memorial.firstname.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>
