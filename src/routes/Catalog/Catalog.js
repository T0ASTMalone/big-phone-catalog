import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import PhoneService from '../../services/catalog-service'

const Catalog = () => {
    // loads items : pagination ? fetch next 
    // passed as props to Carousel
    // optimize loading her

    const [catalog, setCatalog] = useState(null)

    useEffect(() => {
      let response = PhoneService.findAllPaginate(0, 12);
      setCatalog(response);
    }, [])

    return (
        <div>
            {catalog !== null && <Carousel catalog={catalog}/>}
        </div>
    )
}

export default Catalog
