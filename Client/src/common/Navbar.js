import { React, useEffect,useState } from 'react'
 
import '../assets/css/navbar.css'
// import $ from 'jquery'
import { BiSearchAlt2, BiUserCircle, BiCartAlt } from 'react-icons/bi'
import Submenu from './Submenu'
import Li from './li'
import { getDefaultNormalizer } from '@testing-library/react'


const Navbar = () => {
    

    function BurgerMenu() {

        var navMenu = document.querySelector('.nav-menu')
        var hamburger = document.querySelector('.hamburger-menu')
        var Ham1 = document.querySelector('.hamburger-menu .line:nth-child(1)')
        var Ham2 = document.querySelector('.hamburger-menu .line:nth-child(2)')
        var Ham3 = document.querySelector('.hamburger-menu .line:nth-child(3)')
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')



    }
    
    const itemData=[
        {
            heading:'Suits Head',
            wrapperItem:'wrapper Item',
            leftImage:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',
            listHead1:'Sd',
            listitem1:['Clothes','My Suits','Clothes','My Suits','Clothes','My Suits'],
            listHead2:'More Clothes',
            listitem2:['Clothes','My Suits'],
            listHead3:'More Clothes',
            listitem3:['Clothes','My Suits','Clothes','My Suits','Clothes','My Suits'],
            bottomImage:[
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
            ]


        },
        {
            heading:'Suits ',
            wrapperItem:'wrapper Item 2',
            leftImage:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',
            listHead1:'Sd',
            listitem1:['Clothes','My Suits'],
            listHead2:'More Clothes',
            listitem2:['Clothes','My Suits'],
            listHead3:'More Clothes',
            listitem3:['Clothes','My Suits'],
            bottomImage:[
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
                {imgSrc:'https://cdn.hangrr.com/v7/s3/product/457/forest-green-velvet-tuxedo-multi.webp',name:'toxido'},
            ]


        }


    ]
        
    


    return (
        
        <nav className='navbar'>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="hamburger-menu" onClick={BurgerMenu} >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="logo-section">Hanggrr</div>
                    <ul className="nav-menu" >
                        {/* <li className={`nav-menu-item has-submenu `} onClick={AddActive()}  >
                            <p>suits</p>

                            <div className={`submenu-wrapper` }>
                             <Submenu/>  
                            </div>

                        </li>
                        <li className={`nav-menu-item has-submenu ${active}`} onClick={AddActive}>
                            <p>suits</p>

                            <div className="submenu-wrapper">
                            <Submenu/>  
                            </div>

                        </li> */}


                       {itemData.map((val)=>{
                        return <Li heading={val.heading} wrapperItem={val.wrapperItem}   listHead1={val.listHead1} listitem1={val.listitem1} listHead2={val.listHead2} listitem2={val.listitem2} listHead3={val.listHead3} listitem3={val.listitem3} leftImage={val.leftImage} />
                       })}

                        <li className="nav-menu-item">design</li>
                        <li className="nav-menu-item">weddings</li>
                        <li className="nav-menu-item">vegan</li>
                        <li className="nav-menu-item">more</li>
                        <li className="nav-menu-item">about</li>
                        <li className="nav-menu-item">helpdesk</li>
                    </ul>
                    <div className="right-menu">
                        <ul className="right-items">
                            <li className="right-menu-items"><BiSearchAlt2 /></li>
                            <li className="right-menu-items"><BiUserCircle /></li>
                            <li className="right-menu-items"><BiCartAlt /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar