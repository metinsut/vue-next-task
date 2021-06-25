<template>
  <router-link to="/" class="m-2 text-gray-500 text-xl"
    >Back to List</router-link
  >
  <div
    v-if="event && Object.keys(event).length !== 0"
    class="p-2 m-2 grid gap-2 border"
  >
    <h1>{{ event.name }}</h1>
    <p>{{ event.info }}</p>
    <img :src="event.images[0]?.url" :alt="event?.name" />
    <p>{{ event.dates?.start?.dateTime }}</p>
    <p>Ticket Limit: {{ event.accessibility?.ticketLimit }}</p>
    <p v-if="event.priceRanges">
      {{
        event.priceRanges[0]?.min +
        " to " +
        event.priceRanges[0]?.max +
        " " +
        event.priceRanges[0]?.currency
      }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    this.fetchEvent();
  },
  methods: {
    async fetchEvent() {
      const id = this.$route.params.id;
      const URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json`;
      const API_KEY = "LDLZnN5rsG6XzzggdGjqAmrvVw4P7iFS";
      const queryParams = new URLSearchParams({
        apikey: API_KEY,
      });
      const response = await fetch(URL + "?" + queryParams);
      const result = await response.json();
      this.event = result;
    },
  },
};
</script>
