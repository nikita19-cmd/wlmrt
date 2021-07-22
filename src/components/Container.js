import React, {useState} from 'react'
import FrontPage from './FrontPage';
import Saving from './Saving';
import './Container.css';
import MenNewArrival from './MenNewArrival';

const Container = ({categories, getCatalog, newArrival, instock, bestSeller, promo}) =>{
    return (
        <div className="Container">
          <FrontPage />
            <Saving categories={categories} getCatalog={getCatalog}/>
            { newArrival.length !==0 && <MenNewArrival getCatalog={getCatalog} products={newArrival}></MenNewArrival> }
            {instock.length !==0 && <MenNewArrival getCatalog={getCatalog} products={instock}></MenNewArrival>}
            {bestSeller.length !==0 && <MenNewArrival getCatalog={getCatalog} products={bestSeller}></MenNewArrival>}
            {promo.length !==0 && <MenNewArrival getCatalog={getCatalog} products={promo}></MenNewArrival>} 
        </div> 
    );
}

export default Container;
