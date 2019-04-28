<template>
  <div>
      <titlecomponent></titlecomponent>
      <div class="contain"></div>
      <foot></foot>
  </div>
</template>

<script>
import foot from "../components/foot";
import titlecomponent from "../components/title";
export default {
  data() {
    return{
      
    }
  },
  components: {
    foot,
    titlecomponent
  }
};
</script>

<style scoped>
</style>