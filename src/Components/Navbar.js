import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
         <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top  bg-body nav">
                <div className="container d-flex  my-6 ">
                  <Link className="navbar-brand" to="/"><img src="/assets/images/Bitmast pages2 1.svg" alt="" className="nav__logo" /></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse align-items-center" id="navbarNavAltMarkup" >
                    <div className="navbar-nav nav-item  ms-auto">
                      <Link className="nav-link  nav__list active" aria-current="page" to="/about">About</Link>
                      <Link className="nav-link nav__list" to="/faq">Help</Link>
                      <Link className="nav-link nav__list" to="/register" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                        Sign up
                      </Link>
                      <Link className="nav-link nav__list" to="/login" tabIndex="-1" aria-disabled="false" type="button" data-bs-toggle="offcanvas" data-bs-target="#login">Sign in</Link>
                    </div>
                  </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar