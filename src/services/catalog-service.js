import catalog from "./dummy-catalog"

const PhoneService = {
  findAll : () => {
    return {results: catalog, total: catalog.length};
  },

  findByPrice: (price) => {
    let phones = catalog.filter(c => c.price === price);
    return {results: phones, total: catalog.length};
  },

  findAllPaginate: (page, pageSize = 10) => {
    return {results: catalog.slice(page * pageSize, pageSize), total: catalog.length}
  }
}

export default PhoneService;