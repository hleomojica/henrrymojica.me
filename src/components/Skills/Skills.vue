<template>
  <div>
    <b-card no-body class="skills-card">
      <b-nav pills card-header slot="header" v-b-scrollspy:nav-scroller="40">
        <b-nav-item href="#skills" @click="scrollIntoView">Skills</b-nav-item>
        <b-nav-item href="#education" @click="scrollIntoView"
          >Education</b-nav-item
        >
        <b-nav-item href="#experience" @click="scrollIntoView"
          >Experience</b-nav-item
        >
      </b-nav>

      <b-card-body id="nav-scroller" ref="content" class="skills-body">
        <div id="skills" class="pb-4">
          <b-row class="text-center">
            <b-col md="6" sm="12">
              <h5>Back-End</h5>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>JavaScript</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="NodeJS"
                        class="devicon-nodejs-plain"
                      ></i>
                    </td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="ExpressJS"
                        class="devicon-express-original"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="PHP"
                        class="devicon-php-plain"
                      ></i>
                    </td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="Laravel"
                        class="devicon-laravel-plain"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-col>
            <b-col md="6" sm="12">
              <h5>Front-End</h5>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>JavaScript</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="VueJS"
                        class="devicon-vuejs-plain"
                      ></i>
                    </td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="ReactJS"
                        class="devicon-react-plain"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="Bootstrap"
                        class="devicon-bootstrap-plain"
                      ></i>
                    </td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="Material"
                        class="devicon-materialui-plain"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-col>
            <b-col md="6" sm="12">
              <h5>Data Base</h5>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>SQL</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="MySql"
                        class="devicon-mysql-plain"
                      ></i>
                    </td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="PostgreSQL"
                        class="devicon-postgresql-plain"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>NoSQL</td>
                    <td>
                      <i
                        v-b-tooltip.hover
                        title="MongoBD"
                        class="devicon-mongodb-plain"
                      ></i>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>
        </div>

        <div id="education" class="pb-4">
          <hr>
          <b-list-group>
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Bachelor in Systems Engineering</h5>
                <small class="text-muted">2016 - 2018</small>
              </div>

              <p class="mb-1">Unidades Tecnologicas de Santander</p>

              <small class="text-muted"></small>
            </b-list-group-item>

            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Certificate IV in Information Technology</h5>
                <small class="text-muted">2019 - 2020</small>
              </div>
              <p class="mb-1">Academies Australasia Polytechnic</p>
            </b-list-group-item>
          </b-list-group>
        </div>

        <div id="experience">
          <hr>
          <b-list-group>
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">IT Support Officer</h5>
                <small class="text-muted">2021</small>
              </div>

              <p class="mb-1">Monash University</p>

              <small class="text-muted"></small>
            </b-list-group-item>
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Software Engineer</h5>
                <small class="text-muted">2016-2018</small>
              </div>

              <p class="mb-1">TIRESIA SOLUCIONES TECNOLOGICAS S.A.S</p>

              <small class="text-muted"
                >Full Software Developer building/maintaining ERP, POS software
                using: Perl, HTML, CSS, JavaScript, PHP, and ActionScript.
                Database: MySQL in Linux environment.</small
              >
            </b-list-group-item>
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Full Stack Developer</h5>
                <small class="text-muted">2015-2016</small>
              </div>

              <p class="mb-1">Freelance</p>

              <small class="text-muted"
                >Developed web application for a small real state agency using
                PHP, JavaScript, CSS and PostgreSQL</small
              >
            </b-list-group-item>

            
          </b-list-group>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        //console.log(el.offsetTop);
        this.$refs.content.scrollTop = el.offsetTop - 20;
      }
    },
  },
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
    };
  },
  mounted() {
    // this.$refs.content.scrollTop = el.offsetTop;
  },
};
</script>

<style src="./Skills.scss" lang="scss" />