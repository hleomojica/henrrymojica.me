<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  // created() {

  //   const currentPath = this.$router.history.current.path;

  //   if (window.localStorage.getItem("authenticated") === "false") {
  //     this.$router.push("/login");
  //   }
  //   window.localStorage.setItem("authenticated")

  //   if (currentPath === "/" || currentPath === "/app") {
  //     this.$router.push("/app/dashboard");
  //   }
  // },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
