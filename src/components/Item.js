import React, { useState, useEffect } from 'react';
import './Item.css';
import { buildUrl } from "../utils";
import Axios from 'axios';
import { getProducts } from '../utils';

const Item = ({category, filterValue}) => {
    
    const [ products, setProducts ] = useState([]);
    const [ fetching, setFetching ] = useState("true");
    const [ filter, setFilter ] = useState({
        color: '',
        size: '',
        price: '250',
    });
    // setFilter({
    //     ...filter,
    //     color: filterValue.color,
    //     size: filterValue.size,
    //     price: filterValue.price,
    // })
    //const url=getProducts(category)+`&color=${filter.color}&size=${filter.size}&price=${filter.price}`;
    const url=getProducts(category);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try{
            Axios.get(url).then(res => {
                setProducts(res.data);
                console.log(res.data);
                setFetching(false);
            })
        }catch{
            setProducts([]);
        }
    }

    return (
        <>
        {
            fetching && 
            <div className="loader">
                <div className="wrapper1">
                <span className="circle circle-1"></span>
                <span className="circle circle-2"></span>
                <span className="circle circle-3"></span>
                <span className="circle circle-4"></span>
                <span className="circle circle-5"></span>
                <span className="circle circle-6"></span>
                <span className="circle circle-7"></span>
                <span className="circle circle-8"></span>
                </div>
            </div>
        }
            <div className="Item">
            <h3 className="title w-100">{products.CategoryDisplayName}</h3>
            <p className="text-align-left">{products.CategoryDescription}</p>
            <div className="container">
            <div className="row">
            {
                products.length !== 0 && products.CatalogProducts.length !== 0 &&
                products.CatalogProducts.map( product => (
                    <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex align-items-stretch" key={product.ItemCode}>
                        <a className="card m-0 pointer" href={product.ProductShareLinkUrl}>
                        <div className="view overlay">
                            <img className="card-img-top" src={buildUrl(product.ImageFilename)} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="small">{product.DisplayName}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">USD  {product.ListPrice}</small>
                            <small className=""><i className="fas fa-star"></i>4/5</small>
                        </div>
                        </a>
                    </div> 
                ))
            }
            </div>
            <div>{products.CategoryCustomerNote}</div>
        </div> 
        </div>
         </>
    )
}

export default Item;