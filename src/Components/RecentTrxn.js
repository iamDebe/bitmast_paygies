import React from 'react'

const RecentTrxn = () => {
  return (
    <div>
         <section className="recent__trxn my-5 p-md-5 p-2">
                      <label htmlFor=""className="fs-md-3 fs-4 recent__trxn--title fw-bold">Recent Transaction</label>
                      <div className="wrapper  ">
                        <div className="row my-5">
                          <div className="col-md-6  border-dark">
                            <select name="" id="" className="select p-1 rounded-2 bg-white">
                              <option defaultValue="0" selected disabled>choose wallet</option>
                              <option defaultValue="1">bitcoin</option>
                              <option defaultValue="2">dogecoin</option>
                            </select>
                          </div>
                          <div className="col-md-6 mt-md-0 mt-3 border-dark border-2">
                            <select name="" id=""  className="select p-1 rounded-2 bg-white" >
                              <option defaultValue="0" selected disabled>choose wallet</option>
                              <option defaultValue="1">bitcoin</option>
                              <option defaultValue="2">dogecoin</option>
                            </select>
                          </div>
                      </div>
                      <hr  className="mt-4 "/>
                      <form action="">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="" className="text-capitalize fw-bold">start date</label>
                            <input type="date" className="custom__trxn--input rounded-2 p-1 " placeholder='DD/MM/YYYY'   />
                          </div>
                          <div className="col-md-6 mt-md-0 mt-3">
                            <label htmlFor="" className="text-capitalize fw-bold">end date</label>
                            <input type="date" className="custom__trxn--input rounded-2 p-1 " />
                          </div>
                        </div>
                        <button className="custom__btn--alternative my-5 px-2 py-1 rounded-2 fs-4 text-capitalize border-0" type="button">submit</button>
                      </form>
                      </div>
                      <div>

                        <table className="table my-5 table-responsive ">
                          <thead className="custom__table text-white">
                            <tr>
                              <td>Feld A</td>
                              <td>Feld B</td>
                              <td>Feld C</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> A1</td>
                              <td> B1</td>
                              <td> C1</td>
                            </tr>
                            <tr>
                              <td> A2</td>
                              <td> B2</td>
                              <td> C2</td>
                            </tr>
                            <tr>
                              <td> A1</td>
                              <td> B1</td>
                              <td> C1</td>
                            </tr>
                          </tbody>
                          <caption className="fs-md-4 fs-5 fw-semibold text-capitalize tfoot__caption">sample Transaction table</caption>
                        </table>
                      </div>
                     
                    </section>
    </div>
  )
}

export default RecentTrxn