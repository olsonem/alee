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
            (this.weatherData.main.temp <= 20 ) 
            ) {
            this.coat="skisuit.jpg" ;
          } 
          else if (
            (this.weatherData.main.temp >= 21) && 
            (this.weatherData.main.temp <= 50) && 
            (
              (this.weatherData.weather[0].main !== 'Rain') || 
              (this.weatherData.weather[0].main !== 'Thunderstorm') ||
              (this.weatherData.weather[0].main !== 'Drizzle') 
            )
          ) {
            this.coat="parka.jpg";
          }
          else if (
            (this.weatherData.main.temp >= 21 ) && 
            (this.weatherData.main.temp <= 50) && 
            (
              (this.weatherData.weather[0].main === 'Rain') ||
              (this.weatherData.weather[0].main === 'Thunderstorm') ||
              (this.weatherData.weather[0].main === 'Drizzle') 
              )
           ) {
            this.coat="raincoat.jpg"
          }
 
          else if (
            (this.weatherData.main.temp >= 51) &&
            (this.weatherData.main.temp <= 70) &&
            (this.weatherData.weather[0].main !== 'Clear')
          ) {
            this.coat="jacket.jpg"
          }
          else if (
            (this.weatherData.main.temp >= 51) && 
            (this.weatherData.main.temp <= 70) && 
            (this.weatherData.weather[0].main === 'Clear')
            ) {
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

