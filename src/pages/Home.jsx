import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "./Card";
import StoneScene from "./RotatingStone";
import Spline from '@splinetool/react-spline';

const cardData = [
  {
    profileImg: "",
    userName: "Jhon Doe",
    name: "Monkey rogo",
    img: "/Images/cardImg.jpg",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
  {
    profileImg: "",
    userName: "Jhon Doe",
    img: "/Images/cardImg2.jpg",
    name: "Monkey rogo",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
  {
    profileImg: "",
    userName: "Jhon Doe",
    img: "/Images/cardimg3.jpg",
    name: "Monkey rogo",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
];
const listData = [
  "ALL",
  "ART",
  "GAMING",
  "METAVERSE",
  "DIGHTALART",
  "AI",
  "FUTURISTIC",
  "RARE",
];
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
  },
  {
    name:"Micheal",
    img:"/Images/card8.png",
  },
  {
    name:"Micheal",
    img:"/Images/card9.png",
  },
]
const howItWork=[
  {
    img:"/Images/wallet.png",
    title:"Setup your Wallet",
    dis:"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
  },
    {
    img:"/Images/collection.png",
    title:"Create Collection",
    dis:"Upload your work and setup your collection. Add a description, social links and floor price."
  },
    {
    img:"/Images/earning.png",
    title:"Start earning",
    dis:"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
  },
  
]
const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col text-center mt-28 px-12 justify-center w-full">
        <h1 className="text-white text-5xl font-bold">UNLOCK . COLLECT</h1>
        <div className="h-[48px]"></div>
        <p className="text-white text-5xl font-bold">PROFIT IN THE NFT WORLD</p>
        <div className="w-full text-center flex justify-center mt-12">
        <p className="w-[50%] font-[16px] font-popo">TradeNFT fuses cutting edge AI trading with smart rewards, giving you double the edge  earn from every trade and grow with every referral.
Dive Into the Marketplace</p></div>
      </div>
      <div className="bg -top-50 -left-60"></div>
      <div className="">
        <div className="bg-[url()] absolute z-10 left-0 w-full hbg-cover">
         {/* <StoneScene/> */}
          <div className="w-full h-[120vh] z-0 absolute  ">
      <iframe
        src="https://my.spline.design/prismcoin-6gp4rjogVh451DnisPNbWsEh/"
        frameBorder="0"
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        title="Spline 3D"
      ></iframe>
    </div>

        </div>
      </div>
      
      <div className="bg top-80 -right-60"></div>

      {/* <div className="bgone"></div> */}
      <div className="flex  mt-148 bg-[#000]  justify-center ">
        <div className=" w-[1122px] h-[721px]">
          <h1 className="w-full text-center text-2xl mt-2 text-[64px] h-[80px] text-white">
            TRENDING COLLECTIONS
          </h1>

          {/*Cards */}
<div className=" relative z-1">
          <Card card={cardData} /></div>
        </div>
      <div className="bg top-320  -left-30"></div>

      </div>
      <div className="felx  w-full justify-center text-center items-center mt-16">
        <button className="btn rounded-[144.74px] bg-[#D54CFF1A] text-white border-0 shadow-none text-2xl px-6 py-6">
          View More
        </button>
      </div>
      <div className="mt-36">
        <h1 className="text-[64px] font-[500] w-full text-center">
          EXPLORE MARKETPLACE
        </h1>

        <div className="w-[1045] h-[40px] mt-20">
          <ul className="flex justify-between px-32 w-full ">
            {listData.map((list, index) => (
              <li key={index}>
                <Link
                  className="bg-[#FFFFFF1A] text-[16px] font-[600] px-4 py-2 rounded-3xl"
                >
                  {list}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  w-full justify-center">
          <div className=" relative z-1">
       <Card card={marketplace}/></div>
      <div className="bg top-600 -right-30"></div>
       
       {/* {marketplace.map((data,index)=>(
        <Card card={marketplace}/>
       ))} */}
       </div>
      </div>
     < div className="felx mt-18 w-full justify-center text-center items-center ">
        <button className="btn rounded-[144.74px] bg-[#D54CFF1A] text-white border-0 shadow-none text-2xl px-6 py-6">
          View More
        </button>
      </div>

      <div className="mt-28">
        <p className="font-[500] text-[64px] w-full text-center">HOW IT WORKS</p>
      </div>
      <div className="bg top-800 -left-30"></div>
      <div className="bg top-1000 -left-30"></div>


      <div className="bg top-1000 -right-30"></div>
    
      <div className="px-32 relative z-1 flex flex-col gap-6 py-28">
        {howItWork.map((data,index)=>(
        <div key={index} className="bg-[#090A0833] px-12 justify-between items-center rounded-[24px] h-[238px] flex w-full">
          <img src={data.img} alt="img"className="w-[18%]" />
          <div className="flex flex-col justify-between px-12">
            <p className="text-[28px]">{data.title}</p>
            <p className="text-[20px] mt-10">{data.dis}</p>
          </div>
          <FaArrowRight className="text-5xl text-[#D54CFF]"/>
        </div>))}
      </div>
      


    </div>
  );
};

export default Home;
