import React from 'react'
import '../assets/css/subscribe.css'

const SubscribeUs = () => {
  return (
    <div className='subscribe-us'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 text-section">
                    <h6 className="signup-for-head">Sign Up For Hangrr News</h6>
                </div>
                <div className="col-lg-6 col-md-6 col-12 form-section-subscribe">
                    <form action="" className="subscribe-form">
                        <input type="text" placeholder='Enter Your Email..' />
                        <button className="Subscribe-btn btn mb-0">SIGN UP</button>
                    </form>
                    <p className="subscribe-text">By registering you agree to accept the Terms & Conditions and have read the Privacy Policy. Opt out at any time by clicking ‘Unsubscribe’ at the bottom of our emails.</p>
                

</div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeUs