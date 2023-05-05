import React from 'react'
import ProductCard from '../common/ProductCard'
import '../assets/css/new-product.css'

const NewProducts = () => {
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
    <div className='new-product'>
    <div className="container-fluid">
        <div className="row">

           
        
      
{MyImg.map((val,index)=>{
    
    return(
        <div className="col-lg-3 col-md-4 col-12 my-product-div">
        <ProductCard key={index} currImg={val.currImg} hovImg={val.hovImg} ItemPrice={val.ItemPrice} ItemHeading={val.ItemHeading}/>
        </div>
    )
})}






        </div>
    </div>
</div>
  )
}

export default NewProducts