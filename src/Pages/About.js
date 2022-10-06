import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <main className='container about_page'>
            <section className="about__section">
                <div className="row d-flex justify-content-between">
                    <div className="hero__text col-12 col-md-6">
                        <h1 className="hero__title--about mb-2"> About Paygies</h1>
                        <p className="about__articl">Paygies is a financial service provided by Bitmast Digital Services to help our clients manage their crypto addresses and wallets using one single address. 
                        It works by connecting your various wallets to one single Paygies address and creating a shortlink thereby making your wallets easily memorable since you can edit your address to a URL that you desire.
                        </p> 
                        <div className='text-capitalize bg-light px-3 py-2 fs-5 w-100'>user centric design
                        </div>
                        <hr className='divider__one'/>

                        <p className="about__article  px-3">You are assigned only payment page identified by short URL(Example <Link to="" className='text-primary'>https://bpgs.io/cecilia-q</Link>https://bpgs.io/cecilia-q).</p>
                        <hr />
                        <p className="about__article  px-3">You can create multiple addresses or import existing addresses to your payment page</p>
                        <hr />
                        <p className="about__article  px-3">You can connect paygies with your social media handles and receive funds from your friends and family</p>
                        <hr />
                        <p className="about__article px-3">You can serach for users' Paygies using  Page ID, username, UUIDm or cryptocurency address.</p>
                        <hr />
                        <p className="about__article px-3 mb-5">Send fund to other addresses on Paygies</p>
                        {/* <hr className=' '/> */}
                        <Link to="" className="bitmast__btn--about text-uppercase fw-bold">create your address<i className="fa fa-chevron-right ms-3"></i> </Link>
                    </div>
                    <div className="hero__img--about col-12 col-md-6">
                        <section className="slider_setion">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                            
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src="/assets/images/about paygies 1.png" alt="" className="hero__image--about p-2" />
                                    <small className='mt-2 text-danger ms-5'>paygies allows transfers of cryptocurency to Paygies or other wallets</small>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/assets/images/payment.svg" alt="" className=" hero__image--about" />
                                    <small className='mt-2 text-danger ms-5'>users can send funds to recipients in 1 transaction with 1 fee</small>

                                </div>
                                <div className="carousel-item" data-bs-interval="">
                                    <img src="assets/images/crypto.svg" className=" hero__image--about "  />
                                    <small className='mt-2 text-danger ms-5'>users can send funds to recipients in 1 transaction with 1 fee</small>

                                </div>
                            </div>
                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                         </section>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default About