import React from 'react'

const AddressBalanceTable = () => {
  return (
    <div>
         <section className="">
            <label htmlFor="" className="text-capitalize m- fw-bold fs-6 address__header">address balances</label>
            <div className="row">
                <div className="col-md-12">
                <div className="table-responsive table-sm">
                    <table className="table mt-3 table-bordered table-hover">
                    <thead className="custom__table text-white">
                        <tr className="text-capitalize">
                        <td>adress/wallet name</td>
                        <td>address</td>
                        <td>current balance</td>
                        <td>balance after transaction</td>
                        <td>section</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-capitalize">
                        <td> my test wallet</td>
                        <td>1372ThbVyL977THkxadrNi6ie</td>
                        <td> 0.0045</td>
                        <td> insufficient balance:<i className="fw-semibold"> 0.00145</i></td>
                        <td className="text-center">
                          <input type="checkbox" name="" id="" />
                          </td>
                        </tr>
                        <tr className="text-capitalize">
                        <td>Bitmast business wallet</td>
                        <td> 1372ThbVyL977THkxadrNi6ie</td>
                        <td> 0.1045</td>
                        <td> 0.199675</td>
                        <td className="text-center"> <input type="checkbox" name="" id="" /></td>

                        </tr>
                        <tr>
                        <td>Bitmast business wallet</td>
                        <td>1372ThbVyL977THkxadrNi6ie</td>
                        <td>0.06945</td>
                        <td>0.06945</td>
                        <td className="text-center"> <input type="checkbox" name="" id="" /></td>

                        </tr>
                    </tbody>
                    </table>
                </div>
                <span className="address__info">Address with insufficient funds for the given transaction amounts are not enabled for payments</span>
                </div>
            </div>
            <div className="my-5">
            <label htmlFor="" className="text-capitalize fw-bold fs-6 mb-3 address__header">any wallet</label><br />
            <span className="mb-2">Allow users make payments from any wallets or address</span>
            <div className="form-check form-switch mt-2">
              <input className="form-check-input mt-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{height: '20px', width:'40px'}} />
              <label className="form-check-label fs-5 ms-2" htmlFor="flexSwitchCheckDefault">one address <span><i className="fa fa-copy ms-1" title="toggle switch to transer from just one address"></i></span></label>
            </div>
            </div>
       </section>
    </div>
  )
}

export default AddressBalanceTable