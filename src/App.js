import React, { useEffect, useState } from 'react';
import './App.css';
import './font/css/all.css';
import MainNav from './components/MainNav';
import Axios from 'axios';
import { appendApiKey, searchProducts, getProducts } from './utils';
import SideNav from './components/SideNav';

const App = () => {

  const [ categories, setCategories ] = useState([]);
  const [ newArrival, setNewArrival] = useState([]);
  const [ bestSeller, setBestSeller] = useState([]);
  const [ instock, setInstock] = useState([]);
  const [ promo, setPromo ] = useState([]);
  const [ showCatalog, setShowCatalog ] = useState(false);
  const [ cat_name, setCat_name ] = useState("");
  const [ searchProd, setSearchProd ] = useState([]);
  const [ showSearch, setShowSearch ] = useState(false);
  const [ classPart, setClassPart ] = useState("active");
  const [ filterValue, setFilterValue ] = useState({
    color: '',
    size: '',
    price: '250',
  });
  const [ loading, setLoading ] = useState(true);
  const [ home, setHome ] = useState(true);


  useEffect(() => {
      fetchCategories();
      fetchNewArrival();
      fetchBestSeller();
      fetchInstock();
      fetchPromo();
  }, [])

  const fetchCategories = async() => {
    const url_cat = appendApiKey("categories/list");
      try{
          await Axios.get(url_cat).then( res_cat => {
            setCategories(res_cat.data.ChildMenus);
            console.log(res_cat.data.ChildMenus);
            setLoading(false);
          })       
      }catch{
          setCategories([]);
      }
  }

    const fetchNewArrival = async() => {
      var url_new = getProducts("new-arrivals")+"&pagesize=16";
      console.log(url_new);
        try {
            await Axios.get(url_new).then( res => {
                setNewArrival(res.data);
                console.log(res.data);
            })
        }catch {
            setNewArrival([]);
        }
        
    }

    const fetchBestSeller = async() => {
      var url_best = getProducts("promo-best-sellers-app")+"&pagesize=16";
        try {
            await Axios.get(url_best).then( res => {
                setBestSeller(res.data);
            })
        }catch {
            setBestSeller([]);
        }
        
    }

    const fetchInstock = async() => {
      var url_instock = getProducts("backinstock")+"&pagesize=16";
        try {
            await Axios.get(url_instock).then( res => {
                setInstock(res.data);
            })
        }catch {
            setInstock([]);
        }
        
    }

    const fetchPromo = async() => {
      var url_promo = getProducts("promo-basics")+"&pagesize=16";
      console.log(url_promo);
        try {
            await Axios.get(url_promo).then( res => {
                setPromo(res.data);
            })
        }catch {
            setPromo([]);
        }
        
    }

  const getCatalog = (category) => {
    setCat_name(category);
    setHome(false);
    setShowSearch(false);
    setShowCatalog(true);
  }

  const search = (query) => {
    console.log(query);
    const url_search = searchProducts(query)+`&color=${filterValue.color}&size=${filterValue.size}&price={filterValue.price}`
    Axios.get(url_search).then(res => {
      console.log(res.data);
      setSearchProd(res.data.response);
      setShowCatalog(false);
      setHome(false);
      setShowSearch(true);
      
      }
    )
  }

  const showSidenav = () => {
    const css = (classPart === "")? "active" : ""
    setClassPart(css);
  }

    //var colValue= [];
    const filter = (e) => {
      if(e.length !== 0 ){
          //colValue.push(e.target.value);
          setFilterValue({
            ...filterValue,
            [e.target.name]: e.target.value,
          });
      }else {
        //colValue = colValue.splice(e.target.value, 1);
        setFilterValue({
          ...filterValue,
          [e.target.name]: '',
        });
      }
      console.log(filterValue);
    }

    const gohome = () => {
      setShowSearch(false);
    setShowCatalog(false);
    setHome(true);
    }
  
  return (
    <div className="App">
      { loading && 
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
      </div> }
      
      <MainNav categories={categories} getCatalog={getCatalog} search={search} showSidenav={showSidenav} gohome={gohome}/>
      <SideNav 
        showSearch={showSearch}
        search={searchProd}
        showCatalog={showCatalog} 
        cat_name={cat_name} 
        categories={categories} 
        getCatalog={getCatalog}
        classPart={classPart} 
        filter={filter}
        filterValue={filterValue}
        newArrival={newArrival}
        instock={instock}
        bestSeller={bestSeller}
        promo={promo}
        home={home}
      />
      
    </div>
  )
}

export default App;