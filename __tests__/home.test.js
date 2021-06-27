import { mount } from "@vue/test-utils";
import Home from "../../src/components/home/home.vue";
import TableHeader from "../../src/components/table/table-header.vue";
import TableBody from "../../src/components/table/table-body.vue";
import TablePagination from "../../src/components/table/table-pagination.vue";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        _embedded: {
          events: [
            {
              name: "test event",
              data: "20-07-1987",
              url: "www.google.com",
              accessibility: 4,
              id: 123,
            },
          ],
        },
      }),
  })
);

describe("home page event list", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home, {
      methods: { fetchEvents: () => {} },
    });
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("is table components renders", () => {
    console.log(wrapper.componentVM.tableData);
    const tableHeaderWrapper = mount(TableHeader);
    const tableBodyWrapper = mount(TableBody);
    const tablePagWrapper = mount(TablePagination);
    expect(tableHeaderWrapper.exists()).toBe(true);
    expect(tableBodyWrapper.exists()).toBe(true);
    expect(tablePagWrapper.exists()).toBe(true);
  });
});
