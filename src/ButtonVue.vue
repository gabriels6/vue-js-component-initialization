<!--template - component structure HTML-->
<template>
    <button @click="click">
      Click {{ count }} times
    </button>
</template>

<!-- script - Vue config, import, etc-->
<script>

export default {
  name: 'ButtonVue',
  // data - component state
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
};

</script>

<!-- style - CSS -->
<style lang="scss">

</style>
