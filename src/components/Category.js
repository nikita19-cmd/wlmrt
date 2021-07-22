import React from 'react';
import './Category.css';
import { buildUrl } from "../utils";

const Category = ({category}) => {

    return (
        <div className="Category">
        {
            category.map(cat => (
                <div className="hp-mod-card card-categories J_Categories J_NavChangeHook" key={cat.name}>
                    <div className="hp-mod-card-header">
                        <h3 className="hp-mod-card-title">{cat.name}</h3>
                    </div>
                        <div className="hp-mod-card-content J_CategoriesItems">
                            <div className="card-categories-ul d-flex flex-wrap">
                                {
                                    cat.departments.map(dept => (
                                        <div className="card-categories-li hp-mod-card-hover" key={dept.department.title}>
                                            <a className="card-categories-li-content" href={dept.department.clickThrough.rawValue? buildUrl(dept.department.clickThrough.rawValue) 
                                                : "#"
                                            }>
                                                <div className="card-categories-image-container">
                                                    <img className="image" src="https://static-01.shop.com.mm/p/20a41b8a6596bf119a05c9fc33e7cbe2.jpg" alt="mobiles"></img>
                                                </div>
                                                <div className="card-categories-name">
                                                    <span className="text">{dept.department.title}</span>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            ))
        }
        </div>
    )
}

export default Category
