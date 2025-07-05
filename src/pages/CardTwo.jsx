import React, { useState } from 'react'

const CardTwo = ({ card }) => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const openModal = (nft) => setSelectedNFT(nft);
  const closeModal = () => setSelectedNFT(null);


  return (
    <>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 px-2 md:grid-cols-4 gap-8">
        {/* <div className="relative w-full overflow-hidden"> */}


        {card.map((data, index) => (
          <div
            key={index}
            className="px-3"
          // style={{ width: `${100 / card.length}%`, flexShrink: 0 }}
          >
            <div className="h-[571px] bg-black rounded-[24px] shadow-2xl shadow-black">
              <div className="flex items-center gap-[14px] w-[152px] h-[24px] py-8 ml-[24px]">
                <img src="/Images/TrendingCarsdsImg.png" alt="" className='w-[24px]' />
                <p className="text-white font-popo">{data.userName}</p>
              </div>
              <img
                src={data.img}
                alt="img"
                className="h-[363px] w-full object-cover"
              />
              <div className="flex items-center justify-between m-6 h-[76px]">
                <div className="flex flex-col mb-8 font-popo h-[76px] gap-[12px]">
                  <p className="text-[16px] text-white font-[500]">
                    {data.name}
                  </p>
                  <p className="h-[40px] text-sm text-white">{data.recive}</p>
                  <div className="flex gap-6 text-white text-[12px]">
                    <p>{data.price}</p>
                  </div>
                </div>
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

  )
}

export default CardTwo