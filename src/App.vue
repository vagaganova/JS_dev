<template>
  <div id="app">
    <header class=" header">
      <div class="container header_flex">
        <div class="header_left">
          <router-link to="/"><a class="header__logo" href="">
            <img src="./assets/buba.png" alt="">
          </a></router-link>
          <img src="./assets/lupa.png" alt="">
        </div>
        <div class="header_right">
          <img class="header_item" src="./assets/poloski.png" alt="">
          <img class="header_item" src="./assets/chel.png" alt="">
          <router-link to="/cart"><img class="header_item" src="./assets/korzina.png" alt=""></router-link>
        </div>
      </div>
    </header><!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <footer class="footer">
      <article class="footer_2">
        <div class="text">
          <img src="@/assets/delivery.png" alt="">
          <p class="marginn">
            Free Delivery
          </p>
          <p class="bottom">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="text">
          <img src="@/assets/offprice.png" alt="">
          <p class="marginn">
            Sales & discounts
          </p>
          <p class="bottom">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="text">
          <img src="@/assets/crown.png" alt="">
          <p class="marginn">
            Quality assurance
          </p>
          <p class="bottom">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
      </article>
      <section>

        <div class="back-logo">
          <div class="middle_footer">
            <div class="middle smile">
              <p class="row">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a pulvinar purus condimentum</i>“
              </p>
            </div>
            <div class="subs">
              <h1>SUBSCRIBE</h1>
              <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
              <form class="submitform">
                <input class="emailinput" type="email" placeholder="Enter your email">
                <input class="emailsend" type="button" value="Subscribe">
              </form>

            </div>

          </div>
        </div>

      </section>
      <div class=" footer_flex">
        <div class="footer_left">
          <p class="footer__text">
            © 2021 Brand All Rights Reserved.
          </p>
        </div>
        <div class="footer_right">
          <a class="footer__logo" href="">
            <div class="footer_item"><i class="fa fa-facebook" aria-hidden="true"></i></div>
            <div class="footer_item"><i class="fa fa-instagram" aria-hidden="true"></i></div>
            <div class="footer_item"><i class="fa fa-pinterest" aria-hidden="true"></i></div>
            <div class="footer_item"><i class="fa fa-twitter" aria-hidden="true"></i></div>

          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  @import './font-awesome/font-awesome.css';
  @font-face {
    font-family: Lato;
    src: url(./font-awesome/fonts/Lato-Light.ttf);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  .container{
    max-width: 1160px;
    padding: 0 10px;
    width: 100%;
    margin: 0 auto;
  }
  #app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .header{
      background: #222222;
      padding: 19px 0;
      color: white;
      &_flex {
        display: flex;
        justify-content: space-between;
      }
      &_logo{
        margin-right: 41px;
      }
      &_item:not(:last-child){
        margin-right: 33px;
      }
    }
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .knopka{
    width: 211px;
    height: 47px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    background: white;
    color: #F26376;
    display: flex;
    border: 1px solid #FF6A6A;
    align-items: center;
    justify-content: center;
  }
  .knopka img{
    margin-right: 25px;
    height: 2em;
  }
  .knopka_position{
    justify-content: center;
    display: flex;
    padding-top: 48px;
    margin-bottom: 95px;
  }
  .footer_2{
    font-family: 'Lato', sans-serif;
    width: 100%;
    padding: 104px 0 ;
    background: #222224;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .text{

    font-family: 'Lato';
    color: #FBFBFB;;
    font-style: normal;
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    text-align: center;
    /* padding: 25px 16px 20px 28px;*/
    width: 360px;
    gap: 30px;
  }
  .text img {
    height: 40px;
  }
  .back-logo{
    width: 100%;
    background: center / cover no-repeat url(./assets/back-logo.jpg);
    margin: auto;
    position: relative;

  }
  .back-logo img{
    display: block;
    width: 100%;
  }
  .footer__logo{
    margin-right: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: unset;
  }
  .footer_item{
    background-color: white;
    width: 23px;
    height: 24px;
    justify-content: center;
    display: flex;
    align-items: center;
    color: black;
  }

  .footer_item:not(:last-child){
    margin-right: 7px;
  }
  .footer_flex{
    display: flex;
    justify-content: space-between;
    background-color: #222224;

  }
  .footer__text{
    font-family: 'Lato', sans-serif;
    margin: 1em;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FBFBFB;
  }
  .footer_right{
    vertical-align: middle;
    display: flex;
  }
  .marginn{
    margin-top: 23px;
    margin-bottom: 16px;
    font-weight: 600;
    font-style: Regular;
    font-size: 19.96px;
    line-height: 100%;

    vertical-align: Top;
    fill: Solid;
  }
  .bottom{
    font-size: 13.97px;
    line-height: 17px;
    text-align: center;
    vertical-align: top;
    fill: Solid;
    max-width: 320px;
    margin: auto;

  }
  .middle_footer{
    background: hsla(0, 0%, 96%, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 5em 0;
  }
  .middle,
  .subs {

    flex-direction: column;
    width: 557px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.smile{
      background:top / 85px no-repeat url(./assets/smile.png);
    }
    & p.row{
      margin-top: 100px;
    }
  }

  .subs .submitform {
    margin-top: 32px;
    display: flex;
  }

  .subs .emailinput {
    border-radius: 1.5em 0 0 1.5em;
    border: unset;
    background: #E1E1E1;
    font-size: 14px;
    line-height: 32px;
    padding: 6px 0 6px 22px;
  }

  .subs .emailsend {
    background: #F16D7F;
    color: white;
    font-size: 14px;
    border: unset;
    line-height: 32px;
    padding: 6px 8px 6px 8px;
    border-radius: 0 1.5em 1.5em 0;
    /* display: inline; */
  }
</style>
