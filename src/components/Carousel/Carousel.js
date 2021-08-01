import React, { useContext, useEffect, useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import "./Carousel.css";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({ catalog, handleUpdatePage, page, last, next }) => {

  const {
    state: { cart },
    dispatch,
  } = useContext(ShopContext);

  const [update, setUpdate] = useState(false)

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  useEffect(() => {

    const t = update;
    setUpdate(!t);

    setTimeout(() => {
      setUpdate(!!t);
    }, 2000)

  }, [page]);

  return (
    <div className="carousel">
      <button
        onClick={() => handleUpdatePage(page - 1)}
        id="backward"
        className="carousel-control btn"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className={"carousel-item-container"}>
        {catalog !== null &&
          catalog.results.map((r, i) => (
            <CarouselItem
              key={i}
              item={r}
              handleAddItem={handleAddToCart}
              inCart={cart.filter((c) => c.brand === r.brand).length > 0}
            />
          ))}
      </div>
      <button
        onClick={() => handleUpdatePage(page + 1)}
        id="forward"
        className="carousel-control btn"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
