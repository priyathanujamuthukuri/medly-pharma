import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
//import Products from './Products'

const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
     <div>
       <Unavbar/>
       <div id='uhome' >
        {/* <p style={{color:"rgb(88,79,70)"}}>ss</p> */}
        <div id='hh'>
         <h1 className='text-center' style={{fontSize:"70px"}}>Medly-Pharma</h1>
   <div  style={{display:"flex",justifyContent:"center"}}>
  <hr style={{ height: "5px", width:"250px",color:"rgb(167,149,125)", backgroundColor:"rgb(167,149,125)"}} />
  </div>
              <p className='text-center' style={{fontSize:"30px"}}>Top Medicines At Best Price</p>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' onClick={products}>Our Medicines</button>
        </div>
      </div>
      </div>

       <div>
       <h1 className='text-center' style={{fontSize:"50px"}}>Medicines</h1>
       <div  style={{display:"flex",justifyContent:"center"}}>
   {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
   <br/>
   <div  style={{ display: 'flex', justifyContent: '', flexDirection: 'row', flexWrap:'wrap' }}>
   <Card style={{ width: '18rem' ,marginRight:"80px", marginLeft:"135px"}}>
   <Link to='/uproducts'>
     <Card.Img variant="top" style={{height:"280px"}} src="https://www.kauverymeds.com/uploads/product/main/1654331440_51298_0.jpg" />
     </Link>
     <Card.Body>
       <Card.Title className='text-center'>Zerdol-p</Card.Title>     </Card.Body>
  </Card>

   <Card style={{ width: '18rem' ,marginRight:"80px"}}>
   <Link to='/uproducts'>
     <Card.Img variant="top" style={{height:"280px"}} src="https://5.imimg.com/data5/SELLER/Default/2023/3/296811054/DK/IS/HW/182508442/aceclofenac-tablet.webp" />
     </Link>
     <Card.Body>
       <Card.Title className='text-center'>Aceclofenac</Card.Title>
     </Card.Body>
   </Card>

   <Card style={{ width: '18rem',marginRight:"80px" }}>
   <Link to='/uproducts'>
     <Card.Img variant="top" style={{height:"280px"}} src="https://5.imimg.com/data5/SELLER/Default/2024/1/378971530/VB/IA/PW/207931592/pantoprazole-sodium-gastro-resistant-tablet-500x500.jpeg" />
     </Link>
     <Card.Body>
       <Card.Title className='text-center'>Pantoprazole</Card.Title>
    </Card.Body>
   </Card>

   <Card style={{ width: '18rem', marginRight:"80px", marginLeft:"135px" }}>
   <Link to='/uproducts'>
     <Card.Img variant="top"  style={{height:"280px"}} src="https://5.imimg.com/data5/SELLER/Default/2022/10/VV/QC/WV/112069410/saridon-headache-tablet.jpeg" />
     </Link>
     <Card.Body>
      <Card.Title className='text-center'> Saridon</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', marginRight:"80px"}}>
   <Link to='/uproducts'>
     <Card.Img variant="top"  style={{height:"280px"}} src="https://irp.cdn-website.com/69c0b277/dms3rep/multi/Amoxicillin+-+Uses-+Side+Effects-+Composition-+Indications+and+Price.jpg" />
     </Link>
     <Card.Body>
      <Card.Title className='text-center'> Amoxocilian</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px"}}>
   <Link to='/uproducts'>
     <Card.Img variant="top"  style={{height:"280px"}} src="https://domf5oio6qrcr.cloudfront.net/medialibrary/4977/conversions/3687af9d-7e14-43ee-999b-7c9f3a341b9d-thumb.jpg" />
     </Link>
     <Card.Body>
      <Card.Title className='text-center'> generic drug</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', marginRight:"80px", marginLeft:"135px"}}>
   <Link to='/uproducts'>
     <Card.Img variant="top"  style={{height:"280px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMEMR8vcGKtwTuP5djtNm86fT4pxvjMSU2w&s" />
     </Link>
     <Card.Body>
      <Card.Title className='text-center'> eye drops</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem', marginRight:"80px" }}>
   <Link to='/uproducts'>
     <Card.Img variant="top"  style={{height:"280px"}} src="https://tajlifesciences.com/wp-content/uploads/Phenoxymethyl_Penicillin_500mg_Supplier_Vapi_Gujarat-scaled.jpg" />
     </Link>
     <Card.Body>
      <Card.Title className='text-center'> pencilin</Card.Title>
    </Card.Body>
  </Card>
 </div>
   </div>
       </div>
       <br/>
       <Footer/>
     </div>
  //  <div>
   //  <Products />
  //  </div>
  )
}

export default Uhome