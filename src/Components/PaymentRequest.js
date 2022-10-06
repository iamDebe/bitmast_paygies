import React from 'react'

const PaymentRequest = () => {
  return (
    <div>
         <section className="">
            <label htmlFor="" className="text-capitalize fw-bold address__header my-3 fs-6">payment request</label>
            <form action="" className="mt-">
            <div className="row">
                <div className="col-md-12">
                    
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"><i className="text-danger">*</i>Title</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        
                    </div>
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"><i className="text-danger">*</i>amount</label>
                    <div className="input-group ">
                        <input type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>enter the cost or amount of goods/services in selected currency of payment</span>
                    
                </div>
            </div>
                <div className="row mt-3">
                    <div className="col-md ">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold">source currency</label>
                        <select type="text" className="form-control bg-white" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                        <option defaultValue="0" selected disabled>select currency</option>
                        <option defaultValue="1">bitcoin</option>
                        <option defaultValue="2">litecon</option>
                        </select>
                        <span>Select the currency on which the goods and currency was priced, 
                        <span className="d-md-inline-block d-none">
                        if FIAT currency is selected, the equivalent is calculated for the selected cryptocurrency at payment time
                        </span>
                        <span className="d-md-none d-inline-block" >
                        <button className="custom__btn--ghost rounded-3 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            read more...
                        </button>
                        </span>
                        <div style={{height: "auto"}}>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="car card-bod" style={{width: "100%"}}>
                            if FIAT currency is selected, the equivalent is calculated for the selected cryptocurrency at payment time.
                            </div>
                        </div>
                        </div>
                    </span>
                    </div>
                </div>
                    
                <div className="col-md mt-md-0  mt-3">
                <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold">target currency</label>
                <select type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                    <option defaultValue="0" selected disabled>select currency</option>
                    <option defaultValue="1">bitcoin</option>
                    <option defaultValue="2">litecon</option>
                </select>
                <span>Select the currency you wish to receive the payment,<span className="d-md-inline-block d-none">
                    if diferent from the source currency. Bitmast paygies is not liable for price variations that may arise during currency conversion at point of payment.
                </span>
                    <span className="d-md-none d-inline-block" >
                    <button className="custom__btn--ghost rounded-3 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        read more...
                    </button>
                    </span>
                    <div style={{height: "auto"}}>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <div className="car card-bod" style={{width: "100%"}}>
                        if diferent from the source currency. Bitmast paygies is not liable for price variations that may arise during currency conversion at point of payment.
                        </div>
                    </div>
                    </div>
                </span>
                

            </div>
                <div className="row mt-3">
                    <div className="col-md ">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> start date</label>
                    <div className="input-group ">
                        <input type="date" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>Select date for which payment request becomes active</span>
                    </div>
                    
                    <div className="col-md mt-md-0 mt-3">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> start time</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>Enter the time for the selected date for which this payment request becomes active</span>
                </div>
                
                </div>
                <div className="row mt-3">
                    <div className="col-md">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> end date</label>
                    <div className="input-group ">
                        <input type="date" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>Select date for which payment request becomes inactive</span>
                    </div>
                    
                    <div className="col-md mt-md-0 mt-3">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> end time</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>Enter the time for the selected date for which this payment request becomes inactive</span>
                </div>
            </div>
                <div className="row mt-3">
                    <div className="col-12">
                    <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> <i className="text-danger">*</i>goods or services</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span>Goods and services may differ from the payment request title</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label htmlFor="" className=" text-dark mb-1 text-capitalize fw-bold"> <i className="text-danger">*</i>memo</label>
                        <div className="input-group ">
                        <textarea type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></textarea>
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-3">
                <div className="col-md-6 w-100 d-flex justify-content-md-end">
                    <div className="btn-group">
                        <button className="custom__btn  text-capitalize rounded-2  py-1 px-2">reset</button><button className="custom__btn--alternative  text-capitalize rounded-2 px-2 py-1 ms-3 ">request payment</button>
                    </div>
                </div>
                </div>
            </form>
        </section>
    </div>
  )
}

export default PaymentRequest