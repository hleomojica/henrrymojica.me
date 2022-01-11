<template>
  <div>
    <b-row>
      <b-col class="md-12">
        <VueSlickCarousel v-bind="settings">
          <div v-for="project in projects" :key="project.id">
            <project :projectdata=project></project>
          </div>
        </VueSlickCarousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Project from "./Project.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { dataProjects } from "./data";

export default {
  components: { Project, VueSlickCarousel },
  data() {
    return {
      projects: dataProjects,
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = slide;
    },
    onSlideEnd(slide) {
      this.sliding = slide;
    },
  },
};
</script>
<style src="./Project.scss" lang="scss"></style>