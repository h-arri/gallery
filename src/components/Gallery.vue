<template>
  <Filter v-bind:handleFilter="handleFilter"/>
  <article class="gallery">
    <ImageCard v-for="image of gallery" v-bind:key="image.id" v-bind:image="image"/>
  </article>
</template>

<script>
import { fetchImages } from "@/api/api";
import ImageCard from "@/components/ImageCard";
import Filter from "@/components/Filter";

export default {
  name: 'Gallery',
  components: { Filter, ImageCard },
  data: () => {
    const handleFilter = () => {
    };

    return {
      gallery: [],
      loading: false,
      error: null,
      handleFilter
    }
  },
  mounted() {
    this.loading = true;
    fetchImages().then(({ data }) => {
      this.loading = false;
      this.gallery = data;
    })
        .catch(error => {
          this.loading = false;
          this.error = error;
        })
  }
}
</script>

<style scoped>

.gallery {
  max-width: 90%;
  margin: 2% auto;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

</style>
