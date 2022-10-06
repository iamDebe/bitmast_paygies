import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import PasswordRseset from '../Components/PasswordRseset'

const Login = () => {

    const [password, setPassword] = useState("");
     const [email, setEmail] = useState("")

    console.log([password, email]);
    const [passwordType, setPasswordType] = useState("password")
    const [eyeIcon, setEyeIcon] = useState("fa-eye-slash")

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
  return (
    <>
        <Navbar />
        <main className='container'>

            <section className="login__section" >
                <div className="row ">
                    <div className="col-8">
        
                        <div className="offcanvas offcanvas-end signup__modal " id="login">
                            <div className="offcanvas-header d-flex justify-content-end ">
                            <Link type="button" to="" className="custom__btn--close fw-bold" data-bs-dismiss="offcanvas">Close</Link>
                            </div>
                            <div className="offcanvas-body w-80 mx-auto custom__canvas--body">
                                <form action="" >
                                    <h2 className=" mb-1 heading__text"> Existing user login </h2>
                                    
                                    <div className="input-group mb-4 mt-4">
                                        <input type="email" className="  custom__form--ctrl" placeholder="Username or Email" defaultValue={email} name='email' onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-4 position-relative">
                                        <input type={passwordType} className="  custom__form--ctrl" placeholder="Password" defaultValue={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
                                        <span className="input text-white"><i className={ `fa ${eyeIcon}`} onClick={togglePasswordVisibilty}></i></span>
                                    </div>
                                    <label htmlFor="agreeCheckbox" className="checkbox">forgotten username or password?<Link className="tc fw-bold ms-1" to="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#reset"> click here</Link> to reset </label>
                                    <button className="bitmast__btn--inverted  mt-3 "><Link to="/login">Login</Link></button>
                                </form>
                            </div>
                        </div>
                     </div>
                </div>
                
                
                
            </section>
        </main>
        <PasswordRseset />
    </>
  )
}

export default Login