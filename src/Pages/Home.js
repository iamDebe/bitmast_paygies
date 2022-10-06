import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import TerrmsAndConditions from '../Components/TerrmsAndConditions';
import Login from './Login';
import PasswordRseset from '../Components/PasswordRseset';
import Register from './Register';

const Home = () => {
  return (
    <div>
        <Navbar />
        <main className='container'>
        {/* HERO SECTION  */}
          <section className="hero__section hero___section--home">
              <div className="row d-flex justify-content-around">
                  <div className="hero__text col-12 col-md-5">
                      <h1 className="hero__title">Cryptocurrency <span className="styled__text">transfers <br /> </span> made easy.</h1>
                      <Link to="" className="bitmast__btn text-uppercase fw-bold mt-">check it out<i className="fa fa-chevron-right ms-3"></i> </Link>
                  </div>
                  <div className="hero__img align-items-center col-12 col-md-6 "><img src="/assets/images/Bridgge with paper plane.png" alt="" className="hero__image img-fluid" /></div>
              </div>
          </section>
          <Register />
          <Login />
          <PasswordRseset />
          <TerrmsAndConditions />
        </main>
    </div>
  )
}

export default Home;