import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PhoneService from "../../services/catalog-service";

const Catalog = () => {
  const [catalog, setCatalog] = useState(null);
  const [page, setPage] = useState(0);

  const updatePage = (newPage) => {
    let response = PhoneService.findAllPaginate(newPage, 12);
    setCatalog(response);
    setPage(newPage);
  };

  useEffect(() => {
    updatePage(0);
  }, []);

  const handleUpdatePage = (newPage) => {
    newPage !== page && updatePage(newPage, setCatalog);
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
