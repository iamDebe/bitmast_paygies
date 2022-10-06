import React, {useRef} from 'react'
import PieChart from './PieChart'

const Balance = () => {


  return (
    <div>
         <div className="balance__table my-5 p-md-5 p-2">
                    <div className="row d-md-flex justify-content-between mt-md-5 ">
                        <div className="col-md-3 mb-md-0 mb-3 ">
                            <h1 className="balance__title fw-bold">Balance</h1>
                            <strong className="text-capitalize me-1">paygies ID</strong><span>123456</span><br/>
                            <span>@frier</span>
                            <span>A simple test paygies for application developement</span>
                        </div>
                        <div className="col-md-3 ">
                            <div className="btn-group">
                                <button className="custom__btn  text-capitalize rounded-2   py-md-1">request funds</button>
                                <button className="custom__btn text-capitalize rounded-2 px-md-1 py-md-1 ">send funds</button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-md-flex justify-content-between mt-5 ">
                        <div className=" ms-md-4 col-md-4 col ">
                            <h4>Account Balance Chart</h4>
                            <span className="">Source:Bitmast:Paygies</span>
                            <PieChart />
                            {/* <canvas id="myChart"  width="400" height="400" ></canvas> */}
                           
                        </div>
                       
                        <div className="col-md-6 col ">
                            <h4 className="mt-md-0 mt-4">Account Balance Chart</h4>
                            <span>Balance for user wallets</span>
                            <table className="table table-sm table-md-borderless table-responsive ">
                               
                                  <tbody className="">
                                    <tr className="d-flex justify-content-between">
                                      <td><img src="/assets/images/btc.png" alt="" width="40" height="40" /> Bitcoin (BTC) <i className="fw-bold">0.00542</i></td>
                                      <td className="align-self-md-center  align-self-end"><span className="fw-bold search__header">184,000.000 NGN</span></td>
                                    </tr >
                                    
                                    <tr className="d-flex justify-content-between">
                                      <td><img src="/assets/images/lite.png" alt=""width="40" height="40" />
                                        Litecoin (LTC) <i className="fw-bold">0.00542</i></td>
                                      <td className="align-self-md-center  align-self-end"><span className="fw-bold search__header">184,000.000 NGN</span></td>
                                    </tr>
                                    <tr className="d-flex justify-content-between">
                                      <td><img src="assets/images/dash.png" alt="" width="40" height="40" />
                                        Dashcoin (DTC) <i className="fw-bold">0.00542</i></td>
                                      <td className="align-self-md-center  align-self-end"><span className="fw-bold search__header">184,000.000 NGN</span></td>
                                    </tr>
                                    <tr className="d-flex justify-content-between">
                                      <td><img src="assets/images/doge.png" alt="" width="40" height="40" />
                                        Dogecoin (DTC) <i className="fw-bold">0.00542</i></td>
                                      <td className="align-self-md-center  align-self-end"><span className="fw-bold search__header">184,000.000 NGN</span></td>
                                    </tr>
                                  </tbody>
                              </table>
                        </div>
                    </div>
                  </div>
    </div>
  )
}

export default Balance