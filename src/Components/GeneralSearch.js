import React from 'react'

const GeneralSearch = () => {
  return (
    <div>
         <section className=" mb-5 mt-3 ">
            <label htmlFor="" className="text-capitalize my-3 fw-bold fs-6 logo__header">Logo component</label>
            <div className='row'>
              <div className='col-md-5'>
                <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="assets/images/Bitmast pages2 1.svg" alt="" className="logo__comp--img" />
                </a>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-12">
              <p>
                
              </p>
              <div class="collapse" id="collapseExample">
                  <div class="">
                    <div className="input-group mb-1">
                      <input type="file" className="form-control " placeholder=" " aria-label="Username" aria-describedby="basic-addon1"/>
                      <span className="input-group-text" id="basic-addon1">Browse</span>

                    </div>
                </div>
              </div>
                
              </div>
            </div>
            <label className="my-2 text-capitalize fs-6 fw-bold search__header">search results</label>
            <div className="search__wrapper p-3">
              <div className="row d-flex">
                <div className="col-md-9">
                  <p className="lh-2 fs-6">This is sample search result text. Data component of search should contain only text. HTML text  will be parsed as pure text. User  description of his/her paygies maybe added </p>
                  <span className="text-primary text-decoration-underline"><a href="">paygies </a >or <a href="">item link</a> </span>
                </div>
                <div className="col-md-3 mt-md-0 mt-3">
                  <div className="card custom__card" >
                    <img src="assets/images/card-avatar.png" className="card-img mx-auto custom__card--img" alt="..." /> <span><i className="fa fa-use"></i></span>
                    <div className="card-bod">
                      <h6 className="card-tex custom__card--text text-center ">Lorem, ipsum dolor </h6>
                      <h5 className="card-titl custom__card--title text-center text-uppercase">Celicia asuquo</h5>
                    </div>
                    <small className="text-center text-capitalize ">lorem</small>
                    <img src="assets/images/bitcoinaddress (2).svg" className="card-img-to mx-auto card__img--code" alt="..." />

                    <small className="text-center text-capitalize lh-2 mt-2">Lorem ipsum, dolor sit</small>

                    <div className=" card__address text-center rounded-3 w-100">
                      <span className="  text-dark card__address--text">VGr68bmU676gdRe467 <i className="fa fa-copy ms-1"></i></span>
                    </div>
                    <hr className="card__divider" />
                    <span className="card__social text-center"><i className="fab fa-twitter-square  fs-4 rounded-circle"></i><i className="fab fa-facebook-square  fs-4 px-3"></i><i className="fab fa-instagram-square  fs-4"></i></span>

                  </div>
                  
                </div>
              </div>
              <hr />
              
                <div className="row  d-flex justify-content-start ">
                  <div className="col-md-8">
                    <span className="search__tag">paygies</span>
                    <span className="search__tag">Aniefiok Friday</span>
                    <span className="search__tag">Bitcoin</span>
                  </div>
                </div>
            </div>
          </section>
    </div>
  )
}

export default GeneralSearch