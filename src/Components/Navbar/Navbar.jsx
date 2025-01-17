import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/Images/logo.svg"
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { MdArrowRightAlt } from "react-icons/md";

const Navbar = () => {

  const [hover, sethover] = useState(false);
  const [spot, setspot] = useState(true);

  function showdiv(params) {
    sethover(true);
  }

  function hidediv(params) {
    sethover(false);
  }

  function openmore(params) {
    setspot(true);
  }
  function closemore(params) {
    setspot(false);
  }

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <div className='hover-list'>
          <div className='nav-list'>
              <p onMouseEnter={showdiv}
                 onMouseLeave={hidediv}
                 className='nav-product' 
              >Products</p>
              <p>Solutions</p>
              <p>Industries</p>
              <p>Atlas & Innovations</p>
              <p>Company</p>
              <p>Resources</p>
          </div>
          { hover && 
          <div className='open-div' onMouseEnter={showdiv} onMouseLeave={hidediv}>
            <div className='position-subdiv'>
                <div className='sub-list'>
                <div className='sub-list1' onMouseEnter={openmore} onMouseLeave={closemore}>
                  <h4>Spot</h4>
                  <p><IoIosArrowForward /></p>
                </div>
                <div className='sub-list1'>
                  <h4>Stretch</h4>
                  <p><MdArrowRightAlt /></p>
                </div>
                <div className='sub-list1'>
                  <h4>Customer Success</h4>
                  <p><MdArrowRightAlt /></p>
                </div>
                <button className='explore-btn'>Explore All Products
                <p><MdArrowRightAlt /></p>
              </button>
              </div>
              <div className='open-spot'>
                <div className='spot'>
                  <h2>Spot</h2>
                  <p>Our agile mobile robot fordynamic sensing and industrial inspection.</p>
                  <button className='read-more-btn'> Read more
                    <p><MdArrowRightAlt /></p>
                  </button>
                </div>
                <div className='spot-grid'>
                  <div className='spot-grid1'>
                    <h4>Orbit</h4>
                    <p>Software to manage and analyze your Spot fleet</p>
                    <button className='read-more-btn'> Read more
                      <p><MdArrowRightAlt /></p>
                    </button>
                  </div>
                  <div className='spot-grid1'>
                    <h4>Arm</h4>
                    <p>An integerated arm to enable mobile manipulation</p>
                    <button className='read-more-btn'> Read more
                      <p><MdArrowRightAlt /></p>
                    </button>
                  </div>
                  <div className='spot-grid1'>
                    <h4>Payload</h4>
                    <p>Additional sensors and hardware to expand Spot's functionality</p>
                    <button className='read-more-btn'> Read more
                      <p><MdArrowRightAlt /></p>
                    </button>
                  </div>
                  <div className='spot-grid1'>
                    <h4>Extras</h4>
                    <p>Add ons and accessories to keep Spot ready for work</p>
                    <button className='read-more-btn'> Read more
                      <p><MdArrowRightAlt /></p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
        
        </div> }
          
        </div>     
        <div className='company-details'>
            <p><FiSearch /></p>
            <p>Partners</p>
            <p>Support</p>
            <button className='contact-btn'>Contact Sales</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
