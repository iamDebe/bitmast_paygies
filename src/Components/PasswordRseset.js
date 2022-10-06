import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const PasswordRseset = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetCode, setResetCode] = useState("");

    const [passwordType, setPasswordType] = useState("password");
    const [pwordType, setPwordType] = useState("password");
    const [eyeIcon, setEyeIcon] = useState("fa-eye-slash");
    const [viewIcon, setViewIcon] = useState("fa-eye-slash");

    console.log([email, newPassword, confirmPassword, resetCode])

    const togglePasswordVisibilty =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         setEyeIcon('fa-eye')
         return;
        }
        setPasswordType("password")
        setEyeIcon('fa-eye-slash')
      }
    const showPassword =()=>{
        if(pwordType==="password")
        {
         setPwordType("text")
         setViewIcon('fa-eye')
         return;
        }
        setPwordType("password")
        setViewIcon('fa-eye-slash')
      }
  return (
    <div>
        <Navbar />
        <main className='container'>
            <section className="reset__section" >
                <div className="row ">
                    <div className="col-8">
        
                        <div className="offcanvas offcanvas-end signup__modal " id="reset">
                            <div className="offcanvas-header d-flex justify-content-end ">
                            <Link type="button" to="" className="custom__btn--close fw-bold" data-bs-dismiss="offcanvas">Close</Link>
                            </div>
                            <div className="offcanvas-body w-80 mx-auto custom__canvas--body">
                                <form action="" >
                                    <h2 className=" mb-1 heading__text"> Forgot your <br /> Password? </h2>
                                    <div className="input-group mb-4 mt-4">
                                        <input type="email" className="  custom__form--ctrl" placeholder="Email" defaultValue={email} name="email" onChange={(e)=>setEmail}/>
                                    </div>
                                    <div className="input-group mb-4 position-relative">
                                        <input type={passwordType} className="  custom__form--ctrl" placeholder="New Password" defaultValue={newPassword} name="newPassword" onChange={(e)=>setNewPassword(e.target.value)} />
                                        <span className="input text-white"><i className={ `fa ${eyeIcon}`} onClick={togglePasswordVisibilty}></i></span>
                                    </div>
                                    <div className="input-group mb-4 position-relative">
                                        <input type={pwordType} className="  custom__form--ctrl" placeholder="Confirm Password" defaultValue={confirmPassword} name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                                        <span className="input text-white"><i className={ `fa ${viewIcon}`} onClick={showPassword}></i></span>
                                    </div>
                                    <div className="input-group mb-4 ">
                                        <input type="number" className="  custom__form--ctrl" placeholder="Reset Code"  defaultValue={resetCode} name="resetCode" onChange={(e)=>setResetCode(e.target.value)}/>
                                    </div>
                                
                                    <button className="bitmast__btn--inverted  mt-3 "><Link to="">Reset</Link></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default PasswordRseset