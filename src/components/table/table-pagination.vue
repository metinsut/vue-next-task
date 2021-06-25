<template>
  <PagePagination
    :value="currentPage"
    :page-count="page?.totalPages ? page.totalPages : 1"
    :margin-pages="2"
    :page-range="5"
    :container-class="'grid grid-flow-col justify-center gap-3 my-6'"
    :page-link-class="'text-2xl text-gray-900'"
    :prev-link-class="'text-2xl text-gray-900'"
    :next-link-class="'text-2xl text-gray-900'"
    :active-class="'text-2xl text-gray-900 font-bold'"
    :click-handler="changeCurrentPage"
  ></PagePagination>
</template>

<script>
import PagePagination from "../../utility/pagination.vue";
export default {
  components: { PagePagination },
  props: {
    currentPage: {},
    page: {},
    links: {},
    changePage: { type: Function },
  },
  methods: {
    changeCurrentPage(pageNum) {
      this.changePage(pageNum);
    },
  },
};
</script>
