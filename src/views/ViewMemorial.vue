<template>
  <div class="">
      <div class="bg">
          <div class="text-center container">
              <h1 class="white-text py-3">John Doe</h1>
              <h3 class="text-muted">1990 - 2020 </h3>
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
                    <img src="../assets/images/andy.jpg" class="img-fluid" alt="smaple image">
                    </div>

                </div>
                <div class="col-md-5 align-items-center">
                    <div>
                    
                    <h3 class="font-weight-bold mb-4 purple-text">About John Doe</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adip elit. Maiores deleniti explicabo voluptatem quisquam nulla asperiores aspernatur aperiam voluptate et consectetur minima delectus, fugiat eum soluta blanditiis adipisci, velit dolore magnam.</p>


                    </div>
                    <div >
                        <p><strong class="purple-text">Age : </strong>70 | <strong class="purple-text">Gender : </strong>Male</p>
                        <p> <strong class="purple-text">Born On : </strong>12/01/1990 | <strong class="purple-text">Died On : </strong>12/01/1990</p>
                        <p><strong class="purple-text">Relationship : </strong>father, brother, child</p>
                        <p><strong class="purple-text">Country Of Birth : </strong>Nigeria | <strong class="purple-text">State Of Birth : </strong>Abia</p>
                        <p><strong class="purple-text">City Of Birth : </strong>Nigeria | <strong class="purple-text">State Of Death : </strong>Abia</p>
                        <p><strong class="purple-text">City Of Death : </strong>Nigeria | <strong class="purple-text">Special Designation : </strong>Abia</p>
                        <p><strong class="purple-text">Web Address : </strong>Nigeria</p>
                    </div>
                </div>
                </div>
                <h1 class="purple-text">Biography</h1>
                <div class="p-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis officiis ad at eius magni numquam sunt unde optio distinctio ratione minus est iste dicta esse, eligendi, perferendis ea. Rem?
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
                <input type="text" id="form1" class="form-control form-control-lg">
                <label for="form1">Your Name</label>
            </div>
            <div class="md-form md-outline form-lg">
                <textarea class="form-control form-control-lg"></textarea>
                <label for="form1">Your Tribute</label>
            </div>
            <div class="text-right">
                <button class="btn btn-black">
                    Add Tribute
                </button>
            </div>
        </fieldset>
    </div>
    <!--First row-->
    <div class="row py-4">

      <!--First column-->
      <div class="col-md-6 mb-4">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

        <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4">Name</h5>
            <p class="text-muted font-weight-light mb-0">Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and traveling.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--First column-->

      <!--Second column-->
      <div class="col-md-6 mb-4">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

            <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4">Name</h5>
            <p class="text-muted font-weight-light mb-0">Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and traveling.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--Second column-->
      <div class="col-md-6 mb-4">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

            <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4">Name</h5>
            <p class="text-muted font-weight-light mb-0">Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and traveling.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--Second column-->
      <div class="col-md-6 mb-4">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

            <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4">Name</h5>
            <p class="text-muted font-weight-light mb-0">Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and traveling.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--Second column-->
      <div class="col-md-6 mb-4">

        <!-- Card -->
        <a href="#!" class="card hoverable">
          
          <!-- Card content -->
          <div class="card-body">

            <p><i class="fas fa-comments fa-3x purple-text"></i></p>
            <h5 class="dark-grey-text my-4">Name</h5>
            <p class="text-muted font-weight-light mb-0">Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and traveling.</p>

          </div>

        </a>
        <!-- Card -->

      </div>
      <!--Second column-->
        
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
              <div class="row">
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/andy.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/man.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/granny.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/manny.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/butah.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/man3.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/andy.jpg" class="img-fluid " alt="smaple image" width="100%">
                  </div>
                  <div class="col-md-3 h-100">
                    <img src="../assets/images/port.jpg" class="img-fluid" alt="smaple image" width="100%">
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

  }
</style>

<script>
export default {
    name:'ViewMemorial',
    data(){
        return{
            currentPage : 'about'
        }
    },
    methods:{
        changeTab(currentTab){
            this.currentPage = currentTab;
        }
    }
}
</script>
