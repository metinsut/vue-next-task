<template>
  <div class="grid w-full justify-center p-5">
    <TableHeader
      :updateSearchKeyword="updateSearchKeyword"
      :updateSortType="updateSortType"
    />
    <TableBody :tableData="tableData" :tableColumn="tableColumn" />
    <TablePagination
      :page="page"
      :links="links"
      :changePage="changePage"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body.vue";
import TablePagination from "./table-pagination.vue";
export default {
  components: { TableBody, TableHeader, TablePagination },
  props: {
    tableData: {},
    tableColumn: {},
    currentPage: {},
    page: {},
    links: {},
    changePage: { type: Function },
    updateSearchKeyword: { type: Function },
    updateSortType: { type: Function },
  },
  method: {},
};
</script>
