import {React,useState} from 'react'
import Submenu from './Submenu'

const Li = (prop) => {

    const [active, setactive] = useState(false)

    // function AddActive(){
    //     active=='' ? setactive('active') : setactive('')
        
    // }



  return (
    // <li className={`nav-menu-item has-submenu ${active}`} onClick={AddActive()}  >
    <li className={`nav-menu-item has-submenu ${active ? 'active' : ''}`} onMouseEnter={() => {setactive(prev => !prev)}}  onMouseLeave={() => {setactive(prev => !prev)}} >
                            <p>{prop.heading}</p>

                            <div className={`submenu-wrapper` }>
                            <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="hand-crafted">{prop.wrapperItem}</p>
                                            <div className="side-img">
                                            {/* https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp */}
                                                <img src={prop.leftImage} className='img-fluid' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 nav-menu-right-content d-flex flex-column justify-content-between pb-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <ul className="lis-wrapper">
                                                        <li>{prop.listHead1}</li>
                                                        {
                                                           
                                                            prop.listitem1.map((val,index)=>{
                                                               return <p key={index}>{val}</p>
                                                            })
                                                        }
                                                          
                                                       
                                                       

                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <ul className="lis-wrapper">
                                                    <li>{prop.listHead2}</li>
                                                        {
                                                           
                                                            prop.listitem2.map((val)=>{
                                                               return <p>{val}</p>
                                                            })
                                                        }
                                                          
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <ul className="lis-wrapper">
                                                    <li>{prop.listHead3}</li>
                                                    {
                                                           
                                                           prop.listitem3.map((val)=>{
                                                              return <p>{val}</p>
                                                           })
                                                       }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row mt-auto">
                                                <div className="col-md-2 col-4 img-wrap">
                                                    <img src="https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp" className='img-fluid' alt="" />
                                                    <p className='suit-catagory'>Tuxedos</p>
                                                </div>
                                                <div className="col-md-2 col-4 img-wrap">
                                                    <img src="https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp" className='img-fluid' alt="" />
                                                    <p className='suit-catagory'>Tuxedos</p>
                                                </div>
                                                <div className="col-md-2 col-4 img-wrap">
                                                    <img src="https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp" className='img-fluid' alt="" />
                                                    <p className='suit-catagory'>Tuxedos</p>
                                                </div>
                                                <div className="col-md-2 col-4 img-wrap">
                                                    <img src="https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp" className='img-fluid' alt="" />
                                                    <p className='suit-catagory'>Tuxedos</p>
                                                </div>
                                                <div className="col-md-2 col-4 img-wrap">
                                                    <img src="https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp" className='img-fluid' alt="" />
                                                    <p className='suit-catagory'>Tuxedos</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
  )
}

export default Li