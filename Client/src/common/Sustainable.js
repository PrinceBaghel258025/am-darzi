import {React,useState} from 'react'
import '../assets/css/sustainable.css'
import ImageCard from './ImageCard'

const Sustainable = () => {
   


    const MyImg=[
        {
            currImg:'https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp',
            hovImg:'https://images.ctfassets.net/w2dr5qwt1rrm/2Xw0N5R72bleASWlRIqWIe/6deaee565c58068ed66f1820d5e60b68/RAPZ0ZPAA350000F.jpg?w=960&fit=fill&q=70&fm=webp',
            ItemHeading:'New Branded Suits',
            ItemPrice:655,
        },
        {
            currImg:'https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp',
            hovImg:'https://images.ctfassets.net/w2dr5qwt1rrm/2Xw0N5R72bleASWlRIqWIe/6deaee565c58068ed66f1820d5e60b68/RAPZ0ZPAA350000F.jpg?w=960&fit=fill&q=70&fm=webp',
            ItemHeading:'New Branded Suits',
            ItemPrice:655,
        },
        {
            currImg:'https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp',
            hovImg:'https://images.ctfassets.net/w2dr5qwt1rrm/2Xw0N5R72bleASWlRIqWIe/6deaee565c58068ed66f1820d5e60b68/RAPZ0ZPAA350000F.jpg?w=960&fit=fill&q=70&fm=webp',
            ItemHeading:'New Branded Suits',
            ItemPrice:655,
        },
        {
            currImg:'https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp',
            hovImg:'https://images.ctfassets.net/w2dr5qwt1rrm/2Xw0N5R72bleASWlRIqWIe/6deaee565c58068ed66f1820d5e60b68/RAPZ0ZPAA350000F.jpg?w=960&fit=fill&q=70&fm=webp',
            ItemHeading:'New Branded Suits',
            ItemPrice:655,
        },
    ]
    
  return (
    <div className='sustainable'>
        <div className="container-fluid">
            <div className="row">

               
            <div className="col-lg-4 col-md-8 mx-auto col-12">

<img src="https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp" alt="" className="sustainable-left-img img-fluid" />
            </div>
            <div className="col-lg-8 col-12 sustainable-card-data-div">
                <h6 className='sustainable-heading'>Sustainable selection</h6>
<div className="row sustainable-card-data">
    {MyImg.map((val,index)=>{
        return(
            <ImageCard key={index} currImg={val.currImg} hovImg={val.hovImg} ItemPrice={val.ItemPrice} ItemHeading={val.ItemHeading}/>
        )
    })}
   

   
   

</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sustainable