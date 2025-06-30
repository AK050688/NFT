import React from 'react'

const Card = ({card}) => {
    console.log(card)
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {card.map((data,index)=>(
            <div key={index} className="w-[360px] h-[571px] bg-[#090A0833] rounded-[24px] shadow-2xl shadow-black">
              <div className="w-[152px] h-[24px] mb-8 mt-[27px] ml-[24px] gap-[14px] flex ">
                <img src="/Images/TrendingCarsdsImg.png" alt="" />
                <p className="text-white font-popo">Jhon Doe</p>
              </div>
              <img src={data.img} alt="img" className='h-[363px]'/>
              <div className="flex w-[324px]  items-center justify-between m-6 h-[76px]">
                <div className="flex flex-col mb-8 font-popo  h-[76px] gap-[12px] ">
                  <p className="text-[16px] text-white font-[500]">
                    Monkey rogo
                  </p>
                  <p className=" h-[40px] text-sm text-white">Reserve Price </p>
                  <div className="flex gap-6 text-white text-[12px] ">
                    <p>12.55$</p>
                    <p>USDT</p>
                  </div>
                </div>
                <div className="">
                  <button className="btn bg-[#5BDA00] px-[33px] rounded-3xl shadow-none"> Buy</button>
                </div>
              </div>
            </div>
       ))}
    </div></div>
  )
}

export default Card