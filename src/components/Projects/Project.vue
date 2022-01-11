<template>
  <b-row>
    <!-- Project 1  -->

    <b-col md="12" sm="12">
      <b-card
        border-variant="inverse"
        :header="this.projectdata.name"
        header-bg-variant="inverse"
        header-text-variant="goldens"
        align="center"
        tag="article"
        style="max-width: auto"
        class="mb-5 mt-2 m-4"
      >
        <b-card-img
          class="mb-2"
          :src="this.projectdata.img"
          alt="cat"
        ></b-card-img>
        <b-card-text> {{ this.projectdata.description }} </b-card-text>
        <b-list-group flush>
          <b-list-group-item>
            <b-badge
              pill
              variant="secondary"
              v-for="tech in this.projectdata.tech"
              :key="tech"
              >{{ tech }}</b-badge
            >
            <b-badge pill variant="secondary">VueJs</b-badge>
          </b-list-group-item>
          <b-list-group-item>
            <b-badge pill variant="success">{{
              this.projectdata.status
            }}</b-badge>
          </b-list-group-item>

          <b-list-group-item></b-list-group-item>
        </b-list-group>
        <br />
        <b-button disabled v-b-modal.modal-2 variant="inverse">Demo</b-button>
        <br />
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    projectdata: { type: Object },
  },
  mounted() {
    console.log(this.projectdata);
  },
};
</script>

<style src="./Project.scss" lang="scss"></style>
