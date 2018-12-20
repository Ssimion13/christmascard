<template>
  <div class="sidePage">
  <div class="sideTitleDiv">
    <div class="sideDiv">
      <div class="dear">
        Dear Mom:
      </div>
      <div class="paragraph">
        I want to wish a Merry Christmas to the best mom in the world. I really want to thank you Mom for all the support you've given me
        my whole life. You always have my back when there's a problem, you always support me (even if it means saying something I don't want to hear!), and you've
        always made it very clear that I am loved. You've been the best support I could ever ask for, and I hope one day I can repay the kindness and support
        you've given me.  I might not always show it, but I always appreciate the advice you give me, and I know that no matter what the problem I might face, my mom 
        will always be there to help me out, and for that, I am eternally grateful.
        <br/>
        <br/>
      </div>
      <div class="paragraph">
          I'll be leaving this house soon after you receive this, and I will dearly miss your cooking (yes, I'm serious, though I wish you used less peppers!) and 
        all the things you have done to make my life easier. I'm so very blessed to have had a chance to bond with you more in this last year, be it crossword puzzles,
        talking in the living room, watching movies, or <i> agh </i> you trying to find me a wife; you're a great person and I really enjoy spending time with you (when you're not lecturing me :p)
        Merry Christmas, Mom, and thank you.

        <br/>
        <br/>
        Your son,
        <br/>
        --Scott
      </div>
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
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
      align-items: center;
      justify-content: center;
  }
  .sideDiv {
      width: 50%;
      height: 100vh;
      display: flex;
      flex-direction: column;
  }
  .dear {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    text-indent: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
  }
  .paragraph {
    text-indent: 30px;

  }

  * {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

</style>