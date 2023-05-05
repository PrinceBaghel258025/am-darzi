import React from 'react'
import '../assets/css/singleHead.css'

const SingleHeadImg = () => {
  return (
    <div className='single-head'>
        <h6 className="single-head-heading">Jude Law and Raff Law for Brioni</h6>
        <img src="//images.ctfassets.net/w2dr5qwt1rrm/30dHk7HOnsK7mM4Lvy7RF3/547669d2417e7cca66e73fda4c03e713/VideoCover_ProRes2.png"  className='img-fluid singlehead-img' alt="" />
        <p className="subtitile">The Spring/Summer 2023 campaign</p>
        <button className="read-more btn">DISCOVER MORE</button>
    </div>
  )
}

export default SingleHeadImg