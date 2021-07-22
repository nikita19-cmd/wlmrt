import React from 'react'
import './Saving.css';

const Saving = ({categories, getCatalog}) => {
    
    return (
        <div className="Saving centerDiv w-90">
            <div className="d-flex justify-content-between"> 
                <h4 className="text-left p-2 m-0 font-weight-bold">Saving Spotlight <i className="fas fa-comment-dollar"></i></h4>
                <h5 className="text-right p-2"><i className="fas fa-angle-double-left"></i> &nbsp; <i className="fas fa-angle-double-right"></i></h5>
            </div>
            
            <div className="holder">
                {
                    categories.map(cat => (
                        cat.Category === "sale-main" &&
                        cat.ChildMenus.map(child_cat => (
                            child_cat.Category === "Features-Sale" &&
                            child_cat.ChildMenus.map( link => (
                                <a className="card m-1 p-2" key={link.Key} onClick={()=>getCatalog(link.Category)}>{link.Name}</a>
                            ))  
                        ))
                    ))
                }
            </div>
            
        </div>
    )
}

export default Saving; 
