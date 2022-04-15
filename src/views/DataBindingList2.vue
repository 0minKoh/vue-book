<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList"></tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: []
    }
  }, 
  setup() {}, 
  created() {
    this.getList()
  }, 
  mounted() {}, 
  unmounted(){}, 
  methods: {
    async getList() {
      this.productList = await this.$api("https://b57674bc-1772-4f23-a771-88e2fca219ae.mock.pstmn.io/list", "get")
    }
  } 
}
</script>
<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    padding: 8px;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>