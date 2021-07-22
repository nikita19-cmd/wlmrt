import React, { useEffect, useState } from 'react'
import { getProducts, buildUrl } from '../utils';
import Axios from 'axios';

const MenNewArrival = ({getCatalog, products}) => {

    //const [ fetching, setFetching ] = useState(true);


    return (
        <div className="WomenNewArrival centerDiv w-90"> 
        {
            products === null ? "" :
           ( <div className="hp-mod-card card-categories J_Categories J_NavChangeHook">
            <div className="hp-mod-card-header d-flex justify-content-between">
                <h3>{products.CategoryDisplayName}</h3>
                <a className="btn" role="button" href="#" onClick={()=>getCatalog(products.CategoryName)}>See More &#187; </a>
            </div>
                <div className="hp-mod-card-content J_CategoriesItems">
                    <div className="card-categories-ul d-flex flex-wrap">
                        {
                            products.CatalogProducts.map( prod => (
                                <div className="card-categories-li hp-mod-card-hover" key={prod.ItemCode}>
                                    <a className="card-categories-li-content" href={prod.ProductShareLinkUrl}>
                                        <div className="card-categories-image-container">
                                            <img className="image" src={buildUrl(prod.ImageFilename)} alt="men clothing"></img>
                                        </div>
                                        <div className="card-categories-name">
                                            <span className="text">{prod.DisplayName}</span>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>)
        }
        
        </div>
    )
}

export default MenNewArrival
