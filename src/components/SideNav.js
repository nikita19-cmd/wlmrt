import React from 'react';
import './SideNav.css';
import Product from './Product';
import Item from './Item';
import Container from './Container';

const SideNav = ({ showSearch, search, showCatalog, cat_name, categories, getCatalog, classPart, filter, filterValue, newArrival, instock, bestSeller, promo, home }) => {
    return (
        <div className="SideNav wrapper">
            <nav id="sidebar" className={classPart}>
                <div className="sidebar-header">
                    <h5>FILTER</h5>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle small">Color</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox1" value="black" onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">black</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox2" value="grey"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">grey</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox3" value="red"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">red</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox4" value="denim"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">denim</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox5" value="pink"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">pink</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox6" value="white"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">white</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox7" value="blue"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">blue</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox8" value="green"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">green</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox9" value="brown"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">brown</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox10" value="orange"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">orange</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox11" value="purple"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">purple</label>
                        </div>
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="color" id="inlineCheckbox12" value="yellow"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">yellow</label>
                        </div>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Size</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                        <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="size" id="sizeCheckbox1" value="Large"  onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">large</label>
                            </div>
                            <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="size" id="sizeCheckbox2" value="Medimum" onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">medium</label>
                            </div>
                            <div className="form-check form-check-inline w-50 m-0">
                            <input className="form-check-input" type="checkbox" name="size" id="sizeCheckbox3" value="Small" onChange={e=>filter(e)}></input>
                            <label className="form-check-label small">small</label>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <small>Max-Price : $ </small> <input type="number" name="price" id="priceInput"  onChange={e=>filter(e)}></input>
                    </li>
                </ul>
            </nav>
            <div className="content">
            {
                showSearch ? <Product search={search}></Product> :
                showCatalog ? <Item category={cat_name} filterValue={filterValue}></Item> :
                home ? <Container categories={categories} 
                  getCatalog={getCatalog} 
                  newArrival={newArrival}
                  instock={instock}
                  bestSeller={bestSeller}
                  promo={promo}>
                </Container> : ""
            }
            </div>
        </div>

    )
}

export default SideNav;
