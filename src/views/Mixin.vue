<template>
  <div></div>
</template>
<script>
import ApiMixin from '../api'
export default {
  name: 'mixins-api',
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    }
  },
  async mounted() {
    this.productList = await this.$callAPI("경로", "get")
    console.log(this.productList)
  }, 
}
</script>