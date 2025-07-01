import React from 'react'
import Sidebar from '../../components/Sidebaar'
import Card from '../Card'

const marketplace =[
  {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card-5.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card6.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card7.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card8.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card9.png",
  },
]
const Saved = () => {
  return (
    <div className='md:px-24 px-12'>
        <Sidebar/>
         <h1 className="font-[500] mt-30 text-[24px] w-full text-center md:text-[48px]">TRENDING COLLECTION</h1>
  <Card card={marketplace}/>
    </div>
  )
}

export default Saved