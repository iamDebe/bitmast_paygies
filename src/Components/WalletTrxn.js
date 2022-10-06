import React from 'react'

const WalletTrxn = () => {
  return (
    <div>
         <section className="wallet__trxn--section my-5 p-md-5 p-2">
                      <div className="trxn__wrapper">
                        <div className="row ">
                          <div className="col-md-12">
                              <div className="row d-flex justify-content-between">
                                <div className="col-md-4 " >
                                  <img src="/assets/images/btc.png" alt="" width="40" height="40" />
                                  <button type="button" class="border-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                                      
                                    Bitcoin (BTC) <strong className=''> <i>0.00646</i></strong></button>
                                </div>
                                <div className="col-md-3">
                                  <span className="fw-bold wallet__balance mt-md-0 mt-1"><i className="fa fa-naira-sign"></i> 160,000.00</span>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-2 date">
                                 <div className="btn-group">
                                  <button className="custom__btn  text-capitalize rounded-2  py-1 me-3"  >Deposit</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">withdraw</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">transfer </button>
                                 </div>
                                </div>
                              </div>
                            <hr className="custom__divider"/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                              <div className="row d-flex justify-content-between">
                                <div className="col-md-4">
                                  <img src="/assets/images/lite.png" alt="" width="40" height="40" />
                                  <span> Litecoin (LTC) <strong><i>0.00646</i></strong></span>
                                </div>
                                <div className="col-md-3">
                                  <span className="fw-bold wallet__balance"><i className="fa fa-naira-sign"></i> 160,000.00</span>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-2 date">
                                  <div className="btn-group">
                                    <button className="custom__btn   text-capitalize rounded-2  py-1 me-3">Deposit</button>
                                    <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">withdraw</button>
                                    <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">transfer </button>
                                  </div>
                                </div>
                              </div>
                              <hr className="custom__divider"/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                              <div className="row d-flex justify-content-between">
                                <div className="col-md-4">
                                  <img src="/assets/images/dash.png" alt="" width="40" height="40" />
                                  <span> Dashcoin (DTC) <strong><i>0.00646</i></strong></span>
                                </div>
                                <div className="col-md-3">
                                  <span className="fw-bold wallet__balance"><i className="fa fa-naira-sign"></i> 160,000.00</span>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-2 date">
                                  <div className="btn-group">
                                  <button className="custom__btn   text-capitalize rounded-2  py-1 me-3">Deposit</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">withdraw</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">transfer </button>
                                </div>
                                </div>
                              </div>
                              <hr className="custom__divider"/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                              <div className="row d-flex justify-content-between">
                                <div className="col-md-4">
                                  <img src="/assets/images/doge.png" alt="" width="40" height="40" />
                                  <span> Dogecoin (DTC) <strong><i>0.00646</i></strong></span>
                                </div>
                                <div className="col-md-3">
                                  <span className="fw-bold wallet__balance"><i className="fa fa-naira-sign"></i> 160,000.00</span>
                                </div>
                                <div className="col-md-4 mt-md-0 mt-2 date">
                                  <div className="btn-group">
                                  <button className="custom__btn   text-capitalize rounded-2  py-1 me-3">Deposit</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">withdraw</button>
                                  <button className="custom__btn--ghost  text-capitalize rounded-2 px-2 py-1 ">transfer </button>
                                </div>
                                </div>
                              </div>
                              <hr className="custom__divider"/>
                          </div>
                        </div>
                      </div>
          </section>
    </div>
  )
}

export default WalletTrxn