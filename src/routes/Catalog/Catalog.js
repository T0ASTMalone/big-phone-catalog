import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PhoneService from "../../services/catalog-service";
const PAGE_SIZE = 10;
const Catalog = () => {
  const [catalog, setCatalog] = useState(null);
  const [page, setPage] = useState(0);

  const updatePage = (newPage) => {
    let response = PhoneService.findAllPaginate(newPage, PAGE_SIZE);

    if ((newPage !== page || newPage === 0 )&& newPage >= 0 && response.results.length > 0) {
      setCatalog(response);
      setPage(newPage);
    }

  };

  useEffect(() => {
    updatePage(0);
  }, []);

  const handleUpdatePage = (newPage) => {
    updatePage(newPage);
  };

  return (
    <div>
      {catalog !== null && (
        <Carousel catalog={catalog} page={page} handleUpdatePage={handleUpdatePage} />
      )}
    </div>
  );
};

export default Catalog;
