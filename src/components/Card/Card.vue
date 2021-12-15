<template>
  <div>
    <b-card class="overflow-hidden text-center">
      <b-row no-gutters>
        <b-col
          md="12"
          lg="12"
          sm="12"
          class="d-flex align-items-center justify-content-center"
        >
          <div class="spin circle">
            <b-card-img
              src="../../assets/me2.jpeg"
              alt="Image"
              class="img-card img-fluid"
            ></b-card-img>
          </div>
        </b-col>
        <b-col md="12" lg="12" sm="12">
          <b-button class="mt-1 btn-name" v-b-toggle.my-collapse> HENRRY MOJICA </b-button>
          <b-collapse id="my-collapse">
            <b-card-body>
              <b-card-sub-title class="mb-2">
                <h5>Full Stack Software developer</h5>
              </b-card-sub-title>
              <b-card-text class="text-justify">
                Curious and passionate about learning new stuff. 2+ years of
                experience building web applications and Enterprise solutions
                for Med/big companies ERP, POS. Knowledge using DevTools stacks
                and teamwork solutions such as JIRA, Confluence, and GIT
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Loader from "../Loader/Loader";

export default {
  name: "Card",
  props: {},
  components: { Loader },
  computed: {
    randomId() {
      return Math.floor(Math.random() * 100);
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style src="./Card.scss" lang="scss"  scoped/>
