import React, {useState} from 'react'

function Login() {

    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    function loginHandle(e){
        if(user.length<3 || password.length<3){
            alert("type correct values")
        }
        else{
            alert("Login Successfull!")
        }
        e.preventDefault()
    }

    function userHandler(e){
        let item=e.target.value;
        if(item.length <3 ){
           setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(item);
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 ){
           setPassErr(true)
        }else{
            setPassErr(false)
        }
        setPassword(item)
    }

  return (
    <div className="login-page top-res-gap py-5">
        <div className="container">
            <div className="card my-4">
                <div className="card-body login-information">
                    <div className="login-header mb-4">
                        <h3>Welcome Back to Login</h3>
                    </div>
                    {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                    <form onSubmit={loginHandle}>
                        <div className="login-form">
                            <div className="form-group">
                                <label htmlFor="email ">Email</label>
                                <input type="email" className="form-control" id="email" autoComplete='off' name="email" placeholder='Enter Email' onChange={userHandler} />
                                <p className='text-danger mt-1'>{userErr?<span>Type Valid Email</span>:""}</p>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password ">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete='off' name="password" placeholder='Enter secret pin' onChange={passwordHandler} />
                                <p className='text-danger mt-1'>{passErr?<span>Password Not Valid</span>:""}</p>
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