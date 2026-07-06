import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div>
        <img src="..." alt="pic" />
      </div>
      <div>
        <nav>
            <ul className='d-flex list-unstyled justify-content-center gap-4 bg-red p-4'>
                <li><Link className='text-white' to="/">Home</Link></li>
                <li><Link className='text-white' to="/about">AboutUs</Link></li>
                <li><Link className='text-white' to="/product">Product</Link></li>
                <li><Link className='text-white' to="/login">Login</Link></li>
                <li><Link className='text-white' to="*">Error Page</Link></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar