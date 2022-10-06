import React from 'react'

const Notification = () => {
  return (
    <div>
         <section className="notification__section my-5 p-md-5 p-2">
                      <div className="row  d-md-flex justify-content-md-between">
                        <div className="col-md-3">
                          <label htmlFor="" className="fs-3 notification__header fw-bold">Notification</label>
                         
                        </div>
                        <div className="col-md-3 mt-md-0 my-2 align-self-md-center">
                          <button htmlFor="" className="custom__btn notiication__btn text-capitalize rounded-21 fs-sm-5 "><span><i className="fa fa-gear px-1"></i></span> Notification settings</button>
                        </div>
                      </div>
                      <div className="notification__wrapper">
                        <div className="row ">
                          <div className="col-12">
                              <div className="row d-md-flex justify-content-md-between">
                                <div className="col-md-6">
                                  <span className="fw-bold notification__title"><i className="fa fa-bell px-2 bell"></i>Notice 1</span>
                                  <div className="row ">
                                    <div className="col-md-12 col-10 notitication__text mt-1">
                                      <p className="">Sample message from test data.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 date">
                                  <p className="">Tue Jun 1 2022 22:00:37 GMT+0100(West African Time Standard Time) </p>
                                </div>
                              </div>
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                              <div className="row d-md-flex justify-content-md-between">
                                <div className="col-md-6">
                                  <span className="fw-bold notification__title"><i className="fa fa-bell px-2 bell"></i>Notice 2</span>
                                  <div className="row ">
                                    <div className="col-md-12 col-10 notitication__text mt-1">
                                      <p className="">Sample message from test data.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 date">
                                  <p className="">Tue Jun 1 2022 22:00:37 GMT+0100(West African Time Standard Time) </p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
         </section>
    </div>
  )
}

export default Notification