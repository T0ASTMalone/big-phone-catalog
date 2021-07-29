import catalog from "./dummy-catalog";

const PhoneService = {
  findAll: () => {
    return { results: catalog, total: catalog.length };
  },

  findByPrice: (price) => {
    let phones = catalog.filter((c) => c.price === price);
    return { results: phones, total: catalog.length };
  },

  findAllPaginate: (page = 0, pageSize = 10) => {
    let from = page * pageSize;
    let to = from + pageSize;
    return { results: catalog.slice(from, to), total: catalog.length };
  },
};

export default PhoneService;