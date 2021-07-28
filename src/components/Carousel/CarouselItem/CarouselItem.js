import React from 'react'
import './CarouselItem.css'

const CarouselItem = ({item}) => {
    return (
        <div className="carousel-item">
            <div className="phone-card">
              <p>{item.brand}</p>
            </div>
            <div className="item-controls">
                <button className='add-to-cart-btn'>Add</button>
                <span>{item.price}</span>
            </div>
        </div>
    )
}

export default CarouselItem
