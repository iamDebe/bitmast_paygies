import React, {useState} from 'react'

const PaymentRequest = () => {
    const [labelText, setLabelText] = useState("Select Currency")
    const [cryptoCurrency, setCryptoCurrency] = useState( [ 
        {
            pseudonym: 'Bitcoin',
            icon: '/assets/images/bitcoinnoborder.png'
        },
       {
            pseudonym: 'Litecoin',
            icon: '/assets/images/litenoborder.png'
        },
        {
            pseudonym: 'Dashcoin',
            icon: '/assets/images/dashnoborder.png'
        },
        {
            pseudonym: 'Dogecoin',
            icon: '/assets/images/dogenoborder.png'
        }
    ]);

    const onChangeHandler = (event) => {
        const selectedAddress = event.target.value
        
      setLabelText(selectedAddress)
     

     const selectedCurrency =  cryptoCurrency.filter(function(currency){
          return currency.pseudonym == selectedAddress
      })
    //   const selectedIcon = selectedCurrency[0].icon
    //   setLabelIcon(selectedIcon)

    }

  return (
    <div>
         <section className="">
            <label htmlFor="" className="text-capitalize fw-bold address__header my-3 fs-6">payment request</label>
            <form action="" className="mt-">
            <div className="row">
                <div className="col-md-12">
                    
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"><i className="text-danger">*</i>Title</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        
                    </div>
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"><i className="text-danger">*</i>amount</label>
                    <div className="input-group ">
                        <input type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className='text-secondary'>enter the cost or amount of goods/services in selected currency of payment</span>
                    
                </div>
            </div>
                <div className="row mt-3">
                    <div className="col-md-6 ">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label">source currency</label>
                        <select type="text" className="form-control bg-white" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                            <option defaultValue="0" selected disabled>Nigerian Naira</option>
                            {/* <option defaultValue="1">bitcoin</option>
                            <option defaultValue="2">litecon</option> */}
                        </select>
                        <span  className="text-secondary">Select the currency on which the goods and currency was priced 
                        <span className="d-md-inline-block d-none text-secondary">
                        if FIAT currency is selected, the equivalent is calculated for the selected cryptocurrency at payment time
                        </span>
                        <span className="d-md-none d-inline-block" >
                        <button className="custom__btn--ghost rounded-3 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            read more...
                        </button>
                        </span>
                        <div style={{height: "auto"}}>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="car card-bod text-secondary"style={{width: "100%"}}>
                            if FIAT currency is selected, the equivalent is calculated for the selected cryptocurrency at payment time.
                            </div>
                        </div>
                        </div>
                    </span>
                    </div>
              
                    <div className="col-md-6 mt-md-0  mt-3">
                        <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label">target currency</label>
                        <select type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                        <option value={"0"} selected disable >{labelText}</option>
                                        {cryptoCurrency.map((cryptoInstance, index)=>(
                                                <option value={cryptoInstance.pseudonym} key={index} className="selectCryptoAddress">{cryptoInstance.pseudonym}</option>
                                        ))}
                        </select>
                        <span className="text-secondary">Select the currency you wish to receive the payment
                            <span className="d-md-inline-block d-none text-secondary">
                            if diferent from the source currency. Bitmast paygies is not liable for price variations that may arise during currency conversion at point of payment.
                            </span>
                            <span className="d-md-none d-inline-block" >
                                <button className="custom__btn--ghost rounded-3 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                    read more...
                                </button>
                            </span>
                            <div style={{height: "auto"}}>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className="car card-bod text-secondary" style={{width: "100%"}}>
                                    if diferent from the source currency. Bitmast paygies is not liable for price variations that may arise during currency conversion at point of payment.
                                    </div>
                                </div>
                            </div>
                        </span>
                

                     </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md ">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> start date</label>
                    <div className="input-group ">
                        <input type="date" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className="text-secondary">Select date for which payment request becomes active</span>
                    </div>
                    
                    <div className="col-md mt-md-0 mt-3">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> start time</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Enter time using 24 hours HH:MM format" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className="text-secondary">Enter the time for the selected date for which this payment request becomes active</span>
                </div>
                
                </div>
                <div className="row mt-3">
                    <div className="col-md">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> end date</label>
                    <div className="input-group ">
                        <input type="date" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className="text-secondary">Select date for which payment request becomes inactive</span>
                    </div>
                    
                    <div className="col-md mt-md-0 mt-3">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> end time</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Enter time using 24 hours HH:MM format" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className="text-secondary">Enter the time for the selected date for which this payment request becomes inactive</span>
                </div>
            </div>
                <div className="row mt-3">
                    <div className="col-12">
                    <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> <i className="text-danger">*</i>goods or services</label>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <span className="text-secondary">Goods and services may differ from the payment request title</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label htmlFor="" className=" text-dar mb-1 text-capitalize fw-bold payment__request--label"> <i className="text-danger">*</i>memo</label>
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