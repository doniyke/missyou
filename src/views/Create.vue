<template>
    <div class="">
        <div class="bg">
            <div class="text-center container">
                <h1 class="white-text py-3">Create Memorial Page</h1> 
            </div>
            
        </div>

      <div class="container py-5">
    <form class="my-5 mx-md-5" action="">

          <div class="card z-depth-5" style="background : transparent">

            <!--Card content-->
            <div class="card-body ">

              <!-- Form -->
              <form class="text-center">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="firstname" placeholder="firstname">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="lastname" placeholder="lastname">
                    </div>
                     <div class="col-md-6">
                         <select class="form-control mb-4" ref="gender">
                             <option disabled selected>Gender</option>
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                         </select>
                        
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="relationship" placeholder="relationship">
                    </div>
                    <div class="col-md-6">
                        <input type="date"  class="form-control mb-4" ref="dateOfBirth" placeholder="dateOfBirth">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="countryOfBirth" placeholder="countryOfBirth">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="stateOfBirth" placeholder="stateOfBirth">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="cityOfBirth" placeholder="cityOfBirth">
                    </div>
                    <div class="col-md-6">
                        <input type="date"  class="form-control mb-4" ref="dateOfDeath" placeholder="dateOfDeath">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="countryOfDeath" placeholder="countryOfDeath">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="stateOfDeath" placeholder="stateOfDeath">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="cityOfDeath" placeholder="cityOfDeath">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="specialDesignation" placeholder="specialDesignation">
                    </div>
                    <div class="col-md-6">
                        <input type="text"  class="form-control mb-4" ref="webAddress" placeholder="webAddress">
                    </div>
                    <div class="col-md-6">
                        <textarea  class="form-control mb-4" v-model="about" placeholder="about">
                            About...
                        </textarea>
        
                    </div>
                    <div class="col-md-6">
                        <textarea  class="form-control mb-4" v-model="biography" placeholder="biography">
                            Biography...
                        </textarea>
                       
                    </div>
                    <div class="col-md-6">
                        <input type="file"  class="form-control mb-4" ref="image" placeholder="image">
                    </div>
                    
                </div>
                
                
                <div v-if="loading && loginErr == ''">
                  Loading ........
                </div>
                <div class="alert alert-danger" v-if="loginErr != '' && loading == false" >
                  {{loginErr}}
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-black btn-rounded my-4 waves-effect"  @click.prevent="createMemorial()">Create Memorial</button>
                </div>

              </form>
             

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
      name :  localStorage.getItem('name'),
        userToken : localStorage.getItem('userToken'),
      allmemorials : [],
      loginErr :'',
      about:'',
      biography:'',
      userID : localStorage.getItem('userId'),
     
    }
  },
  methods:{
    createMemorial(){ 
        this.loading = true
        let formData = new FormData();
        formData.append('userID',this.userID);
        formData.append('firstname',this.$refs.firstname.value);
        formData.append('lastname',this.$refs.lastname.value);
        formData.append('gender',this.$refs.gender.value);
        formData.append('relationship',this.$refs.relationship.value);
        formData.append('dateOfBirth',this.$refs.dateOfBirth.value);
        formData.append('countryOfBirth',this.$refs.countryOfBirth.value);
        formData.append('stateOfBirth',this.$refs.stateOfBirth.value);
        formData.append('cityOfBirth',this.$refs.cityOfBirth.value);
        formData.append('dateOfDeath',this.$refs.dateOfDeath.value);
        formData.append('countryOfDeath',this.$refs.countryOfDeath.value);
        formData.append('stateOfDeath',this.$refs.stateOfDeath.value);
        formData.append('cityOfDeath',this.$refs.cityOfDeath.value);
        formData.append('specialDesignation',this.$refs.specialDesignation.value);
        formData.append('webAddress',this.$refs.webAddress.value);
        formData.append('about',this.about);
        formData.append('biography',this.biography);
        formData.append('image',this.$refs.image.value);
        console.log(formData)

          
    
      
      const config = {
        headers: {
            Authorization: this.userToken, 
          'Content-Type': 'application/json'
        }
      }

      axios.post("https://missyou-api.azurewebsites.net/api/v1/auth/create-memorial",formData, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            this.loginErr=response.data["message"];
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
