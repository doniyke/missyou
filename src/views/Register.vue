<template>
    <div class="">
        <div class="bg">
            <div class="text-center container">
                <h1 class="white-text py-3">Get Started</h1>
                <h3 class="text-light">Register to start creating memorial pages </h3>
            </div>
               <form class="my-5 mx-md-5" action="">

      <div class="row">
        <div class="col-md-6 mx-auto">
          <!-- Material form login -->
          <div class="card z-depth-5" style="background : transparent">

            <!--Card content-->
            <div class="card-body ">

              <!-- Form -->
              <form class="text-center">

                 <input type="text"  class="form-control mb-4" ref="name" placeholder="Name">
                <!-- Name -->
                <input type="email"  class="form-control mb-4" ref="email" placeholder="Email">
                
                <!-- Email -->
                <input type="password" class="form-control" ref="password" placeholder="Password">
              

                <div v-if="loading && loginErr == ''">
                  Loading ........
                </div>
                <div class="alert alert-danger" v-if="loginErr != '' && loading == false" >
                  {{loginErr}}
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-black btn-rounded my-4 waves-effect"  @click.prevent="register()">Login</button>
                </div>

              </form>
              <!-- Form -->

            </div>

          </div>
          <!-- Material form login -->
        </div>
      </div>

    </form>
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
import router from "@/router"

export default {
  data(){
    return{
      loading:false,
      loginErr : ''
    }
  },
  methods:{
    register(){ 
      this.loading = true
      let data = {  
          name: this.$refs.name.value,  
          email: this.$refs.email.value,    
          password: this.$refs.password.value
          
      } 
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.post("https://missyou-api.azurewebsites.net/api/v1/auth/signup",data, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            router.push("/login")
        }else{
          this.loading = false
          this.loginErr = response.data["message"];
        }
        
          
      
      })    
      .catch((errors) => {  
        if (errors.response) {
            this.loading = false
            // console.log(data)
            if(errors.response.data["errors"]){
              let err = Object.values(errors.response.data["errors"][0])
              this.loginErr = err[0]
            }
            
          }
          
        
          // this.errored = true    
      }) 

    }
  }
}
</script>
