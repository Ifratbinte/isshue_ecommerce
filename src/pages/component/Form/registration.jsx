import React, { useState } from 'react'

const Registration = () => {

    
    const [userReg, setUserReg] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""

    });

    // store record
    const [records, setRecords] = useState([])

    // show value
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name, value)

        setUserReg({...userReg, [name] : value})
    }

    // store record
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userReg, id: new Date().getTime().toString()}
        // console.log(newRecord);
        alert("Successfully Registered!");
        setRecords([...records, newRecord]);

        // clear old data from input
        setUserReg({firstName:"", lastName: "", email: "", phone:"", password:""})
    }

  return (
        <section className="registration-page top-res-gap py-5">
            <div className="container">
                <div className="card my-4">
                    <div className="card-body registration-information">
                        <div className="registration-header mb-4">
                            <h3>Create an account</h3>
                            <p>For registration please fillup the required field</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="registration-form">
                                <div className="form-group">
                                    <label htmlFor="first">First Name<span>*</span></label>
                                    <input type="text" className="form-control" id="first" autoComplete='off' value={userReg.firstName} onChange={handleInput} name="firstName" placeholder='Enter name'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last">Last Name<span>*</span></label>
                                    <input type="text" className="form-control" id="last" autoComplete='off' value={userReg.lastName} onChange={handleInput} name="lastName" placeholder='Enter name'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email ">Email<span>*</span></label>
                                    <input type="email" className="form-control" id="email" autoComplete='off' value={userReg.email} onChange={handleInput} name="email" placeholder='Enter Email'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number<span>*</span></label>
                                    <input type="number" className="form-control" id="phone" autoComplete='off' value={userReg.phone} onChange={handleInput} name="phone" placeholder='Enter phone number'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password ">Password<span>*</span></label>
                                    <input type="password" className="form-control" id="password" autoComplete='off' value={userReg.password} onChange={handleInput} name="password" placeholder='Enter secret pin'/>
                                </div>
                                <button className="button-primary" type="submit">Registration</button>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <h5>Already have an account? <a href="/login" className="text-success">SignIn</a></h5>
                        </div>
                        <div className="terms-text text-center">
                            <a href="/terms">Terms & Privacy policy.</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Registration;
