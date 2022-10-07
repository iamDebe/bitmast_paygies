import React, { useState, useRef } from 'react'
import AddressaBalanceTable from './AddressBalanceTable'
import CreateAddressTab from './CreateAddressTab'
import GeneralSearch from './GeneralSearch'
import PaymentRequest from './PaymentRequest'
import Search from './Search'
import Slider from './Slider'

const General = () => {
    const [lockIcon, setLockIcon] = useState("fa-unlock")
    const [isBackgroundRed, setIsBackgroundRed] = useState(true)


//    const myStyle = {
//         backgroundColor: "red",
//       };



    const bgColor = useRef()
    
   

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
                <input type="text" className="form-control address__paste--input" placeholder="Paste your 34 character crypto address " aria-label="Username" aria-describedby="basic-addon1"  name="addressInput" onChange={switchIcon}/>
                <span className="input-group-text address__paste" id="basic-addon1" title="paste crypto address"><i className="fa fa-paste address__paste--icon"></i></span>
                <span className="input-group-text address__paste-1" id="basic-addon1" title="" ref={bgColor} style={{
                    backgroundColor: isBackgroundRed ? '#0f0fd1' : 'orange',
                }}><i className={`fa ${lockIcon} address__paste--icon`}></i></span>
                </div>
                <label htmlFor="" className=" mb-md-5 general__info">Please paste crypto address</label>

            </form>
            <div className="general__wrapper mt-4 mt-md-0">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="row d-flex justify-content-between">
                        <div className="col-md-12">
                            <span className="fw-bold general__title text-capitalize">network select</span>
                            <div className="row my-3">
                            <div className="col-md-3 general__text mt-md-1">
                                <span className="text-capitalize fw-bold"><i className="fa fa-money-bill-1-wave pe-md-2 pe-2"> </i>select currency</span>
                            </div>
                            <div className="col-md-9">
                                <select  className="w-100 p-1 rounded-2 border-grey border-1 bg-white">
                                <optgroup className="input-group mb-1">
                                    <option defaultValue="0" disabled selected>select currency</option>
                                    <option defaultValue="0">Bitcoin</option>
                                    <option defaultValue="1">Litecoin</option>
                                    <option defaultValue="2">Dogecoin</option>
                                </optgroup>
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