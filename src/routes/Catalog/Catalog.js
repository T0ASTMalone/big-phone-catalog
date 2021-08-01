import React, { useEffect, useLayoutEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PhoneService from "../../services/catalog-service";

const Catalog = () => {
  const [catalog, setCatalog] = useState(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [lastPage, setLastPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

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

    if (newPage > page) {
      setCatalog(nextPage);
    } else {
      setCatalog(lastPage);
    }

    setPage(newPage);
  };

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

  useEffect(() => {
    let lastPage = PhoneService.findAllPaginate(page - 1, pageSize);
    let nextPage = PhoneService.findAllPaginate(page + 1, pageSize);
    setLastPage(lastPage);
    setNextPage(nextPage);
  }, [page]);

  useEffect(() => {
    let newPage = PhoneService.findAllPaginate(page, pageSize);
    setCatalog(newPage);
  }, [pageSize]);

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
