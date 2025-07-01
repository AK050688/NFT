import React, { useState } from 'react';

const Card = ({ card }) => {
  const [selectedNFT, setSelectedNFT] = useState(null);

  const openModal = (nft) => setSelectedNFT(nft);
  const closeModal = () => setSelectedNFT(null);
console.log(card)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 md:grid-cols-3 gap-8">
        {card.map((data, index) => (
          <div
            key={index}
            className="md:w-[360px] md:h-[571px] bg-[#000] rounded-[24px] shadow-2xl shadow-black"
          >
            <div className="w-[152px] h-[24px] mb-8 mt-[27px] ml-[24px] gap-[14px] flex ">
              <img src="/Images/TrendingCarsdsImg.png" alt="" />
              <p className="text-white font-popo">{data.userName}</p>
            </div>
            <img src={data.img} alt="img" className="h-[363px] w-full" />
            <div className="flex md:w-[324px] items-center justify-between m-6 h-[76px]">
              <div className="flex flex-col mb-8 font-popo h-[76px] gap-[12px] ">
                <p className="text-[16px] text-white font-[500]">{data.name}</p>
                <p className="h-[40px] text-sm text-white">{data.recive}</p>
                <div className="flex gap-6 text-white text-[12px] ">
                  <p>{data.price}</p>
                  {/* <p>{data.price}</p> */}
                </div>
              </div>
              <div>
                <button
                  className="btn bg-[#5BDA00] px-[33px] rounded-3xl shadow-none"
                  onClick={() => openModal(data)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedNFT && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center ">
          <div className="bg-[#111] text-white p-6 rounded-xl w-[90%] md:w-[400px] relative">
            <button
              className="absolute top-2 right-4 text-white text-xl"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedNFT.img}
              alt="NFT"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedNFT.name}</h2>
            <p className="text-sm mb-1">Creator: {selectedNFT.userName}</p>
            <p className="text-sm mb-1">Price: {selectedNFT.price[0]}, {selectedNFT.price[1]}</p>
            <p className="text-sm mb-4">{selectedNFT.recive}</p>
            <button className="btn bg-[#5BDA00] w-full py-2 rounded-full">
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;