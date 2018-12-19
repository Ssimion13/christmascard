<template>
  <div class="sidePage">
  <div class="sideTitleDiv">
    <div class="sideDiv">
    One
    </div>
    <div class="sideDiv">
    Two
    </div>
  </div>
  <router-link class="buttons" to="/"> Back to Home </router-link>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidePage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url("../assets/paperbackground.jpg");
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
    transition: background-color 1.0s;
    position: absolute;
    bottom: 10px;
  }
  .sideTitleDiv {
      display: flex;
      width: 100%;
      height: 100%;
  }
  .sideDiv {
      width: 50%;
      height: 100vh;
      display: flex;
      justify-content: center
  }

</style>
