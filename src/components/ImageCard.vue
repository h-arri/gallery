<template>
  <article>
    <h3 @click="handleClick">{{ image.description ?? image.title }}</h3>
    <figure v-lazyload class="image__wrapper">
      <ImageCardSpinner class="image__spinner">
        <img class="image__item" :data-url="image?.images?.[0].link" :alt="image.title" height="80" width="80"/>
      </ImageCardSpinner>
    </figure>
  </article>
  <ImageDetails v-show="true" v-bind:image="image" v-bind:handle-close="handleClick"/>
</template>

<script>
import ImageCardSpinner from "@/components/ImageCardSpinner";
import ImageDetails from "@/components/ImageDetails";

export default {
  name: 'ImageCard',
  components: { ImageCardSpinner, ImageDetails },
  props: {
    image: Object
  },
  data: () => {
    return {
      showModal: false
    }
  },
  methods: {
    handleClick: function () {
      this.showModal = !this.showModal;
    }
  }
}
</script>


<style scoped>
article {
  height: 200px;
  margin: 3%;
  background: #33857b;
  color: #e6f0ef;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}

article:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

article > h3 {
  font-weight: 300;
}

.image__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.image__item {
  width: 100%;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.image__spinner {
  display: none;
  width: 100%;
}
</style>
