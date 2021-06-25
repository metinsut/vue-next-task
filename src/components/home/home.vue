<template>
  <Table
    :events="events"
    :tableColumn="tableColumn"
    :page="page"
    :links="links"
    :changePage="changePage"
    :currentPage="currentPage"
    :updateSearchKeyword="updateSearchKeyword"
    :updateSortType="updateSortType"
  ></Table>
</template>

<script>
import Table from "../table/table.vue";
export default {
  components: { Table },
  name: "App",
  data() {
    return {
      currentPage: 1,
      searchKeyword: "",
      page: null,
      events: null,
      links: null,
      tableColumn: [
        { Header: "Name", accessor: "name" },
        { Header: "Date", accessor: "date" },
        { Header: "Ticket Limit", accessor: "accessibility" },
      ],
    };
  },
  mounted() {
    this.fetchEvents(this.currentPage, this.searchKeyword);
  },
  methods: {
    async fetchEvents(currentPage, searchKeyword) {
      const URL = "https://app.ticketmaster.com/discovery/v2/events.json";
      const API_KEY = "LDLZnN5rsG6XzzggdGjqAmrvVw4P7iFS";
      const PAGE_SIZE = "10";
      const queryParams = new URLSearchParams({
        apikey: API_KEY,
        size: PAGE_SIZE,
        page: currentPage,
        keyword: searchKeyword,
      });
      const response = await fetch(URL + "?" + queryParams);
      const result = await response.json();
      this.page = result.page;
      const pureEvents = result._embedded?.events ?? [];
      this.events = this.normalizeData(pureEvents);
      this.links = result._links;
    },
    normalizeData(data) {
      const fixedData = data.reduce((acc, item) => {
        const newItem = {
          name: item.name,
          date: item.dates?.start?.dateTime,
          url: item.url,
          accessibility: item.accessibility?.ticketLimit,
          id: item.id,
        };
        return [...acc, newItem];
      }, []);
      return fixedData;
    },
    changePage(page) {
      this.currentPage = page;
      this.fetchEvents(page, this.searchKeyword);
    },
    updateSearchKeyword(value) {
      this.searchKeyword = value;
      this.currentPage = 1;
      this.fetchEvents(1, value);
    },

    updateSortType(type) {
      const sortedEventList = this.events.sort((event1, event2) => {
        const item1 = event1.name.toLowerCase();
        const item2 = event2.name.toLowerCase();
        if (type === "asc") {
          if (item1 < item2) return -1;
          if (item1 > item2) return 1;
          return 0;
        }
        if (type === "desc") {
          if (item1 > item2) return -1;
          if (item1 < item2) return 1;
          return 0;
        }
        return 0;
      });
      this.events = sortedEventList;
    },
  },
};
</script>
