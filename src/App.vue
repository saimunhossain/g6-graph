<template>
  <div id="app">
    <LargeGraphData />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LargeGraphData from "./components/LargeGraphData.vue";

export default defineComponent({
  name: "App",
  components: {
    LargeGraphData
  }
});
</script>
