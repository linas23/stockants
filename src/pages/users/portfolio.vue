<template>
  <div class="container">
    <h1>portfolio</h1>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { getDashboardData } from "../../api/user";
export default {
  setup() {
    onMounted(async () => {
      const res = await getDashboardData();
      console.log("res: ", res);
    });
  },
};
</script>
