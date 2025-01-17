import React from 'react'
import './Home.css'
import bgvideo from "../../Assets/Images/Robotvideo.mp4"
import { FaArrowRightLong } from "react-icons/fa6";
import dhl from "../../Assets/Images/dhhlLogo.png";
import bp from "../../Assets/Images/bp-logo.png";
import national from "../../Assets/Images/national-grid.png";
import gf from "../../Assets/Images/gfs-logo.png";
import turner from "../../Assets/Images/turner-logo.png";
import woodside from "../../Assets/Images/wood-side.png";
import maersk from "../../Assets/Images/Maersk_Logo.png";
import vt from "../../Assets/Images/vt-logo.png";
import futureimg from "../../Assets/Images/futureImg.png"
import robot from "../../Assets/Images/robot.png";
import grid1 from "../../Assets/Images/grid1.png";
import grid2 from "../../Assets/Images/grid2.png";
import grid3 from "../../Assets/Images/grid3.png";
import grid4 from "../../Assets/Images/grid4.png";
import grid5 from "../../Assets/Images/grid5.png";
import grid6 from "../../Assets/Images/grid6.png";
import blogimg1 from "../../Assets/Images/blogimg1.png";
import blogimg2 from "../../Assets/Images/blogimg2.png";
import blogimg3 from "../../Assets/Images/blogimg3.png";
import { LuDot } from "react-icons/lu";
import bluebg from "../../Assets/Images/final-blue-bg.png";
import bgrobot from "../../Assets/Images/final.bg.robot.png"

const Home = () => {
  return (
    <>
        <div className='home'>
            <div className='background-video-container'>
                <video className='background-video'  autoPlay loop muted >
                    <source src={bgvideo} type='video/mp4' className='background-video'/>
                </video>
                <div className='bg-content'>
                    <h1>Changing your idea of what robots can do.</h1>
                    <h2>Discover practical robotics solutions designed to tackle today’s—and tomorrow’s—toughest automation challenges.</h2>
                    <button className='next-btn2'>
                        Explore solutions
                        <p><FaArrowRightLong /></p>
                    </button>
                </div>
            </div>
            
            <div className='webinar-highlight'>
                <p>WEBINAR: Transforming Manufacturing Reliability Inspections</p>
                <button className='watch-btn'>Watch Now</button>
            </div>
            <div className='tie-ups'>
                <h3>Trusted by industry-leading organizations around the world</h3>
                <div className='tie-up-companies'>
                    <img src={dhl} alt="" className='company-img1'/>
                    <img src={bp} alt="" className='company-img2'/>
                    <img src={national} alt="" className='company-img3'/>
                    <img src={gf} alt="" className='company-img4'/>
                    <img src={turner} alt="" className='company-img5'/>
                    <img src={woodside} alt="" className='company-img6'/>
                    <img src={maersk} alt="" className='company-img7'/>
                    <img src={vt} alt="" className='company-img8'/>
                </div>
            </div>
            <div className='about-wholediv'>
                <div className='teammate-div'>
                    <div className='team-head'>
                        <h1>Your teammate, your tool.</h1>
                        <h1>Meet Spot.</h1>
                    </div>
                    <p className='teammate-p'>Our agile, mobile robot will redefine your day-to-day. It works anywhere you work, gathering data, keeping people out of harm’s way, and exploring without boundaries.</p>
                    <button className='learn-btn2'>Learn About Spot
                        <p><FaArrowRightLong /></p>
                    </button>
                    <img src={robot} alt="" className='robot-img'/>
                </div>
                <div className='future-div'>
                    <div className='future-left'>
                        <img src={futureimg} alt="" className='future-img'/>
                    </div>
                    <div className='future-right'>
                        <h1>The Future of Warehouse Automation</h1>
                        <p className='future-right-p'>Use Stretch to streamline case handling and trailer unloading operations. Easy to deploy and flexible, Stretch keeps your operations moving.</p>
                        <button className='next-btn2'>
                            Learn About Stretch 
                            <p><FaArrowRightLong /></p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='solutions'>
                <h1 className='solutions-h'>Solutions for the real world</h1>
                <p className='solutions-p'>Give your team the tools to make work better: find solutions to keep your operations productive and keep your people safe.</p>
                <div className='works-grid'>
                    <div className='works-grid1'>
                        <img src={grid1} alt="" className='gridimg'/>
                        <h1>Inspection</h1>
                        <p className='grid-learn-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>
                    <div className='works-grid1'>
                        <img src={grid2} alt="" className='gridimg'/>
                        <h1>Digital Twin</h1>
                        <p className='grid-learn-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>
                    <div className='works-grid1'>
                        <img src={grid3} alt="" className='gridimg'/>
                        <h1>Warehouse Automation</h1>
                        <p className='grid-learn-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>
                    <div className='works-grid1'>
                        <img src={grid4} alt="" className='gridimg'/>
                        <h1>Safety & Response</h1>
                        <p className='grid-learn-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>
                    <div className='works-grid1'>
                        <img src={grid5} alt="" className='gridimg'/>
                        <h1>Research & Development</h1>
                        <p className='grid-learn-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>
                    <div className='works-grid-bg'>
                        <h1>Inspection</h1>
                        <p>See how our robots are being put to work in your industry.</p>
                        <p className='next-btn'>Learn more <FaArrowRightLong className='arrow-icon'/></p>
                    </div>                    
                </div>
            </div>
            <div className='team-success'>
                <div className='success-left'>
                    <h1>Our team for your success</h1>
                    <p>Our team is here to help you do more. Discover the support, services, and resources available to support your customer journey and help you unlock the full value of your robotics solutions.</p>
                
                </div>
                <div className='success-right'>
                    <button className='learn-btn'>
                        Learn more 
                        <p><FaArrowRightLong /></p>
                    </button>
                </div>
            </div>
            <div className='atlas-div'>
                <div className='atlas-div-content'>
                    <h1>Redefining robotics: Atlas & innovation</h1>
                    <p className='atlas-div-p'>With innovation at our core, we’re pushing the limits of mobility, dexterity, and intelligence with our next generation robots. Step into our lab and explore our state-of-the-art hardware and advanced control systems with Atlas.</p>
                    <button className='next-btn2'>
                        See Atlas in Action 
                        <p><FaArrowRightLong /></p>
                    </button>
                </div>
            </div>
            <div className='resources-div'>
                <div className='resources-h'>
                    <h1>Featured resources</h1>
                    <button className='learn-btn2'>View All Resources 
                        <p><FaArrowRightLong /></p>
                    </button>
                </div>
                <div className='blog-grid'>
                    <div className='blog-grid1'>
                        <img src={blogimg1} alt="" className='blogimg1'/>
                        <p className='news-btn1'>Product News</p>
                        <div className='blog-timing'>
                            <p className='blog-highlight'>Blog</p>
                            <p className='dot-icon'> <LuDot /></p>
                            <p className='duration'>7 min read</p>
                        </div>
                        <h2>Making Every Step Count with Spot</h2>
                    </div>
                    <div className='blog-grid1'>
                        <img src={blogimg2} alt="" className='blogimg1'/>
                        <p className='news-btn1'>Product News</p>
                        <div className='blog-timing'>
                            <p className='blog-highlight'>Blog</p>
                            <p className='dot-icon'> <LuDot /></p>
                            <p className='duration'>7 min read</p>
                        </div>
                        <h2>An Electric New Era for Atlas</h2>
                    </div>
                    <div className='blog-grid1'>
                        <img src={blogimg3} alt="" className='blogimg1'/>
                        <p className='news-btn2'>Warehouse Robotics</p>
                        <div className='blog-timing'>
                            <p className='blog-highlight'>Video</p>
                            <p className='dot-icon'> <LuDot /></p>
                            <p className='duration'>7 min read</p>
                        </div>
                        <h2>The Evolution of Stretch</h2>
                    </div>
                </div>
            </div>
            <div className='get-started'>
                <div className='getstarted-left'>
                    <img src={bgrobot} alt="" className='bg-robot'/>
                </div>
                <div className='getstarted-right'>
                    <h2>Start building tomorrow’s solutions today.</h2>
                    <p>Have a question about our robots? Reach out to our team.</p>
                    <button className='next-btn'>Get started 
                        <p><FaArrowRightLong /></p>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
