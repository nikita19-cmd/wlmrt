import React, { useState } from 'react'
import './UpperNav.css';

const UpperNav = ({search}) => {
    const [ searchTerm, setSearchTerm ] = useState("");
    return (
        <div className="UpperNav d-flex justify-content-center align-items-center" id="mainnav">
            <h4>Forever 21 &nbsp; &nbsp;</h4>
            <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." onChange={event=>setSearchTerm(event.target.value)}></input>
                        <span className="input-group-btn">
                            <button className="btn btn-search" type="button" onClick={()=>search(searchTerm)}><i className="fa fa-search fa-fw"></i></button>
                        </span>
                    </div>
                    
        </div>
    )
}

export default UpperNav
