<template>
  <b-row>
    <!-- Project 1  -->
    
    <b-col md="12" sm="12" >
      <b-card
        border-variant="inverse"
        header="Opem S.A"
        header-bg-variant="inverse"
        header-text-variant="goldens"
        align="center"
        tag="article"
        style="max-width: auto"
        class="mb-5 mt-2 m-4"
      >
        <b-card-img class="mb-2" src="../../../public/py-1.png" alt="cat"></b-card-img>
        <b-card-text >
          Here brief description of the project
        </b-card-text>
        <b-list-group flush>
         
          <b-list-group-item class="d-flex  justify-content-center">
            <b-badge pill variant="secondary">NodeJs</b-badge>
            <b-badge pill variant="secondary">VueJs</b-badge>
          </b-list-group-item>
          <b-list-group-item>
           <b-badge pill variant="success">Deployed</b-badge>
          </b-list-group-item>
          <b-list-group-item>
            Spotify
            Family
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
<style src="./Project.scss" lang="scss"></style>