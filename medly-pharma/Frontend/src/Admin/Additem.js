import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Anavbar from './Anavbar';


function Additem() {
  const [formData, setFormData] = useState({
    description:'',
    itemtype: '',
    price:''
  });

const navigate=useNavigate()
const user = JSON.parse(localStorage.getItem('user'));

const handleChange = (e) => {
    if (e.target.name === 'itemImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      
    //   formDataToSend.append('drivername', formData.drivername);
      formDataToSend.append('itemtype', formData.itemtype);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('itemImage', formData.itemImage);

       formDataToSend.append('userName', user.name);
       formDataToSend.append('userId', user.id);

      await axios.post('http://localhost:8000/items', formDataToSend);
      alert('Item added successfully');
      navigate('/myproducts')
    } catch (error) {
      console.error('Error adding car : ', error);
    }
  };
  

  return (
    <div> 
        <Anavbar/>
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg" style={{backgroundColor:"lightskyblue"}}>
      <h2 className="text-2xl font-semibold mb-4">Add Items</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          {/* <label className="block text-gray-600">Car Model</label> */}
          <input
            type="text"
            name="itemtype"
            placeholder='Item Name'
            value={formData.itemtype}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-600">Price</label> */}
          <input
            type="text"
            name="price"
            placeholder='Price'
            value={formData.price}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-600">Car no</label> */}
          <input
            type="text"
            name="description"
            placeholder='Description'
            value={formData.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Item Image</label>
          <input
            type="file"
            name="itemImage"
            accept="image/*"
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
   
    </div>
    </div>
  );
}

export default Additem;

