import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({categories, getCatalog, search, showSidenav, gohome}) => {
    return (
        <div className="MainNav"> 
            <UpperNav search={search}/>
            <LowerNav categories={categories} getCatalog={getCatalog} showSidenav={showSidenav} gohome={gohome}/>
        </div>
    )
}

export default MainNav;
