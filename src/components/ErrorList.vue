<template>
    <div v-else-if="errors.length > 0">
      <h2>There was an error fetching weather data.</h2>
      <ul class="errors">
        <li v-for="error in ErrorList">{{ error }}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'ErrorList',
  data () {
    return {
    }
  },
    props: {
        ErrorList: []
    }
}
</script>
<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
</style>