import React, { useState, useRef } from 'react'
import AddressaBalanceTable from './AddressBalanceTable'
import CreateAddressTab from './CreateAddressTab'
import GeneralSearch from './GeneralSearch'
import PaymentRequest from './PaymentRequest'
import Search from './Search'
import Slider from './Slider'
import { demoAddresses } from '../utils/demoAddresses'

const General = () => {
    const [lockIcon, setLockIcon] = useState("fa-unlock")
    const [isBackgroundRed, setIsBackgroundRed] = useState(true)
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
          console.log(selectedAddress)
          
        setLabelText(selectedAddress)
       

       const selectedCurrency =  cryptoCurrency.filter(function(currency){
            return currency.pseudonym == selectedAddress
        })
        const selectedIcon = selectedCurrency[0].icon
        setLabelIcon(selectedIcon)

      }

    const switchIcon = (e)=>{
        e.target.value.length === 34 ? setLockIcon("fa-rotate-left") : setLockIcon("fa-unlock")
        e.target.value.length === 34 ? setIsBackgroundRed(false) : setIsBackgroundRed(true)
    }
  return (
    <div>
         <section className="general__section my-5 p-md-5 p-2">
            <div className="row  d-flex justify-content-between">
                <div className="col-md-12">
                    <label htmlFor="" className="fs-3 general__header fw-bold text-capitalize">general component</label>
                </div>
            </div>
            <label htmlFor="" className="text-capitalize general__title my-3 fw-bold">crpto address input</label>
            <form action="" className="mt-">
                <div className="input-group mb-1">
                <input type="text" className="form-control address__paste--input" placeholder="Paste your 34 character crypto address " aria-label="Username" aria-describedby="basic-addon1"  title='please paste in crypto addresss do not! type in manually to avoid human typo errors.' onChange={switchIcon}/>
                <span className="input-group-text address__paste" id="basic-addon1" title="paste crypto address" ><i className="fa fa-paste address__paste--icon"></i></span>
                <span className="input-group-text address__paste-1" id="basic-addon1" title="" style={{
                    backgroundColor: isBackgroundRed ? '#0f0fd1' : 'orange',
                }}><i className={`fa ${lockIcon} address__paste--icon`}></i></span>
                </div>
                <label htmlFor="" className=" mb-md-5 general__info">Please paste crypto address</label>

            </form>
            <div className="general__wrapper mt-4 mt-md-0">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="row ">
                        <div className="col-md-12 ">
                            <span className="fw-bold general__title text-capitalize">network select</span>
                            <div className="row my-3 d-flex justify-content-start">
                            <div className="col-md-3 general__text ">
                                  <img src={labelIcon} alt="" width={30} className=""/><span className="text-capitalize fw-bold ms-1">{labelText}</span>
                            </div>
                            <div className="col-md-9">
                                <select  className="w-100 p-1 rounded-2 border-grey border-1 bg-white" onChange={onChangeHandler}  >
                                    <option value={"0"} selected disabled >Select Currency</option>
                                        {cryptoCurrency.map((cryptoInstance, index)=>(
                                                <option value={cryptoInstance.pseudonym} key={index} className="selectCryptoAddress">{cryptoInstance.pseudonym}</option>
                                        ))}
                                </select>
                                <label htmlFor="" className=" mb-md-5 general__info">Select target Cryptocurrency or network for the wallet or address</label>
        
                            </div>
                            </div>
                        </div>
                        </div>
                    <hr />
                    </div>
                </div>
                <Search />
                <CreateAddressTab />
                <GeneralSearch />
                <AddressaBalanceTable />
                <PaymentRequest />
                <Slider />
            </div>
         </section>

    </div>
  )
}

export default General