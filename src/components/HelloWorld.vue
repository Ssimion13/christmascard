<template>
  <div class="MainPage">
    <div class="buttonHolder">
      <router-link class="buttons" v-bind:class="{ active: isActive1 }" @mouseover.native="changeActivity(1)" @mouseout.native="changeActivity(1)" to="/DadCard"> For Dad </router-link>
      <router-link class="buttons" v-bind:class="{ active: isActive2 }" @mouseover.native="changeActivity(2)" @mouseout.native="changeActivity(2)" to="/MomCard"> For Mom </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive1: false,
      isActive2: false,
    }
  },
  methods: {
    changeActivity: function(checker) {
      console.log("fuck me");
      if(checker === 1){
        this.isActive1 = !this.isActive1
      } else if (checker === 2) {
        this.isActive2 = !this.isActive2
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MainPage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url("../assets/christmaspicture.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  .buttons {
    height: 50px;
    width: 120px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-right: 20px;
    border: 1px solid black;
    color: black !important;
    text-decoration: none;
    font-weight: bolder;
    transition: background-color 1.0s
  }
  .buttonHolder {
    display: flex;
    position: relative;
    top: 32vh;
  }
  .active {
    background-color: lightgrey;
    transition: background-color 1.0s
  }

</style>
