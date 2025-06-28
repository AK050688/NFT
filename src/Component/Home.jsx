import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

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
const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col text-center mt-28 px-12 justify-center w-full">
        <h1 className="text-white text-5xl font-bold">UNLOCK . COLLECT</h1>
        <div className="h-[48px]"></div>
        <p className="text-white text-5xl font-bold">PROFIT IN THE NFT WORLD</p>
      </div>
      <div className="bg"></div>
      <div className="">
        <div className="bg-[url()] absolute z-10 left-0 w-full h-[765px] bg-cover">
          <img src="/Images/bgImg.png" alt="" className="w-full h-[76%]" />
        </div>
      </div>
      {/* <div className="bgone"></div> */}
      <div className="flex  mt-148 bg-[#000]  justify-center ">
        <div className=" w-[1122px] h-[721px]">
          <h1 className="w-full text-center text-2xl mt-2 text-[64px] h-[80px] text-white">
            TRENDING COLLECTIONS
          </h1>

          {/*Cards */}

          <Card card={cardData} />
        </div>
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
       <Card card={marketplace}/>
       
       {/* {marketplace.map((data,index)=>(
        <Card card={marketplace}/>
       ))} */}
       </div>
      </div>
     < div className="felx mt-168 w-full justify-center text-center items-center ">
        <button className="btn rounded-[144.74px] bg-[#D54CFF1A] text-white border-0 shadow-none text-2xl px-6 py-6">
          View More
        </button>
      </div>

      <div className="mt-28">
        <p className="font-[500] text-[64px] w-full text-center">HOW IT WORKS</p>
      </div>

      <div className="px-32 py-28">
        <div className="bg-[#090A0833] rounded-[24px] h-[238px] flex w-full">
          <img src="/Images/wallet.png" alt="" />
          <div className="flex flex-col justify-between">
            <p className="">Setup your Wallet</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
