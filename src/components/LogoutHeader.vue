<template>
	<div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">

          <!-- Navbar brand -->
          <a class="navbar-brand" href="#">MissYou</a>

          <!-- Collapse button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapsible content -->
          <div class="collapse navbar-collapse" id="basicExampleNav">
            
            <!-- Links -->
            <ul class="navbar-nav ml-auto">
              <form class="form-inline">
              <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              </div>
            </form>
             <router-link to="/" exact>
                <li class="nav-item">
                  <a class="nav-link" href="#">Home
                   
                  </a>
                </li>
              </router-link>
               <router-link to="/about" exact>
               
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
               </router-link>
              <router-link to="/register" exact v-if="emailUser === null">
              <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
              </li>
              </router-link>
              <router-link to="/login" exact v-if="emailUser === null">
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
              </router-link>
             
              <li class="nav-item" v-if="emailUser !== null">
                <a class="nav-link" href="#" @click="logOut">Logout</a>
              </li>
              
              <li class="nav-item">
                <a class="btn btn-sm btn-purple" href="#">Donate</a>
              </li>
            </ul>
            <!-- Links -->
            
          </div>
          <!-- Collapsible content -->

        </nav>
        <!--/.Navbar-->
		
	</div>
</template>
<style scoped>
  nav{
    background:linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)) !important;
  }
  a.nav-link{
    margin-left: 20px !important;
  }
  nav a.router-link-active:before{
    font-size: 15px;
    font-weight: 600;
    line-height: 27px;
    content: ""; 
    display: block; 
    margin: 0 auto;
    margin-left: 40%;
    width: 40%; 
    border-top: 3px solid #dfdcdc;
}
</style>

<script>

export default {
    name : 'LogoutHeader',
    data(){
      return{
        emailUser : localStorage.getItem('emailUser')
      }
    },
    methods : {
      logOut(){
        localStorage.setItem('emailUser',null)
        localStorage.clear();
        this.$router.push("/login")
      }
    }
}
</script>