<template>
  <div class="container-fluid" id="ps-footer">
    <div class="row">
    	<div class="col-xs-12">
        <div class="footer-text">
          Copyright 2017 Polar Shades. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'site-footer'
  }

</script>

<style scoped>

@font-face {
    font-family: "Museo";
    src: url("../../assets/fonts/MuseoSans_500-webfont.woff") format('woff');
}

  #ps-footer {
    margin-bottom: 0px;
    height: 60px;
    padding-top: 5px;
    font-weight: 300;
    background: #f8f8f8
  }

  .footer-text {
    padding-top: 15px;
    margin-right: 20px;
    font-family: 'Museo';
    text-align: right
  }

  @media screen and (max-width: 768px) {
    .footer-text {
      text-align: center;
      margin: 0 auto;
    }
  }

</style>
