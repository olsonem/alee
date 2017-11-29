<template>
  <div>
    <h2>Set Local City</h2>
    <form v-on:submit.prevent="getCities">
        <p>Enter city name: <input type="text" v-model="query" placeholder="Paris, TX"> <button type="submit">Go</button></p>
    </form>
    <ul class="cities" v-if="results && results.list.length > 0">
      <li v-for="city in results.list">
        <h2>{{ city.name }}, {{ city.sys.country }}</h2>
        <p><router-link v-bind:to="{ name: 'CurrentWeather', params: { cityID: city.id } }">View Current Weather</router-link></p>
      </li>
    </ul>
  </div>
</template>
<script>
import {API} from '@/common/api';

export default {
  name: 'CitySearch',
  data () {
    return {
      results: null,
      query: '',
      showLoading: false,
      messages: [],
      favorites: []
    }
  },


  methods: {

    getCities: function () {
      this.results = null;

        API.get('find', {
          params: {
            q: this.query
          }
        })
        .then(response => {
          this.results = response.data;

        })
        .catch(error => {
         this.messages.push(error)
       });
      }  
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
