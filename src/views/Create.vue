<template>
  <div class>
    <div class="bg">
      <div class="text-center container">
        <h1 class="white-text py-3">Create Memorial Page</h1>
      </div>
    </div>

    <div class="container py-5">
      <form class="my-5 mx-md-5">
        <div class="card z-depth-5" style="background : transparent">
          <!--Card content-->
          <div class="card-body">
            <!-- Form -->
            <form class="text-center">
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <label for="firstname" class="float-left text-primary">First Name</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="firstname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="lastname" class="float-left text-primary">Last Name</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="lastname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="gender" class="float-left text-primary">Gender</label>
                    <select class="form-control mb-4" ref="gender" required>
                      <option disabled selected>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="relationship" class="float-left text-primary">Relationship</label>
                    <select class="form-control mb-4" ref="relationship" required>
                      <option disabled selected>Relationship</option>
                      <option value="mother">Mother</option>
                      <option value="father">Father</option>
                      <option value="sister">Sister</option>
                      <option value="brother">Brother</option>
                      <option value="friend">Friend</option>
                      <option value="others">Others</option>
                    </select>
                    <!-- <input type="text"  class="form-control mb-4" ref="relationship" placeholder="relationship" required> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="dateOfBirth" class="float-left text-primary">Date of birth</label>
                    <input
                      type="date"
                      class="form-control mb-4"
                      ref="dateOfBirth"
                      placeholder="Date of Birth"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="countryOfBirth" class="float-left text-primary">Country of birth</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="countryOfBirth"
                      placeholder="Country of Birth"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="stateOfBirth" class="float-left text-primary">State of birth</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="stateOfBirth"
                      placeholder="State of Birth"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="cityOfBirth" class="float-left text-primary">City of birth</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="cityOfBirth"
                      placeholder="City of Birth"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="dateOfDeath" class="float-left text-primary">Date of death</label>
                    <input
                      type="date"
                      class="form-control mb-4"
                      ref="dateOfDeath"
                      placeholder="Date of Death"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="countryOfDeath" class="float-left text-primary">Country of death</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="countryOfDeath"
                      placeholder="Country of Death"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="stateOfDeath" class="float-left text-primary">State of death</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="stateOfDeath"
                      placeholder="State of Death"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="cityOfDeath" class="float-left text-primary">City of death</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="cityOfDeath"
                      placeholder="City of Death"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label
                      for="specialDesignation"
                      class="float-left text-primary"
                    >Special Deesignation</label>
                    <select class="form-control mb-4" ref="specialDesignation" required>
                      <option disabled selected>Special Deesignation if applies</option>
                      <option value="No designation">No designation</option>
                      <option value="Military Verteran">Military Verteran</option>
                      <option value="First Responder">First Responder</option>
                      <option value="COVID-19 Victim">COVID-19 Victim</option>
                    </select>
                    <!-- <input type="text"  class="form-control mb-4" ref="specialDesignation" placeholder="specialDesignation" value="None"> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="webAddress" class="float-left text-primary">Web address</label>
                    <input
                      type="text"
                      class="form-control mb-4"
                      ref="webAddress"
                      placeholder="firstname-lastname"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="about" class="float-left text-primary">About</label>
                    <textarea
                      class="form-control mb-4"
                      v-model="about"
                      placeholder="Why you've decided to create this memorial"
                      required
                    >
                            About...
                        </textarea>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="biography" class="float-left text-primary">Biography</label>
                    <textarea
                      class="form-control mb-4"
                      v-model="biography"
                      placeholder="Biography"
                      required
                    >
                            Biography...
                        </textarea>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label for="image" class="float-left text-primary">Best Picture of your lost one</label>
                    <input
                      type="file"
                      class="form-control mb-4"
                      ref="image"
                      placeholder="image"
                      required
                    />
                  </div>
                </div>
              </div>

              <div v-if="loading && loginErr == ''">Creating ........</div>
              <div class="alert alert-danger" v-if="loginErr != '' && loading == false">{{loginErr}}</div>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-black btn-rounded my-4 waves-effect"
                  @click.prevent="createMemorial()"
                >Create Memorial</button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: linear-gradient(
      to top left,
      rgba(75, 0, 130, 0.6) 50%,
      rgba(128, 0, 128, 0.6)
    ),
    url(../assets/images/milk.jpg) no-repeat no-repeat center center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-size: cover;
  background-attachment: fixed;
}
.h-100 {
  height: 150px !important;
  margin: 0px !important;
  padding: 0px !important;
}
</style>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      loading: false,
      name: localStorage.getItem("name"),
      userToken: localStorage.getItem("userToken"),
      allmemorials: [],
      loginErr: "",
      about: "",
      biography: "",
      userID: localStorage.getItem("userId"),
    };
  },
  methods: {
    createMemorial() {
      this.loading = true;
      let formData = new FormData();
      formData.append("userID", this.userID);
      formData.append("firstname", this.$refs.firstname.value);
      formData.append("lastname", this.$refs.lastname.value);
      formData.append("gender", this.$refs.gender.value);
      formData.append("relationship", this.$refs.relationship.value);
      formData.append("dateOfBirth", this.$refs.dateOfBirth.value);
      formData.append("countryOfBirth", this.$refs.countryOfBirth.value);
      formData.append("stateOfBirth", this.$refs.stateOfBirth.value);
      formData.append("cityOfBirth", this.$refs.cityOfBirth.value);
      formData.append("dateOfDeath", this.$refs.dateOfDeath.value);
      formData.append("countryOfDeath", this.$refs.countryOfDeath.value);
      formData.append("stateOfDeath", this.$refs.stateOfDeath.value);
      formData.append("cityOfDeath", this.$refs.cityOfDeath.value);
      formData.append(
        "specialDesignation",
        this.$refs.specialDesignation.value
      );
      formData.append("webAddress", this.$refs.webAddress.value);
      formData.append("about", this.about);
      formData.append("biography", this.biography);
      formData.append("image", this.$refs.image.value);
      console.log(formData);

      const config = {
        headers: {
          Authorization: "Bearer " + this.userToken,
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post(
          "https://missyou-api.azurewebsites.net/api/v1/auth/create-memorial",
          formData,
          config
        )
        .then((response) => {
          if (response.data["status"] === 200) {
            this.loginErr = response.data["message"];
            router.push("/dashboard");
          } else {
            this.loading = false;
            this.loginErr = response.data["message"];
          }
        })
        .catch((errors) => {
          if (errors.response) {
            this.loading = false;
            // console.log(data)
            if (errors.response.data["errors"]) {
              let err = Object.values(errors.response.data["errors"][0]);
              this.loginErr = err[0];
            }
          }

          // this.errored = true
        });
    },
  },
};
</script>
