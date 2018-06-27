<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome!</h3>
          <span class="subheading">This site contains visualisation of data using al kinds of dashboards.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out this dashboard!</div>
          <v-btn large color="primary" class="mx-0" :to="{name: 'Dashboard'}">Go there</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
