import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Faq = () => {
  return (
    <div>
        <Navbar />
            <main className='container about__bod'>
                <section className="faq__section ">
                    <div className="faq__section--heading mb-4 row">
                        <div className="col-8  col-md-12">
                            <h6 className="intro__text fw-bol ">Quick help</h6>
                            <h3 className="sub__text"> How can we help?</h3>
                        </div>
                    </div>
                        <div className="input-group mb-4 row d-flex justify-content-start">
                            <div className="col-md-8 col-9 ">
                                <input type="text" className="  custom__search--ctrl p-2"   placeholder="Search our knowledge" />
                                <label htmlFor='' className='text-primary'>search for information using unique identifiers</label>
                            </div>
                            <div className="col-md-2 col-3  mt-md-0 align-self-center">
                                <Link to="" className="bitmast__btn bitmast__btn--faq">Search</Link>
                            </div>
                        </div>
                    
                </section>
                <section className="faq__section--question bg-white containe mb-4">
                    <div className="row ">
                        <div className="col-12">
                                <h2 className="faq__title text-capitalize fs-1  mt-3">
                                    frequently asked questions
                                </h2>
                        </div>
                    </div>
                    

                    <div className="row mt-4 ">
                        <div className="col-12">
                            <div className="accordion accordion-flush" id="accordionExample">
                                <div className="accordion-item mt-0">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button  fw-semibold fs-md-5 fs-6 custom__accordion--btn fs-4 border border-1 rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How can I create a wallet
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOneheadingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body custom__accordion--body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item mt-2">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed fw-semibold fs-md-5 fs-6 custom__accordion--btn fs-4 border border-1 rounded-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can I create a wallet
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body custom__accordion--body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item mt-2">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed fw-semibold fs-md-5 fs-6 custom__accordion--btn fs-4 border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How can I create a wallet
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body custom__accordion--body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    </div>
  )
}

export default Faq