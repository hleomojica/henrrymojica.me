<template>
  <div class="dashboard-page">
    <Particles
      id="tsparticles"
      :options="{
        fpsLimit: 60,
        particles: {
          color: {
            value: '#000',
          },
          move: {
            enable: true,
          },
          links: {
            enable: true,
            color: '#000',
          },
        },
      }"
    />
    <!-- skills section -->
    <b-row>
      <b-col md="12">
        <Widget>
          <!-- About Card -->
          <transition name="fade" appear>
            <Card />
          </transition>

          <Skills />
        </Widget>
      </b-col>
    </b-row>
    <!-- Projects section -->
    <b-row>
      <b-col md="12">
        <Widget
          title="<h5>Recent  <span class='fw-semi-bold'>Projects</span></h5>"
          customHeader
        >
          <ProjectList />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import BigStat from "./components/BigStat/BigStat";
import mock from "./mock";
import { Chart } from "highcharts-vue";
import Card from "@/components/Card/Card";
import Skills from "@/components/Skills/Skills";

import ProjectList from "@/components/Projects/ProjectList";

export default {
  name: "Dashboard",
  components: {
    Widget,
    BigStat,
    highcharts: Chart,
    Card,
    Skills,
    ProjectList,
  },
  data() {
    return {
      mock,
      show: true,
    };
  },
  methods: {
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
    getRevenueData() {
      const data = [];
      const seriesCount = 3;
      const accessories = ["SMX", "Direct", "Networks"];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
  },
  computed: {
    donut() {
      let revenueData = this.getRevenueData();
      let { danger, info, primary } = this.appConfig.colors;
      let series = [
        {
          name: "Revenue",
          data: revenueData.map((s) => {
            return {
              name: s.label,
              y: s.data,
            };
          }),
        },
      ];
      return {
        chart: {
          type: "pie",
          height: 120,
        },
        credits: {
          enabled: false,
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1,
                },
              },
            },
          },
        },
        colors: [danger, info, primary],
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          itemStyle: {
            color: "#495057",
            fontWeight: 100,
            fontFamily: "Montserrat",
          },
          itemMarginBottom: 5,
          symbolRadius: 0,
        },
        exporting: {
          enabled: false,
        },
        series,
      };
    },
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
