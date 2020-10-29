<template>
  <article class='filter'>
    <input type='checkbox' id='checkbox' v-model='showViral' @change='handleFilter'>
    <label for='checkbox'>Show viral</label>
  </article>
</template>

<script>
export default {
  name: 'Filter',
  props: ['handleFilter'],
  data: () => {
    return {
      showViral: true
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
  width: 88.5%;
  min-height: 10vh;
  border: solid 2px #33857b;
  border-radius: 5px;
  font-size: 2vw;
}

</style>
