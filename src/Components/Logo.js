import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
         <div className="container my-5">
            <Link className="navbar-brand" to="/"><img src="assets/images/Bitmast pages2 1.svg" alt="" className=" w-25" /></Link>
        </div>
    </div>
  )
}

export default Logo