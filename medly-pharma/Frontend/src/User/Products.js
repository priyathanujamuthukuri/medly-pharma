import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/List.css'
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaBeer, FaHeart, FaTrash } from "react-icons/fa";
import Unavbar from './Unavbar';
import Footer from '../Components/Footer';


function Products() {
  const [items, setItems] = useState([]);

  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [maxPrice, setMaxPrice] = useState(''); // State for the maximum price
  const [sortPriceAscending, setSortPriceAscending] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('http://localhost:8000/item');
        if (response.data) {
          setItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    }
    fetchItems();
  }, []);

  const handleChange = () => {
    navigate('/bookcab');
  };

  const handleSortPrice = () => {
    setSortPriceAscending(!sortPriceAscending);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortPriceAscending) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Filter items based on the search term and maximum price
  const filteredItems = sortedItems.filter((item) => {
    const carNameMatches = item.itemtype.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatches = maxPrice === '' || item.price <= parseFloat(maxPrice);
    return carNameMatches && priceMatches;
  });

  return (
    <div >
      <Unavbar/>
      <div className="car-list">
        <h1 className='text-center'>Medicine List</h1>
   <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <input
        style={{width:"500px",border:"1px solid black"}}
        //   type="search"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
        style={{width:"500px",border:"1px solid black"}}
        //   type="search"
          placeholder="Search under By Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <Button
          onClick={handleSortPrice}
          style={{ backgroundColor: "orangered", width: "110px" ,border:'none'}}
        >
          Sort Price  {sortPriceAscending ? ' Low to High' : 'High to Low'}
        </Button>
        </div>
        <br />
        <br />
        <br />
        <div className="car-container"  >
          {filteredItems.length === 0 ? (
            <p>No items matched your search criteria.</p>
          ) : (
            filteredItems.map((item) => (
              <div className="car-card" key={item._id} id="pop" style={{backgroundColor:'wheat'}}>
               
               <img
                  src={`http://localhost:8000/${item?.itemImage}`}
                  alt={`${item.itemtype} Image`}
                  style={{height:"200px",width:"260px"}}
                />
                
                <p className='text-center'> {item.itemtype}</p>
                {/* <p>Description: {item.description}</p> */}
                <p>Price: {item.price}</p>
                <div className="ml-auto">
                {/* <FaHeart color='red'/> */}
                  <Button style={{ backgroundColor: "rebeccapurple", border: "none" }}>
                    <Link to={`/uitem/${item._id}`} style={{ color: "white", textDecoration: "none" }}  >
                     view
                    </Link>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer/>
    </div>


  );
}

export default Products;
