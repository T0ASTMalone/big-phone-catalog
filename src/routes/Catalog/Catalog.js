import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PhoneService from "../../services/catalog-service";
const PAGE_SIZE = 10;
const Catalog = () => {
  const [catalog, setCatalog] = useState(null);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [atLastPage, setAtLastPage] = useState(false)

  const updatePage = (newPage) => {
    if (newPage < 0 || (nextPage !== null && nextPage.results.length < 1 && newPage > page)) {
      return;
    }

    let response = PhoneService.findAllPaginate(newPage, PAGE_SIZE);

    if ((newPage !== page || newPage === 0) && newPage >= 0 && response.results.length > 0) {
      setCatalog(response);
      setPage(newPage);
      return;
    }

    if (newPage > page) {
      setCatalog(nextPage);
    } else {
      setCatalog(lastPage);
    }

    setPage(newPage);
  };

  useEffect(() => {

    let lastPage = PhoneService.findAllPaginate(page - 1, PAGE_SIZE);
    let nextPage = PhoneService.findAllPaginate(page + 1, PAGE_SIZE);

    setLastPage(lastPage);

    setNextPage(nextPage);
  }, [page]);

  useEffect(() => {
    updatePage(0);
  }, []);

  const handleUpdatePage = (newPage) => {
    updatePage(newPage);
  };

  return (
    <div>
      {catalog !== null && (
        <>
          <Carousel catalog={catalog} last={lastPage} page={page} next={nextPage} handleUpdatePage={handleUpdatePage} />
        </>
      )}
    </div>
  );
};

export default Catalog;
