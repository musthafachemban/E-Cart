import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  // to access the state useSelector hook is used
  const wishlist = useSelector((state=>state.wishlistReducer)) // here state represent the store

  const cart = useSelector((state=>state.cartReducer))
  console.log(cart);
  return (
    <div>
         <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand ><Link style={{color:'white', textDecoration:'none'}} to={'/'}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-2'> <Link style={{color:'white', textDecoration:'none'}} to={'/wishlist'}><i style={{color:'red'}} class="fa-solid fa-heart me-2"></i>Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link> </Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-2'> <Link style={{color:'white', textDecoration:'none'}} to={'/cart'}><i style={{color:'yellow'}} class="fa-solid fa-cart-shopping me-2"></i> Cart <Badge bg="secondary">{cart.length}</Badge></Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
 