import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import TerrmsAndConditions from '../Components/TerrmsAndConditions'
import Login from './Login'

const Register = () => {
  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  const [isToggledOn, setIsToggledOn] = useState(false)
  const [formEnable, setFormEnable] = useState("disabled")
  const [noConsent, setNoConsent] = useState("disagree")

  console.log([fullName, userName, email, phoneNumber, password, isToggledOn]);

  const handleToggle = ()=>{
    setIsToggledOn(!isToggledOn)
    noConsent === "disagree" ? setNoConsent("agree") : setNoConsent("disagree")
    isToggledOn===false && setFormEnable('')
  }

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
    <div>
        <Navbar />
        <main className='container'>
            <section className="register__section" >
                <div className="row ">
                    <div className="col-4 col-md-8">
                        <div className="offcanvas offcanvas-end signup__modal " id="demo">
                            <div className="offcanvas-header d-flex justify-content-end ">
                            <Link type="button" to="#" className="custom__btn--close fw-bold" data-bs-dismiss="offcanvas">Close</Link>
                            </div>
                            <div className="offcanvas-body w-80 mx-auto custom__canvas--body">
                                <form action="" className=" text-white" >
                                    <h2 className=" mb-1 heading__text"> Create an Account </h2>
                                    <p className="sequel__text">or <Link to="/login" className="login_instead" aria-disabled="false" type="button" data-bs-toggle="offcanvas" data-bs-target="#login">Sign in</Link> instead</p>

                                    <div className="my-2">
                                        <p  className="checkbox ">To register you will need to first review Bitmast's <span className="login_instead"><Link to="#"type="button" className="tc fw-bold "data-bs-toggle="modal" data-bs-target="#exampleModal" >Terms and Legal Policies</Link> </span> </p>
                                        {/* <p  className="checkbox ">Submitting registeration form implies you agree to Bitmast's <span className=""><Link to="#"type="button" className="tc fw-bold "data-bs-toggle="modal" data-bs-target="#exampleModal" >Terms and Legal Policies</Link> </span> </p> */}
                                    </div>
                                <fieldset disabled={formEnable} >

                                    <div className="input-group mb-4 ">
                                        <input type="text" className="custom__form--ctrl" placeholder="Full Name"  defaultValue={fullName} name="fullName" onChange={(e) => setFullName(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" className="custom__form--ctrl"   placeholder="Username" defaultValue={userName} name="userName" onChange={(e) => setUserName(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="email" className="custom__form--ctrl" placeholder="Email"  defaultValue={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="number" className="custom__form--ctrl" placeholder="Phone Number"  defaultValue={phoneNumber} name="phoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4 position-relative">
                                        <input type={passwordType} className="  custom__form--ctrl" placeholder="Password" defaultValue={password}  name="password" onChange={(e)=>setPassword(e.target.value)}
                                        />
                                        <span className="input text-white"><i className={ `fa ${eyeIcon}`} onClick={togglePasswordVisibilty}></i></span>
                                    </div>
                            
                                    <button className="bitmast__btn--inverted  mt-3 "><Link to="#">Register</Link></button>
                                </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Login />
        {/* <TerrmsAndConditions /> */}
        <main className='container'>
            <section className="terms_condition">
               
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                    <a className="navbar-brand" href="index.html"><img src="/assets/images/Bitmast pages2 1.svg" alt="" className="nav__logo" /></a>
                    <h5 className="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora commodi modi aliquam dolore rerum odit eos omnis ullam ab architecto quas libero voluptatum vel necessitatibus autem exercitationem iste ad hic nulla similique dicta, deserunt magnam neque? Amet quod culpa, magni qui tempora ullam maiores debitis incidunt nihil cumque et!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora commodi modi aliquam dolore rerum odit eos omnis ullam ab architecto quas libero voluptatum vel necessitatibus autem exercitationem iste ad hic nulla similique dicta, deserunt magnam neque? Amet quod culpa, magni qui tempora ullam maiores debitis incidunt nihil cumque et!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora commodi modi aliquam dolore rerum odit eos omnis ullam ab architecto quas libero voluptatum vel necessitatibus autem exercitationem iste ad hic nulla similique dicta, deserunt magnam neque? Amet quod culpa, magni qui tempora ullam maiores debitis incidunt nihil cumque et!</p>
                    </div>
                    <div className="modal-footer">
                            <span>Toggle switch to proceed with Bitmast Paygies</span><br/>
                        <div className="form-check form-switch">
                            <label className="form-check-label" for="flexSwitchCheckDefault">I {noConsent}</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleToggle}/>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>

    </div>
  )
}

export default Register