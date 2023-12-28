import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
        <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-light'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className="website" style={{width:'400px'}}>
          <h4 style={{overflowY:'hidden'}}><i className='fa-solid fa-cart-shopping'></i>{' '}
          E-Cart</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil illum laboriosam, quisquam architecto ut et? Reprehenderit tempore ullam nam ipsa eaque corporis esse, libero aspernatur!
        </div>
        <div className="link d-flex flex-column">
          <h4 style={{overflowY:'hidden'}}>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 style={{overflowY:'hidden'}}>Guides</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>React Bootsrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>

        </div>
        <div className="contact d-flex flex-column">
        <h4 style={{overflowY:'hidden'}}>Contact Us</h4>
        <div className="d-flex">
          <input type='text' placeholder='enter your mail id' className='form-control' />
          <button className='btn btn-warning text-white ms-3'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-evenly ">
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x me-2 mt-4"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x me-2 mt-4"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x me-2 mt-4"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x me-2 mt-4"></i></Link>
        </div>

        </div>
      </div>
      <p className='mt-5'>Copyright @ 2023 E-Cart, Built with React</p>
    </div>
  )
}

export default Footer