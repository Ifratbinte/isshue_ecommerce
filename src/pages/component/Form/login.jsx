import React from 'react'

function Login() {

  return (
    <div className="login-page top-res-gap py-5">
        <div className="container">
            <div className="card my-4">
                <div className="card-body login-information">
                    <div className="login-header mb-4">
                        <h3>Welcome Back to Login</h3>
                    </div>
                    {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                    <form>
                        <div className="login-form">
                            <div className="form-group">
                                <label htmlFor="email ">Email</label>
                                <input type="email" className="form-control" id="email" autoComplete='off' name="email" placeholder='Enter Email'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password ">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete='off' name="password" placeholder='Enter secret pin'/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="checkbox"/>
                                    <label className="form-check-label" htmlFor="checkbox">Remembar Me</label>
                                </div>
                                <a href="" className='forget-text'>I Have Forgotten My Password</a>
                            </div>
                            <button className="button-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <div className='mt-4'>
                        <h5>Don't have an account? <a href="/registration" className="text-success">SignUp</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login;