import React from 'react'

const Slider = () => {
  return (
    <div>
        <section className="slider_setion">
            <label htmlFor="" className="text-capitalize createaddress__header fw-bold fs-6 mb-md-o mb-3">slider for images</label>
            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>  */}
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <div className="d-block w-md-50 w-50 mx-auto">
                    <img src="assets/images/bitcoinnoborder.png" alt="" className="d-block w-25  mx-auto " />
                    {/* <!-- <span className="text-capitalize fs-md-4 fs-6 fw-bolder d-inline ms-md-2 createaddress__header d-none d-sm-block">Bitcoin Address</span> -->
                    <!-- <p className="text-capitalize fs-md-4 fs-6 text-center fw-bolder d-inline ms-md- createaddress__header d-md-none d-inline-block">Bitcoin Address</p> --> */}
                </div>
                <div className="custom__slider--text text-center ">
                    <span className="fw-bolder createaddress__header fs-4 fs-sm-5  my-3">Bitcoin Address</span>
                    <p className="">make small or large transfers <br className="d-md-none" /> using mulitiple cryptocurency</p>
                </div>
                <img src="assets/images/bitcoinaddress (2).svg" className="d-block w-50 mx-auto" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <div className="d-block w-md-50 w-50 mx-auto">
                    <img src="assets/images/litenoborder.png" alt="" className="d-block w-25 mx-auto " />
                    {/* <!-- <span className="text-capitalize w-100 fw-bolder d-inline ms-md-2 createaddress__header  d-md-block d-none">Litecoin Address</span>
                    <p className="text-capitalize fs-4 fs-sm-5  text-center fw-bolder d-inline ms-md-4 ms-2 createaddress__header d-md-none d-inline-block">Litecoin Address</p> --> */}
                </div>
                <div className="custom__slider--text d-block text-center">
                    <span className="fw-bolder createaddress__header fs-4 fs-sm-5  my-3">Litecoin Address</span>
                    <p className="">make small or large transfers  <br className="d-md-none" /> using mulitiple cryptocurency</p>
                </div>
                <img src="assets/images/bitcoinaddress (2).svg" className="d-block w-50 mx-auto" alt="..." />
                </div>
                <div className="carousel-item">
                <div className="d-block w-md-50 w-50 mx-auto">
                    <img src="assets/images/dogenoborder.png" alt="" className="d-block w-25 mx-auto " width="40" />
                    {/* <!-- <span className="text-capitalize w-100 fw-bolder d-inline ms-4 createaddress__header d-md-block d-none">Dogecoin Address</span>
                    <p className="text-capitalize fs-4 fs-sm-5  text-center fw-bolder d-inline ms-md-4  createaddress__header d-md-none d-inline-block"> Dogecoin Address</p> --> */}
                </div>
                <div className="custom__slider--text d-block text-center">
                    <span className="fw-bolder createaddress__header fs-4 fs-sm-5  my-3">Dogecoin Address</span>

                    <p className="">make small or large transfers <br className="d-md-none" /> using mulitiple cryptocurency</p>
                </div>
                <img src="assets/images/bitcoinaddress (2).svg" className="d-block w-50 h-50 mx-auto" alt="..." />
                </div>
                <div className="carousel-item ">
                <div className="d-block w-md-50 w-50 mx-auto">
                    <img src="assets/images/dashnoborder.png" alt="" className="d-block w-25 mx-auto " width="40" />
                    {/* <!-- <span className="text-capitalize w-100 fw-bolder d-inline ms-4 createaddress__header d-md-block d-none">Dash Address</span>
                    <p className="text-capitalize fs-4 fs-sm-5  text-center fw-bolder d-inline ms-md-4  createaddress__header d-md-none d-inline-block"> Dashcoin Address</p> --> */}
                </div>
                <div className="custom__slider--text d-block text-center">
                    <span className="fw-bolder createaddress__header fs-4 fs-sm-5  my-3">Dashcoin Address</span>
                    <p className="">make small or large transfers <br className="d-md-none" /> using mulitiple cryptocurency</p>
                </div>
                <img src="assets/images/bitcoinaddress (2).svg" className="d-block w-50 h-50 mx-auto" alt="..." />
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
  )
}

export default Slider