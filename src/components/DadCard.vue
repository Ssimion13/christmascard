<template>
  <div class="sidePage">
  <div class="sideTitleDiv">
    <div class="sideDiv">
      <div class="dear">
        Dear Dad:
      </div>
      <div class="paragraph">
        Merry Christmas! It's been a long year, but I want to celebrate this Christmas as a time to be glad for year I have spent with my loving parents. I'm very blessed to have both you and mom here and to have your support, and
        I am very grateful to have the two of you as my parents. Of course, I'm heading off, back to school and making something of myself at the end of the year... even though this year has not been the best year for myself, 
        I am glad that I have spent a lot of time talking to you, helping you with your book, bouncing ideas off of you, and overall spending quality time with my old man. Maybe it was God's will to give me the chance to spend some more 
        time with my family before I enter the workforce, but regardless of the reason, I'm blessed to have you as my Dad.

        <br/>
        <br/>
      </div>
      <div class="paragraph">
        I wish I had the finances to really give you a Christmas present that you wouldn't respond with by saying "bah, hambug save your money!" (and I promise one day that I will!), because I always feel bad that I'm getting so much
        from you but unable to repay the favor. Even while I'm wherever I may be, I hope that you will come to me if you need help with your books or anything that I can provide assistance with, because I want to be there for you like you have 
        been for me. 

        I'm not very good at conveying myself well in these letter things, but I really want to say thank you for everything, and thank you for being there for me all the time. I know I'm probably standing beside you right now the first time you read this,
        but I mean everything I say here and I'm really thankful. Merry Christmas, Dad.
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
