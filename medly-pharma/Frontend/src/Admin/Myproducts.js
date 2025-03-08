import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Anavbar from '../Admin/Anavbar';
import { FaBeer, FaHeart, FaTrash } from "react-icons/fa";
import Footer from '../Components/Footer';

function Myproducts() {
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

  const deleteItem=((Id)=>{
    axios.delete(`http://localhost:8000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  })

  return (
    <div >
      <Anavbar/>
      <div className="car-list" style={{minHeight:"62vh"}}>
        <h1 className='text-center'>Medicines List</h1>
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
                <div style={{display:"flex",justifyContent:"flex-end",color:"red"}}>
                <button onClick={() => deleteItem(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                <FaTrash />
              </button>
                </div>
<br/>
                <img
                  src={`http://localhost:8000/${item?.itemImage}`}
                  alt={`${item.itemtype} Image`}
                  style={{height:"200px",width:"260px"}}

                />
                <p className='text-center'> {item.itemtype}-{item._id.slice(3,7)}</p>
                {/* <p>Description: {item.description}</p> */}
                <p>Price: {item.price}</p>
                <div className="ml-auto">
                {/* <FaHeart color='red'/> */}
                  <Button style={{ backgroundColor: "rebeccapurple", border: "none" }}>
                    <Link to={`/item/${item._id}`} style={{ color: "white", textDecoration: "none" }}  >
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

export default Myproducts;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './cars.css';
// import { Button } from 'react-bootstrap';
// import { useNavigate, Link } from 'react-router-dom';
// // import Navbar from "./Unav";

// function Vhome() {
//   const [cars, setCars] = useState([]);
//   const [searchCarName, setSearchCarName] = useState('');
//   const [searchCarType, setSearchCarType] = useState('');
//   const [searchPrice, setSearchPrice] = useState('');
//   const [sortPriceAscending, setSortPriceAscending] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchCars() {
//       try {
//         const response = await axios.get('http://localhost:8000/item');
//         setCars(response.data);
//       } catch (error) {
//         console.error('Error fetching cars: ', error);
//       }
//     }
//     fetchCars();
//   }, []);

//   const HandleChange = () => {
//     navigate('/bookcab');
//   };

//   const handleSortPrice = () => {
//     setSortPriceAscending(!sortPriceAscending);
//   };

//   const sortedCars = [...cars].sort((a, b) => {
//     if (sortPriceAscending) {
//       return a.price - b.price;
//     } else {
//       return b.price - a.price;
//     }
//   });

//   const filteredCars = sortedCars.filter((car) => {
//     const carNameMatches = car.carname.toLowerCase().includes(searchCarName.toLowerCase());
//     const carTypeMatches = car.cartype.toLowerCase().includes(searchCarType.toLowerCase());
//     const priceMatches = car.price.toString().includes(searchPrice);

//     return carNameMatches && carTypeMatches && priceMatches;
//   });

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <div className="car-list">
//         <h1>Car List</h1>
//         <div  style={{display:"flex"}}>
//           <input
//           style={{marginRight:"20px"}}
//             type="text"
//             placeholder="Search by car name"
//             value={searchCarName}
//             onChange={(e) => setSearchCarName(e.target.value)}
//           />
//           <input
//           style={{marginRight:"20px"}}

//             type="text"
//             placeholder="Search by car type"
//             value={searchCarType}
//             onChange={(e) => setSearchCarType(e.target.value)}
//           />
//           <Button
//   onClick={handleSortPrice}
//   style={{ backgroundColor: "orangered",width:"250px" }}
 
// >
//   Sort Price  ↓↑   {sortPriceAscending ? 'Low to High' : 'High to Low'}
// </Button>
//         </div>
//         <br/>
// <br/>

//         <div className="car-container">
//           {filteredCars.map((car) => (
//             <div className="car-card" key={car._id} id='pop'>
//               <img src={`http://localhost:8000/${car?.itemImage}`} alt={`${car.itemtype} Image`} />
//               <p>Driver Name: {car.itemtype}</p>
//               <p>Car Model: {car.description}</p>
//               <p>Price: {car.price}/Km</p>
//               <div className='ml-auto'>
//                 <Button style={{ backgroundColor: "orangered", border: "none" }}>
//                   <Link to={`/bookcab/${car._id}`} style={{ color: "white", textDecoration: "none" }}>
//                     Book Cab
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Vhome;
