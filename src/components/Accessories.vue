<template>
  <div>
    <h2>Current Weather <span v-if="weatherData"> for {{ weatherData.name }}, {{weatherData.sys.country }}</span></h2>
    <p>
      <router-link to="/">Home</router-link> 

    </p>

    <div v-if="weatherData">
        <v-bind:src="'static/' + accessory">

    </div>


  </div>
</template>

<script>
import {API} from '@/common/api';
import ErrorList from "@/components/ErrorList";
import CubeSpinner from '@/components/CubeSpinner';


export default {
  name: 'Acccessories',

  data () {
    return {
      weatherData: null,
      accessory: ""

    }
  },
  methods: {
      getAccessory: function(){
          if  (this.weatherData.weather[0].main === 'Clear') {
            this.accessory="sunglasses.jpg" ;
          } 
          else if (this.weatherData.main.temp <= 30) {
            this.accessory="hat.jpg";
          }
          else if (this.weatherData.weather[0].main === 'Rain') {
            this.accessory="umbrella.jpg"
          } 
          else if (this.weatherData.weather[0].main === 'Snow') {
            this.accessory="scarf.jpg"
          }
          else if (this.weatherData.main.temp <= 45) {
            this.accessory="mitten.jpg"
          }
          else 
            this.accesory=""
          
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
        this.getAccessory();
      })
      .catch(error => {
        this.showLoading = false;
      });
  },
  components: {
    'error-list': ErrorList,    
    'load-spinner': CubeSpinner

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
