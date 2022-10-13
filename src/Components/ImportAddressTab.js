import React, {useState} from 'react'

const ImportAddressTab = () => {
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
           
        <section className="create__address--section mb-md-5 mt-md-3 px-md-5 px-2">
            <label htmlFor="" className="text-capitalize my-3 fw-bold fs-4 createaddress__header">Import address</label>
            <p className="pb-2">Import your existing cryptocurency address for selected cryptocurency into paygies. Imported addresses can be used to receive funds from Paygies but may not be used to send funds. You can always send funds using your private keys or from within platforms in which the address was originally created.</p>
            <div className="create__address--wrapper">
                <div className="row d-flex justify-content-between mb-3">
                <div className="col-md-3 create__address--text mt-1">
                    <span className="text-capitalize fw-bold">Existing address</span>
                </div>
                <div className="col-md-9">
                    <form action="" className="mt-">
                    <div className="input-group mb-1">
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="input-group-text" id="basic-addon1" title="paste crypto address"><i className="fa fa-paste"></i></span>
                        <span className="input-group-text" id="basic-addon1" title=""><i className="fa fa-lock"></i></span>
                    </div>
                    </form>
                    <label htmlFor="" className="create___info">Please paste your cryptocurrency address</label>
                </div>
                </div>
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
                        <button className="custom__btn my-2 px-2 py-1 rounded-2 fs-5 text-capitalize border-0" type="button">submit</button>
                    </div>
                    </div>
                
            </div>
            </section>
    </div>
  )
}

export default ImportAddressTab