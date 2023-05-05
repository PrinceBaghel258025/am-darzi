import React from 'react'
import '../assets/css/gridGallery.css'

const ImageGrid = () => {
  return (
    <div className="grid-part">
        <div className="container px-0">
        <div className='image-grid'>
        <div className="grid-img">
            <img src="https://images.ctfassets.net/w2dr5qwt1rrm/2HdnoGNGTBIBdHjiBcHUCE/c1c06fce7b04334c3503c8b23ecd02ad/suit_2_738x1000.jpg?w=1460&fit=fill&q=70&fm=webp" alt="" className="gallery-image img-fluid" />
            <div className="img-wrapper">
                <p className="img-grid-text">Suit</p>
            </div>
        </div>
        <div className="grid-img">
            <img src="https://images.ctfassets.net/w2dr5qwt1rrm/2HdnoGNGTBIBdHjiBcHUCE/c1c06fce7b04334c3503c8b23ecd02ad/suit_2_738x1000.jpg?w=1460&fit=fill&q=70&fm=webp" alt="" className="gallery-image img-fluid" />
            <div className="img-wrapper">
                <p className="img-grid-text">Suit</p>
            </div>
        </div>
       
        <div className="grid-img">
            <img src="https://images.ctfassets.net/w2dr5qwt1rrm/2HdnoGNGTBIBdHjiBcHUCE/c1c06fce7b04334c3503c8b23ecd02ad/suit_2_738x1000.jpg?w=1460&fit=fill&q=70&fm=webp" alt="" style={{height:'100%'}} className="gallery-image img-fluid" />
            <div className="img-wrapper">
                <p className="img-grid-text">Suit</p>
            </div>
        </div>
        <div className="grid-img">
            <img src="https://images.ctfassets.net/w2dr5qwt1rrm/2HdnoGNGTBIBdHjiBcHUCE/c1c06fce7b04334c3503c8b23ecd02ad/suit_2_738x1000.jpg?w=1460&fit=fill&q=70&fm=webp" alt="" className="gallery-image img-fluid" />
            <div className="img-wrapper">
                <p className="img-grid-text">Suit</p>
            </div>
        </div>
        <div className="grid-img">
            <img src="https://images.ctfassets.net/w2dr5qwt1rrm/2HdnoGNGTBIBdHjiBcHUCE/c1c06fce7b04334c3503c8b23ecd02ad/suit_2_738x1000.jpg?w=1460&fit=fill&q=70&fm=webp" alt="" className="gallery-image img-fluid" />
            <div className="img-wrapper">
                <p className="img-grid-text">Suit</p>
            </div>
        </div>

    </div>
        </div>
    </div>
    
  )
}

export default ImageGrid