import catalog from "./dummy-catalog";
// Dummy phone service that would normally make a fetch request to an api 
const PhoneService = {
  /**
   * returns a list of phones that match the given price
   * @param {*} price 
   * @returns 
   */
  findByPrice: (price) => {
    let phones = catalog.filter((c) => c.price === price);
    return { results: phones, total: catalog.length };
  },
  /**
   * returns a paginated list of phones
   * @param {*} page 
   * @param {*} pageSize 
   * @returns 
   */
  findAllPaginate: (page = 0, pageSize = 10) => {
    let from = page * pageSize;
    let to = from + pageSize;
    return { results: catalog.slice(from, to), total: catalog.length };
  },
};

export default PhoneService;