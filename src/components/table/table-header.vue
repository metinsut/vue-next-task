<template>
  <div class="my-6 grid grid-cols-2 gap-10">
    <label for="search">
      <p class="py-1 text-lg font-bold">Search:</p>
      <input
        class="border-2 h-10 w-full"
        id="search"
        type="text"
        @keyup="handleSearchKeyword"
      />
    </label>
    <label for="sort">
      <p class="py-1 text-lg font-bold">Sort:</p>
      <select
        id="sort"
        v-model="selected"
        @change="handleSortType($event)"
        class="border-solid border-2 text-2xl h-10 w-full"
      >
        <option
          v-for="option in options"
          :value="option.value"
          v-bind:key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "asc",
      options: [
        { text: "Sort By Ascending", value: "asc" },
        { text: "Sort By Descending", value: "desc" },
      ],
    };
  },
  props: {
    updateSearchKeyword: { type: Function },
    updateSortType: { type: Function },
  },
  methods: {
    handleSearchKeyword(e) {
      const value = e.target.value;
      this.updateSearchKeyword(value);
    },
    handleSortType(e) {
      const value = e.target.value;
      this.updateSortType(value);
    },
  },
};
</script>

<style scoped></style>
