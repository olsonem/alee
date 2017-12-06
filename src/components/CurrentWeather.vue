<template>
  <div>
    <h2>Current Weather <span v-if="weatherData"> for {{ weatherData.name }}, {{weatherData.sys.country }}</span></h2>
    <p>
      <router-link to="/">Home</router-link> 

    </p>
    <div v-if="weatherData">
        <img v-bind:src="'../static/' + coat">

    </div>
    <div>  
        <router-link v-bind:to="{ name: 'Accessories', params: { cityID: $route.params.cityID } }">View Suggested Accessories? </router-link>
    </div>

  </div>
</template>

<script>
import {API} from '@/common/api';

export default {
  name: 'Coat',

  data () {
    return {
      weatherData: null,
      coat: ""

    }
  },
  methods: {
      getCoat: function(){
          if (
            (this.weatherData.main.temp >= -30) && 
            (this.weatherData.main.temp <= 15 )
            ) {
            this.coat="skisuit.jpg" ;
          } 
          else if (
            (this.weatherData.main.temp >= 0) && 
            (this.weatherData.main.temp <= 45) && 
            (
              (this.weatherData.weather[0].main === 'clear Sky') || 
              (this.weatherData.weather[0].main === 'few Clouds') || 
              (this.weatherData.weather[0].main === 'scattered Clouds') ||
              (this.weatherData.weather[0].main === 'broken Clouds') ||
              (this.weatherData.weather[0].main === 'snow')
            )
          ) {
            this.coat="parka.jpg";
          }
          else if (
            (this.weatherData.main.temp >= 45) && 
            (this.weatherData.main.temp <= 60) && 
            (
              (this.weatherData.weather[0].main === 'mist') ||
              (this.weatherData.weather[0].main === 'Clear Sky')
              ) 
          ){
            this.coat="trench.jpg"
          } 
          else if (
            (this.weatherData.main.temp >= 38) && 
            (this.weatherData.main.temp < 75) && 
            (
              (this.weatherData.weather[0].main === 'rain') ||
              (this.weatherData.weather[0].main === 'mist') ||
              (this.weatherData.weather[0].main === 'shower rain')
              )
           ) {
            this.coat="raincoat.jpg"
          }
          else if (
            (this.weatherData.main.temp >=55) &&
            (this.weatherData.main.temp <=60)
          ) {
            this.coat="jacket.jpg"
          }
          else if (
            (this.weatherData.main.temp >= 50) && 
            (this.weatherData.main.temp <= 70) && 
            (this.weatherData.weather[0].main === 'clear Sky')) {
            this.coat="sweater.jpg"
          }
          else 
            this.coat=""
          
      }
  },
  created () {
    this.showLoading = true;
    

      API.get('weather', {
        params: {
            id: this.$route.params.cityID

        }
      })
      .then(response => {
        this.showLoading = false;
        this.weatherData = response.data;
        this.getCoat();
      })
      .catch(error => {
        this.showLoading = false;
      });
  }
}
</script>

<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>

