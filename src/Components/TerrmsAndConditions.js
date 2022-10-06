import React from 'react'
import Navbar from './Navbar'

const TerrmsAndConditions = () => {
  return (
    <div>
        <Navbar />
        <main className='container'>
            <section className="terms_condition">
               
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <a className="navbar-brand" href="index.html"><img src="/assets/images/Bitmast pages2 1.svg" alt="" className="nav__logo" /></a>
                    <h5 className="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora commodi modi aliquam dolore rerum odit eos omnis ullam ab architecto quas libero voluptatum vel necessitatibus autem exercitationem iste ad hic nulla similique dicta, deserunt magnam neque? Amet quod culpa, magni qui tempora ullam maiores debitis incidunt nihil cumque et!</p>
                    </div>
                    <div className="modal-footer">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Toggle switch to proceed with paygies</label>
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

export default TerrmsAndConditions