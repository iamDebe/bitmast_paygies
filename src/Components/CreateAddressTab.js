import React from 'react'

const CreateAddressTab = () => {
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
                                <span className="text-capitalize fw-bold"><i className="fa fa-money-bill-1-wave pe-2"> </i>select currency</span>
                            </div>
                            <div className="col-md-9">
                                <select  className="w-100 p-1 rounded-2 border-grey border-1 bg-white">
                                
                                    <option defaultValue="0" disabled selected>select currency</option>
                                    <option defaultValue="1">Bitcoin</option>
                                    <option defaultValue="2">Litecoin</option>
                                    <option defaultValue="3">Dogecoin</option>
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
                                <span className="text-capitalize fw-bold"><i className="fa fa-money-bill-1-wave pe-2"> </i>select currency</span>
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
             </div>
        </div>
    </div>
  )
}

export default CreateAddressTab