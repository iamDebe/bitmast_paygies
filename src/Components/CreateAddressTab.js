import React, {useState} from 'react'
import ImportAddressTab from './ImportAddressTab';


const CreateAddressTab = () => {
    const [labelText, setLabelText] = useState("Select Currency")
    const [labelIcon, setLabelIcon] = useState('/assets/images/money.png')
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
      const selectedIcon = selectedCurrency[0].icon
      setLabelIcon(selectedIcon)

    }


   
  return (
    <div>
        <label htmlFor="" className="text-capitalize createaddress__header fw-bold mb-3 mt-4 mt-md-0">create/Import address</label>
        <div className="tab__component ">
            <ul className="nav nav-pills mb-3 tab__btn" id="pills-tab" role="tablist">
                <li className="nav-item ms-2" role="presentation">
                    <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><span className="text-capitalize ">Create address<i className="fa fa-file px-2"></i></span></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span className="text-capitalize">import address<i className="fa fa-file-arrow-down px-2"></i></span></button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <section className="create__address--section mb-md-5 mt-md-3 px-md-5 px-2  ">
                    <label htmlFor="" className="text-capitalize my-md-3  fw-bold fs-md-4 fs-5 createaddress__header">create address</label>
                    <p className="pb-2 mt-md-0 mt-2">Create a new currency address for selected cryptocurrency address will be automatically added to your paygies profile</p>
                    <div className="create__address--wrapper">
                        <div className="row d-flex justify-content-between mb-3">
                        <div className="col-md-3 create__address--text mt-1">
                            <span className="text-capitalize fw-bold">Descriptive name</span>
                        </div>
                        <div className="col-md-9">
                            <form action="" className="mt-">
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            </form>
                            <label htmlFor="" className="create___info">Provide a human readable name for a label for this wallet or address</label>
                        </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-3 create__address--text mt-1">
                                <img src={labelIcon} alt="" width={30} className=""/><span className="text-capitalize fw-bold ms-1">{labelText}</span>
                            </div>
                            <div className="col-md-9">
                                <select  className="w-100 p-1 rounded-2 border-grey border-1 bg-white" onChange={onChangeHandler}>
                                    <option value={"0"} selected disabled >Select Currency</option>
                                    {cryptoCurrency.map((cryptoInstance, index)=>(
                                            <option value={cryptoInstance.pseudonym} key={index} className="selectCryptoAddress">{cryptoInstance.pseudonym}</option>
                                    ))}
                                </select>
                                <label htmlFor="" className=" mb-5 create___info">Select target Cryptocurrency or network for the wallet or address</label>
                            </div>
                            </div>
                            <div className="row ">
                            <div className="col-md-3 w-100 d-flex justify-content-end">
                                <button className="custom__btn my-2 px-2 py-1 rounded-2 fs-5 text-capitalize border-0 text-white" type="button">submit</button>
                            </div>

                            </div>
                        
                    </div>
                    </section>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <ImportAddressTab />
            
                </div> 
             </div>
        </div>
    </div>
  )
}

export default CreateAddressTab