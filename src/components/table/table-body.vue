<template>
  <table class="table-fixed border-solid border-gray-500">
    <thead>
      <tr>
        <th v-for="item in tableColumn" :key="item" class="text-center">
          {{ item.Header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="data in tableData"
        :key="data.id"
        @click="goToDetailPage(data.id)"
      >
        <td v-for="item in tableColumn" :key="item">
          {{ data[item.accessor] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    tableData: {},
    tableColumn: {},
  },
  methods: {
    goToDetailPage(id) {
      this.$router.push({ name: "EventDetail", params: { id } });
    },
  },
  updated() {},
};
</script>

<style scoped>
th {
  text-align: left;
  border: 1px solid gray;
  padding: 0.5rem 1rem;
}

td {
  border: 1px solid gray;
  padding: 0.5rem;
  cursor: pointer;
}

tr:hover {
  background-color: grey;
  color: white;
}
</style>
