import React, { useEffect, useLayoutEffect, useState } from "react";
import Carousel from "components/Carousel/Carousel";
import PhoneService from "services/catalog-service";

/**
 * Catalog page
 * 
 */

const Catalog = () => {
  // current page catalog items
  const [catalog, setCatalog] = useState(null);
  // current page number
  const [page, setPage] = useState(0);
  // current page size
  const [pageSize, setPageSize] = useState(10);
  // last page's items
  const [lastPage, setLastPage] = useState(null);
  // next page's items
  const [nextPage, setNextPage] = useState(null);

  // updates page 
  const updatePage = (newPage) => {
    if (newPage < 0 || (nextPage !== null && nextPage.results.length < 1 && newPage > page)) {
      return;
    }

    let response = PhoneService.findAllPaginate(newPage, pageSize);

    if (newPage >= 0 && response.results.length > 0) {
      setCatalog(response);
      setPage(newPage);
      return;
    }

    // doesn't have to request the next page since it's
    // already been fetched
    if (newPage > page) {
      setCatalog(nextPage);
    } else {
      setCatalog(lastPage);
    }

    setPage(newPage);
  };

  // gets page size based on window width
  const getPageSize = () => {
    let pageSize = 10;
    let width = window.innerWidth;
    switch (true) {
      case width <= 850:
        pageSize = 6;
        break;
      case width < 1000:
        pageSize = 8;
        break;
      default:
        break;
    }
    return pageSize;
  };

  // loads last and next page on page update
  useEffect(() => {
    let lastPage = PhoneService.findAllPaginate(page - 1, pageSize);
    let nextPage = PhoneService.findAllPaginate(page + 1, pageSize);
    setLastPage(lastPage);
    setNextPage(nextPage);
  }, [page]);


  // updates current page when page size changes
  useEffect(() => {
    let newPage = PhoneService.findAllPaginate(page, pageSize);
    setCatalog(newPage);
  }, [pageSize]);

  // Will fetch first page of catalog on initial load
  useLayoutEffect(() => {
    const handleResize = () => {
      const size = getPageSize();
      if (size !== pageSize || catalog === null || catalog.length !== pageSize) {
        setPageSize(size);
      }
    };

    if (catalog == null) {
      updatePage(0);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  // call back for next / prev page buttons
  const handleUpdatePage = (newPage) => {
    updatePage(newPage);
  };

  return (
    <>
      {catalog !== null && (
        <Carousel
          catalog={catalog}
          last={lastPage}
          page={page}
          next={nextPage}
          handleUpdatePage={handleUpdatePage}
        />
      )}
    </>
  );
};

export default Catalog;
