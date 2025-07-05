import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NFTCard from "../components/NFTCard";
import { nftData } from "../data/nftData";

const cardData = [
  {
    name: "Monkey rogo",
    img: "/Images/cardImg.jpg",
    profileImg: "",
    userName: "Jhon Doe",
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
const marketplace = [
  {
    name: "Micheal",
    img: "/Images/card4.png",
        profileImg: "",
    userName: "Jhon Doe",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
  {
    name: "Micheal",
    img: "/Images/card-5.jpg",
        profileImg: "",
    userName: "Jhon Doe",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
  {
    name: "Micheal",
    img: "/Images/card6.jpg",
  },
  {
    name: "Micheal",
    img: "/Images/card7.png",
        profileImg: "",
    userName: "Jhon Doe",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
  {
    name: "Micheal",
        profileImg: "",
    userName: "Jhon Doe",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
    img: "/Images/card8.png",
  },
  {
    name: "Micheal",
    img: "/Images/card9.png",
        profileImg: "",
    userName: "Jhon Doe",
    recive: "Reserve Price",
    price: ["12.55$", "USDT"],
  },
];
const howItWork = [
  {
    img: "/Images/wallet.png",
    title: "Setup your Wallet",
    dis: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: "/Images/collection.png",
    title: "Create Collection",
    dis: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: "/Images/earning.png",
    title: "Start earning",
    dis: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];
const Home = () => {
  
  return (
    <div className="">
      <div className=" md:flex relative z-1 flex-col text-center mt-28 md:px-12 justify-center w-full">
        <h1 className="text-white text-[24px] md:text-5xl font-bold">
          UNLOCK . COLLECT
        </h1>
        <div className="h-[48px]"></div>
        <p className="text-white text-[16px] md:text-5xl font-bold">
          PROFIT IN THE NFT WORLD
        </p>
        <div className="w-full text-center flex justify-center mt-12">
          <p className="md:w-[50%] text-center w-[70%] relative z-10 font-[16px] font-popo">
            TradeNFT fuses cutting edge AI trading with smart rewards, giving
            you double the edge earn from every trade and grow with every
            referral. Dive Into the Marketplace
          </p>
        </div>
      </div>
      <div className="bg -top-50 z-0  -left-60"></div>
      <div className="">
        <div className="bg-[url()] absolute z-10 left-0 w-full hbg-cover"></div>
      </div>
      {/*3d modle */}
      <div className="relative w-full h-[120vh]">
        {/* Watermark Hider (Top-right black box) */}
        <div
          className="absolute  md:flex bg-[#000] hidden top-225 md:top-[510px] w-[150px]  h-[40px] md:h-[80px]"
          style={{
            top: "",
            right: "10px",
            // width: "150px",
            // height: "80px",
            zIndex: 10,
          }}
        ></div>

        {/* Responsive Spline Iframe */}
        <iframe
          src="https://my.spline.design/prismcoin-6gp4rjogVh451DnisPNbWsEh/"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Spline 3D"
          className="w-full -top-90 md:relative md:-top-40 absolute  h-[130%] md:h-[120vh]"
        ></iframe>
      </div>

      <div className="bg top-80 z-10 -right-60"></div>

      <div className="bgone"></div>
      <div className="flex  relative z-20 -top-110  justify-center ">
        <div className=" w-full  md:w-[1122px] h-[721px]">
          <h1 className="w-full text-center md:text-2xl text-[24px] h-[80px] text-white">
            TRENDING COLLECTIONS
          </h1>

          {/*Cards */}
          <div className="md:top-10 top-5 relative z-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nftData.slice(0, 3).map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg top-100 z-0  -left-30"></div>
      </div>
      <div className="md:flex relative -top-100 w-full justify-center text-center items-center mt-0 md:m-0">
        <button className="btn rounded-[144.74px] bg-[#D54CFF1A] text-white border-0 shadow-none text-2xl px-6 py-6">
          View More
        </button>
      </div>
      <div className="mt-8 md:mt-0 relative -top-90">
        <h1 className="text-[20px] md:text-[64px] font-[500] w-full text-center">
          EXPLORE MARKETPLACE
        </h1>

        <div className="md:w-[1045] md:h-[40px] mt-20">
          <ul className="hidden md:flex justify-between px-32 w-full ">
            {listData.map((list, index) => (
              <li key={index}>
                <Link className="bg-[#FFFFFF1A] text-[16px] font-[600] px-4 py-2 rounded-3xl">
                  {list}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <div className="relative w-full m-4 px-12 z-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nftData.slice(0, 6).map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
              ))}
            </div>
          </div>
          <div className="bg top-600 z-0 -right-30"></div>

          {/* {marketplace.map((data,index)=>(
        <Card card={marketplace}/>
       ))} */}
        </div>
      </div>
      <div className="flex relative -top-70 w-full justify-center text-center items-center ">
        <button className="btn rounded-[144.74px] bg-[#D54CFF1A] text-white border-0 shadow-none text-2xl px-6 py-6">
          View More
        </button>
      </div>

      <div className="relative -top-55">
        <p className="font-[500] text-[20px] md:text-[64px] w-full text-center">
          HOW IT WORKS
        </p>
      </div>
      <div className="bg top-800 -left-30"></div>
      <div className="bg top-1000 -left-30"></div>

      <div className="bg top-1000 -right-30"></div>

      <div className="px-6 md:px-32 relative -top-50 z-1 flex flex-col gap-6 ">
        {howItWork.map((data, index) => (
          <div
            key={index}
            className="bg-[#090A0833] px-6 md:px-12 rounded-[24px] py-8 md:h-[238px] flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 w-full"
          >
            <img src={data.img} alt="img" className="w-[40%] md:w-[18%]" />
            <div className="flex flex-col md:justify-between md:px-12 text-center md:text-left">
              <p className="text-[22px] md:text-[28px] font-semibold">
                {data.title}
              </p>
              <p className="text-[16px] md:text-[20px] mt-4">{data.dis}</p>
            </div>
            <FaArrowRight className="text-3xl md:text-5xl text-[#D54CFF] mt-4 md:mt-0 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
