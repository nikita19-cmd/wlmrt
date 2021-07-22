import React from 'react'
import './Product.css';

function Product({search}) {
    return (
        <div className="Product">
            <div className="container">
            <div className="row">
            {
                search.docs.map( product => (
                    <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex align-items-stretch" key={product.pid}>
                        <a className="card m-0 pointer" href={product.url}>
                        <div className="view overlay">
                            <img className="card-img-top" src={product.thumb_image} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.title}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">USD  {product.price}</small>
                        </div>
                        </a>
                    </div> 
                ))
            }
            </div>
        </div> 
        </div>
    )
}

export default Product
