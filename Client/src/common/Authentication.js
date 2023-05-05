import {React,useState} from 'react'
import '../assets/css/authentication.css'



const Authentication = () => {
  const [Email, setEmail] = useState('')
  const [EmailErr, setEmailErr] = useState('')
  const [Data, setData] = useState()

  function handleSubmit(e){
    e.preventDefault()
    
    console.log(Email)
    if(Email==''){
setEmailErr('*Email Address Required')
    }
    else if(Email.length<3){
      setEmailErr('*Enter a valid email')
    }
    else{
      setData(Email)
      setEmailErr('')
    }
   


  }
  return (
    <div className='authentication'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto" >
            <form className="signup-form">
              <p className="sign-in-head">Sign In</p>
              <div class="input-container">
                <input placeholder="Enter Your Email" class="input-field" value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                
                <label for="input-field" class="input-label">Enter Your Email</label>
                <span class="input-highlight"></span>
              </div>
              <p style={{fontSize:'0.8rem',color:'red',textAlign:'left',margin:'0px'}}>{EmailErr}</p>
              
              <div class="input-container mb-3">
                <input placeholder="Enter Your Password" class="input-field" type="password" />
                <label for="input-field" class="input-label">Enter Your Password</label>
                <span class="input-highlight"></span>
              </div>
              

              <button className="btn signup-btn" onClick={handleSubmit}>Sign Up</button>

            </form>

          </div>
          <div className="col-lg-6 col-md-8 col-12 mx-auto d-flex align-items-center justify-content-center flex-column ">
            <div className="auth-btn-area" style={{ width: '100%' }}>
              <div className="row">
                <div className="col-lg-8 col-sm-10 mx-auto col-12 ">
                  <div className="wrapper-form-btn">
                    <p className="create-an-acc">Create an account</p>
                    <button className="btn signup-btn">Register</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Authentication