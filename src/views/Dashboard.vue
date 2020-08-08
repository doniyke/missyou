<template>
    <div class="">
        <div class="bg">
            <div class="text-center container">
                <h1 class="white-text py-3">Dashboard In Progress</h1> 
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
import router from "@/router"

export default {
  data(){
    return{
      loading:false,
      loginErr : ''
    }
  },
  methods:{
    login(){ 
      this.loading = true
      let data = {   
          email: this.$refs.email.value,    
          password: this.$refs.password.value
          
      } 
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.post("https://missyou-api.azurewebsites.net/api/v1/auth/login",data, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            localStorage.setItem('emailUser', response.data.user["email"]);
            localStorage.setItem('userName', response.data.user["name"]);
            localStorage.setItem('userToken', response.data["token"]);
            localStorage.setItem('userId', response.data.user["_id"]);
            router.push("/dashboard")
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
