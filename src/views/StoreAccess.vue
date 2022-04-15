<template>
  <p>Count : {{count}}</p>
  <button type="button" @click="increment">Increment</button>
</template>
<script>
export default { 
  name:'store-access',
  computed: {
    count() {
      return this.$store.state.count //this.$store로 접근
    }
  },
  components: {}, 
  data() {
    return {
      sampleData: ''
    }
  }, 
  setup() {}, 
  created() {}, 
  mounted() {}, 
  unmounted(){}, 
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>