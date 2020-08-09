<template>
  <div class="">
      <div class="bg">
          <div class="text-center container">
              <h1 class="white-text py-3">{{memorial.firstname}}{{memorial.lastname}}</h1>
              <h3 class="text-muted">{{getYear(memorial.dateOfBirth) }} - {{ getYear(memorial.dateOfDeath)}} </h3>
          </div>
      </div>
      <div class="text-center my-4">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button @click="changeTab('about')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-user fa-sm pr-2" aria-hidden="true"></i>
                    About</button>
                <button @click="changeTab('tributes')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-heart fa-sm pr-2" aria-hidden="true"></i>Tribute</button>
                <button @click="changeTab('gallery')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-film fa-sm pr-2" aria-hidden="true"></i>Gallery</button>
            </div>
      </div>
      <div v-if="currentPage == 'about'">
          <div class="container  pt-4 z-depth-5">
            <section class="dark-grey-text">

                <div class="row pr-lg-5">
                <div class="col-md-7 mb-4">

                    <div class="view">
                    <img :src="memorial.image" class="img-fluid" alt="smaple image">
                    </div>

                </div>
                <div class="col-md-5 align-items-center">
                    <div>
                    
                    <h3 class="font-weight-bold mb-4 purple-text">About {{memorial.firstname}} {{memorial.lastname}}</h3>

                        <p>{{memorial.about}}</p>


                    </div>
                    <div >
                        <p><strong class="purple-text">Age : </strong>{{getYear(memorial.dateOfDeath) - getYear(memorial.dateOfBirth)}} | <strong class="purple-text">Gender : </strong>{{memorial.gender}}</p>
                        <p> <strong class="purple-text">Born On : </strong><span>{{ memorial.dateOfBirth | moment("MM Do YYYY") }}</span> | <strong class="purple-text">Died On : </strong><span>{{ memorial.dateOfDeath | moment("MM Do YYYY") }}</span></p>
                        <p><strong class="purple-text">Relationship : </strong>{{memorial.relationship}}</p>
                        <p><strong class="purple-text">Country Of Birth : </strong>{{ memorial.countryOfBirth}} | <strong class="purple-text">State Of Birth : </strong>{{ memorial.stateOfBirth}}</p>
                        <p><strong class="purple-text">City Of Birth : </strong>{{ memorial.cityOfBirth}} | <strong class="purple-text">State Of Death : </strong>{{ memorial.stateOfDeath}}</p>
                        <p><strong class="purple-text">City Of Death : </strong>{{ memorial.cityOfDeath}} | <strong class="purple-text">Special Designation : </strong>{{ memorial.specialDesignation}}</p>
                        <p><strong class="purple-text">Web Address : </strong>{{ memorial.webAddress}}</p>
                    </div>
                </div>
                </div>
                <h1 class="purple-text">Biography</h1>
                <div class="p-3">
                    <p>
                    {{ memorial.biography}}
                    </p>
                </div>

            </section>
            <!--Section: Content-->


            </div>
      </div>
      <div v-if="currentPage == 'tributes'">
          <div class="container py-5 my-5 z-depth-5">


  <!--Section: Content-->
  <section class="dark-grey-text" id="addTribute">

    <!-- Section heading -->
    <h1 class="text-center font-weight-bold mb-4 pb-2 purple-text">Tributes</h1>
    <hr class="w-header">
    <!-- Section description -->
    <!-- <p class="lead text-center w-responsive mx-auto text-muted mt-4 pt-2 mb-5">Cards include various options for customizing their backgrounds, borders, and color.</p> -->
    <div >
        <!-- Material outline input -->
        <fieldset>
            <legend>Add A Tribute</legend>
            <div class="md-form md-outline form-lg">
                <input type="text" ref="name" class="form-control form-control-lg" placeholder="Your Name">
                
            </div>
            <div class="md-form md-outline form-lg">
                <textarea class="form-control form-control-lg" v-model="tribute" placeholder="Your Tribute"></textarea>
                
            </div>
            <div class="text-right">
                <button class="btn btn-black"  @click.prevent="addTribute()">
                    Add Tribute
                </button>
            </div>
        </fieldset>
    </div>
    <div v-if="memorial.tributes.length < 1" class="alert alert-info">
      No tributes have been added, be the first to say something nice..
    </div>
    <!--First row-->
    <div class="row py-4">

      <!--First column-->
      <div class="col-md-6 mb-4" v-for="tribute in memorial.tributes" :key="tribute._id">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

        <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4"> {{tribute.name}}</h5>
            <p class="text-muted font-weight-light mb-0">{{tribute.tribute}}.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--First column-->
        
    </div>
    <div class="text-center">
        <a href="#addTribute" class="btn btn-black">
            Add Tribute
        </a>
    </div>
    <!--First row-->

	</section>
  
  
</div>
      </div>
      <div v-if="currentPage == 'gallery'" class="bg">
          <div class="container">
              <div>
                <fieldset>
                  <legend>Add A Photo</legend>
                  <div class="md-form md-outline form-lg">
                      <input type="text" ref="name" class="form-control form-control-lg" placeholder="Your Name">
                      
                  </div>
                  <div class="md-form md-outline form-lg">
                      <input type="file" class="form-control form-control-lg" ref="photo" placeholder="Add Picture">
                      
                  </div>
                  <div class="text-right">
                      <button class="btn btn-black"  @click.prevent="addPhoto()">
                          Add Photo
                      </button>
                  </div>
              </fieldset>
              </div>
              <div class="row">
                  <div class="col-md-3 h-100 mb-5" v-for="(photo, i) in images" :key="i" @click="index = i" >
                    <img :src="photo" class="img-fluid open-tinybox" alt="smaple image" width="100%" >
                    <Tinybox v-model="index" :images="images" :loop="true" close></Tinybox>
                  </div>
                 
              </div>
          </div>
      </div>
      <div class="text-center my-4">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button @click="changeTab('about')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-user fa-sm pr-2" aria-hidden="true"></i>
                    About</button>
                <button @click="changeTab('tributes')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-heart fa-sm pr-2" aria-hidden="true"></i>Tribute</button>
                <button @click="changeTab('gallery')" type="button" class="btn btn-purple btn-rounded"><i class="fas fa-film fa-sm pr-2" aria-hidden="true"></i>Gallery</button>
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
    overflow: hidden !important;

  }
</style>

<script>
import axios from "axios"
import Tinybox from "vue-tinybox";
export default {
    name:'ViewMemorial',
    components: {
      Tinybox
    },
    data(){
        return{
            memorialId : this.$route.params.id,
            memorial:{},
            currentPage : 'about',
            tribute:'',
            images:[],
            index:null,
            
        }
    },
    methods:{
        changeTab(currentTab){
            this.currentPage = currentTab;
        },
        getYear(date){
        return new Date(date).getFullYear();
         
        },
        addTribute(){
        
          let data = {   
          name: this.$refs.name.value,    
          title: 'My Tribute',    
          tribute: this.tribute
          
          } 
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.put("https://missyou-api.azurewebsites.net/api/v1/auth/update-tributes/"+this.memorialId,data, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){

            alert("Tribute Added Successfully")
            window.location="";
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
              alert( err[0] )
            }
            
          }
          
        
          // this.errored = true    
      }) 
        },
        addPhoto(){
        
      
          let formData = new FormData();
          formData.append('name',this.$refs.name.value);
          formData.append('photo',this.$refs.photo.files[0]);
    
        
      
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      axios.put("https://missyou-api.azurewebsites.net/api/v1/auth/update-photos/"+this.memorialId,formData, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){

            alert("Photo Added Successfully")
            window.location="";
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
              alert( err[0] )
            }
            
          }
          
        
          // this.errored = true    
      }) 
        }
    },
      mounted(){
  const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.get("https://missyou-api.azurewebsites.net/api/v1/memorial/"+this.memorialId, config)   
      .then((response) => { 
        
        if(response.data["status"] === 200){
            this.memorial = response.data.memorial;
            console.log(this.memorial.tributes)
            for(let i=0; i <= this.memorial.photos.length; i++){
              this.images.push(this.memorial.photos[i].photo);
            }
        }else{
          // this.loading = false
          // this.loginErr = response.data["message"];
        }
        
          
      
      })    
  },
}
</script>
