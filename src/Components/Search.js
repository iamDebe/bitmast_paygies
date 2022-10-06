import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-12">
                <label htmlFor="" className="text-capitalize search__header my-3 fw-bold">Search input</label>
                <form action="" className="mt-">
                <div className="input-group mb-1">
                    <input type="text" className="form-control" placeholder="Search Keywords" aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text general_search--input" id="basic-addon1" title="paste crypto address"><i className="fa fa-search"></i></span>
                </div>
                <label htmlFor="" className=" mb-md-5 search__info">Search information using keywords or unique identifiers</label>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search