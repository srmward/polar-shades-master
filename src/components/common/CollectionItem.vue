<template>
  <div class="container product-img-container">
    <div class="row">
      <div class="col-xs-12 col-md-6 img-container">
        <slot>
        </slot>
      </div>
      <div class="col-xs-12 col-md-6 flex-container">
        <h3>{{productTitle}}</h3>
        <p>{{productDesc}}</p>
        <div v-if="productFeature1" class="keyFeaturesLede">Key Features</div>
        <ul class="productFeaturesList">
          <li v-if="productFeature1">{{productFeature1}}</li>
          <li v-if="productFeature2">{{productFeature2}}</li>
          <li v-if="productFeature3">{{productFeature3}}</li>
          <li v-if="productFeature4">{{productFeature4}}</li>
          <li v-if="productFeature5">{{productFeature5}}</li>
        </ul>
        <div v-if="allSeasonsPiece" class="allSeasonsSectionLede">Proud business collaborator:</div>
        <div v-if="allSeasonsPiece" class="allSeasonsLogoContainer">
          <img v-if="allSeasonsPiece" src="../../assets/all-seasons.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collection-item',
    props: ['productTitle', 'productDesc', 'productFeature1', 'productFeature2', 'productFeature3', 'productFeature4', 'productFeature5', 'allSeasonsPiece']
  }
</script>

<style scoped>
.product-img-container {
  min-height: 300px;
  margin: 75px auto
}

.allSeasonsLogoContainer img {
  margin-top: 25px;
  padding-left: 28pt;
  width: 60%
}

.allSeasonsSectionLede {
  margin-top: 25px;
}

h3 {
  text-align: left;
  padding-left: 30px;
  font-weight: 900;
  font-size: 22px;
  font-family: 'Avenir',sans-serif;
  letter-spacing: 1.5px;
  margin: 0px;
  text-transform: uppercase
}

.flex-container {
  font-family:  'Avenir', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  align-content: space-around;
  min-height: 300px;
  text-align: left
}

.img-container {
  padding-right: 0px!important
}

.productFeaturesList {
  text-align: left;
  padding-left: 45px;
  line-height: 2em
}

.keyFeaturesLede, .allSeasonsSectionLede {
  font-weight: 900;
  padding-left: 30px;
  letter-spacing: 1px;
  font-size: 15px;
  color: #000;
  text-transform: uppercase
}

.keyFeaturesLede {
  margin: 10px 0px;
}

p {
  padding-left: 30px;
  line-height: 2.2em;
  font-size: 18px;
  margin: 25px 0px
}

@media screen and (max-width: 992px) {
  .product-img-container .img-container {
    padding: 20px!important;
  }

  h3 {
    padding-left: 5px
  }

  p {
    padding-left: 10px
  }
}

</style>
