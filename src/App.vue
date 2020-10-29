<template>
  <article class="container">
    <h1>Gallery</h1>
    <Gallery/>
  </article>
</template>

<script>
import Gallery from "@/components/Gallery";

export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #33857b;
}

body {
  background-color: #e6f0ef;
  min-height: 100vh;
}

.container {
  margin: 2%;
}

.container h1 {
  font-size: 3vw;
  font-weight: 500;
}
</style>
