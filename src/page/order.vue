<template>
  <div>
      <titlecomponent></titlecomponent>
      <div>
        123
        122121
        142121
        132121
      </div>
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

<style scoped lang="scss">
div{
  margin-top:2rem;
}
</style>