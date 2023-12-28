import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))

  }
  return (
    <div style={{marginTop:'150px'}}>
     <Row className='me-3 ms-5'>
      {
        wishlistArray?.length>0?
        wishlistArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

        <Card style={{ width: '18rem',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Img style={{height:'200px'}} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>
            {item.description.slice(0,40)}...
          </p>
          <p className='fw-bolder'>Price : ₹ {item.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash-can "></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus "></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>

        ))
        : <div style={{height:'80vh'}} className='d-flex align-items-center justify-content-center flex-column'>
          <img height={'500px'} src='https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif' alt='no image' />
          <h3>Your wishlist is empty</h3>
          <button className='btn btn-success'><Link style={{textDecoration:'none', color:'white'}} to={'/'}>Back to Home</Link></button>
          </div>
        }
     </Row>
    </div>
  )
}

export default Wishlist
//onClick={()=>dispatch(addToWishlist(item))}