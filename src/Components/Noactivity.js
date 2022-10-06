import React from 'react'

const Noactivity = () => {
  return (
    <div>
         <section className="noactivity p-md-5 p-2">
                <h4 htmlFor="" className="text-center fs-4 text-capitalize mt-3 search__header">
                no activity yet!
                </h4>
                <div className="row m-3">
                <p className="text-center ">you have not carried out any transactions</p>
                <div className="col-md-4 ">
                    <div className="create__wallet d-flex flex-column activity__card mt-md-0 mt-1">
                    <img src="assets/images/create.svg" alt="" className="create__img py-4 px-2 " />
                    <button type="button" className=" rounded-2  py-md-2 py-1 text-capitalize mx-auto mb-3 mt-2 custom__btn" data-bs-toggle="modal" data-bs-target="#exampleModal-1" data-bs-whatever="@mdo">Create  a wallet</button>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="beneficiary  d-flex flex-column activity__card mt-md-0 mt-2">
                    <img src="assets/images/beneficiary.svg" alt="" className=" ben__img py-4 px-2 " />
                    <button type="button" className=" rounded-2 py-md-2 py-1 text-capitalize mx-auto mb-3 mt-2 custom__btn " data-bs-toggle="modal" data-bs-target="#exampleModal-2" data-bs-whatever="@fat">add a beneficiary</button>
                    </div>
                </div>
                <div className="col-md-4 ">
                <div className="request__payment  d-flex flex-column activity__card mt-md-0 mt-2">
                    <img src="assets/images/request.svg" alt="" className=" request__img py-4 px-2 " />
                    <button type="button" className=" rounded-2 py-md-2 py-1 text-capitalize mb-3 mt-2 custom__btn mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal-3" data-bs-whatever="@getbootstrap">Request payment</button>
                    </div>
                </div>
                </div>
               
        </section>
        <div className="modal fade" id="exampleModal-1" tabIndex="-1" aria-labelledby="exampleModalLabel-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-1">CREATE USER WALLET</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal-2" tabIndex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-2">ADD A BENEFICAIRY</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal-3" tabIndex="-1" aria-labelledby="exampleModalLabel-3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-3">REQUEST PAYMENT</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Noactivity