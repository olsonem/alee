<template>
  <div>
    <h2>Current Weather <span v-if="weatherData"> for {{ weatherData.name }}, {{weatherData.sys.country }}</span></h2>
    <p>
      <router-link to="/">Home</router-link> |

    </p>
    <div v-if="weatherData">
        <img v-bind:src="'../static/' + coat">

    </div>

  </div>
</template>

<script>
import {API} from '@/common/api';

export default {
  name: 'CurrentWeather',

  data () {
    return {
      weatherData: null,
      coat: ""

    }
  },
  methods: {
      getCoat: function(){
          if (weatherData.main.rain < 1) && (weatherData.main.temp >38 & < 75)
          this.coat="raincoat.jpg";
          else if (weatherData.main.rain === 0) && (weatherData.mail.temp)
          this.coat="sweater.jpg";
          }
         
      
  },
  created () {
    this.showLoading = true;
    let cacheLabel = `currentWeather_${this.$route.params.cityID}`;
    let cacheExpiry = 15 * 60 * 1000;  //15 minutes
    

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
