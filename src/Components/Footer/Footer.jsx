import React from 'react'
import "./Footer.css"
import logo from "../../Assets/Images/logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className='footer-page'>
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="" className='logo-img'/>
            </div>
            <div className='footer-section'>
                <div className='section1'>
                    <h5>NAVIGATION</h5>
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Industry</p>
                    <p>Innovation</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Contact Sales</p>
                </div>
                <div className='section1'>
                    <h5>HELPFUL LINKS</h5>
                    <p>FAQ</p>
                    <p>Mech Store</p>
                    <p>Support</p>
                    <p>Partners</p>
                    <p>Press Inquiries</p>
                    <p>Developer Documentation</p>
                    <p>Sales</p>
                </div>
                <div className='section1'>
                    <h5>RESOURCES</h5>
                    <p>Case Studies</p>
                    <p>Webinars</p>
                    <p>Blogs</p>
                    <p>Whitepapers</p>
                    <p>Events</p>
                    <p>Videos</p>
                </div>
            </div>
        </div>
        <div className='footer-contacts'>
            <div className='footer-icons'>
                <p><FaFacebook /></p>
                <p><FaInstagram /></p>
                <p><FaYoutube /></p>
                <p><FaTwitter /></p>
                <p><FaLinkedin /></p>
                <p><BsTiktok /></p>
            </div>
            <p className='copyright'>©2024 Boston Dynamics. All rights reserved.</p>
            <div className='footer-policies'>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Ethics Statement</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
