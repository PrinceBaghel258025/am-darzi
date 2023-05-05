import React, { useState } from 'react'
import '../assets/css/ProductCard.css'

const ProductCard = (prop) => {
    const [Img1, setImg1] = useState(false)
  return (

    <div className="product-card">
        <div className="img-div" onMouseEnter={()=>{
            setTimeout(() => {
                setImg1((prev)=>!prev)
            }, 300);
            }} onMouseLeave={()=>setTimeout(() => {
                setImg1((prev)=>!prev)
            }, 300)}>
            <img src={`${Img1?prop.currImg:prop.hovImg}`} alt="" className="img-fluid" />
        </div>
        <div className="sustainable-card-content">
        <p className="sustainble-card-data-head">{prop.ItemHeading}</p>
        <p className="suit-price">{prop.ItemPrice}$</p>
        <div className="size-wrapper">
        <p className="size-head">Available Size</p>
        <ul className="suit-size">
            
            <li className="size-items">64</li>
            <li className="size-items">64</li>
            <li className="size-items">64</li>
        </ul>
        </div>
        </div>

    </div>
 
  )
}

export default ProductCard