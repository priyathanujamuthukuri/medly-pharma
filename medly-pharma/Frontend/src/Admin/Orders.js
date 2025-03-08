
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Anavbar from './Anavbar';

function Orders() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`http://localhost:8000/orders`)
      .then((response) => {
        const taskData = response.data  ;
        setCars(taskData);
        console.log(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });
    
  }, []);




  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "ontheway";
    } else {
      return "delivered";
    }
  };

  return (
    <div>
      <Anavbar/>
      <div style={{minHeight:"32vh"}}>
        <h1 className='text-center'>Orders</h1>
        <div>
          {cars.map((item) => {
            const status = calculateStatus(item.Delivery);

            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  marginLeft: '65px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <img src={`http://localhost:8000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: "80px" }} />
                  </div>
                  <div>
                    <p>ProductName:</p>
                    <p>{item.itemname}</p>
                  </div>
                  <div>
                    <p>Orderid:</p>
                    <p>{item._id.slice(0,10)}</p>
                  </div>
                  <div>
                    <p>Customer Name</p>
                    <p>{item.userName}</p>
                  </div>
                  <div>
                    <p>Address:</p>
                    {item.flatno},<br />{item.city},({item.pincode}),<br />{item.state}.
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p>Delivery By</p>
                    <p>{item.Delivery}</p>
                  </div>
                  {/* <div>
                    <p>Warranty</p>
                    <p>1 year</p>
                  </div> */}
                  <div>
                    <p>Price</p>
                    <p>{item.totalamount}</p>
                  </div>
                  <div>
                    <p>Status</p>
                    <p>{status}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default Orders;
