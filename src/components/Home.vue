<template>

  <div>

    <h2>Set Local City</h2>

    <form v-on:submit.prevent="getCities">
        <p>Enter city name: <input type="text" v-model="query" placeholder="Three Lakes"> <button type="submit">Go</button></p>
    </form>

    <load-spinner v-if="showLoading"></load-spinner>

    <ul class="cities" v-if="results && results.list.length > 0">
      <li v-for="city in results.list">
        <h2>{{ city.name }}, {{ city.sys.country }}</h2>
        <p><router-link v-bind:to="{ name: 'CurrentWeather', params: { cityID: city.id } }"> Get Coat </router-link></router-link></p>
        
      </li>
    </ul>

    <error-list v-else-if="errors.length > 0" v-bind:errorList="errors"></error-list>
  </div>

</template>


<script>
import {API} from '@/common/api';
import ErrorList from "@/components/ErrorList";
import CubeSpinner from '@/components/CubeSpinner';

export default {
  name: 'CitySearch',
  
  data () {
    return {
      results: null,
      query: '',
      showLoading: false,
      errors: []
    }
  },

  methods: {

    getCities: function () {
      this.results = null;
      this.showLoading = true;

        API.get('find', {
          params: {
            q: this.query
          }
        })
        .then(response => {
          this.results = response.data;
          this.showLoading = false;

        })
        .catch(error => {
         this.messages.push(error)
         this.showLoading = false;
       });
      }  
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
  margin: 5px;
}
a {
  color: #42b983;
}
</style>
