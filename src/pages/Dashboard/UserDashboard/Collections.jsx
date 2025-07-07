import React from 'react'
// import Sidebar from '../../../components/Sidebaar'
import NFTCard from '../../../components/NFTCard'

const collectionsNFTs = [
  {
    id: 1,
    name: "Cyber Punk #001",
    creator: "ZenMaster",
    creatorAvatar: "/Images/profile.png",
    price: "2.4 ETH",
    likes: 128,
    views: 1.2,
    image: "/Images/card4.png",
    status: "available",
    rarity: "rare"
  },
  {
    id: 2,
    name: "Neo Samurai #042",
    creator: "CyberFox",
    creatorAvatar: "/Images/profile1.png",
    price: "3.1 ETH",
    likes: 89,
    views: 0.8,
    image: "/Images/card-5.jpg",
    status: "available",
    rarity: "epic"
  },
  {
    id: 3,
    name: "Matrix Girl #133",
    creator: "HackQueen",
    creatorAvatar: "/Images/profile2.png",
    price: "1.8 ETH",
    likes: 256,
    views: 2.1,
    image: "/Images/card6.jpg",
    status: "available",
    rarity: "legendary"
  },
  {
    id: 4,
    name: "Pixel Punk #007",
    creator: "PixelGod",
    creatorAvatar: "/Images/profile.png",
    price: "2.9 ETH",
    likes: 167,
    views: 1.5,
    image: "/Images/card7.png",
    status: "available",
    rarity: "rare"
  },
  {
    id: 5,
    name: "Synth Warrior #089",
    creator: "GhostAI",
    creatorAvatar: "/Images/profile1.png",
    price: "3.7 ETH",
    likes: 94,
    views: 0.9,
    image: "/Images/card8.png",
    status: "available",
    rarity: "epic"
  },
  {
    id: 6,
    name: "Quantum Rebel #156",
    creator: "SynthKid",
    creatorAvatar: "/Images/profile2.png",
    price: "2.1 ETH",
    likes: 203,
    views: 1.8,
    image: "/Images/card9.png",
    status: "available",
    rarity: "rare"
  }
]

const Collections = () => {
  return (
    <div className='md:px-24 px-12'>
        {/* <Sidebar/> */}
         <h1 className="font-[500] mt-30 text-[24px] w-full text-center md:text-[48px]">Collections</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           {collectionsNFTs.map((nft) => (
             <NFTCard key={nft.id} nft={nft} />
           ))}
         </div>
    </div>
  )
}
export default Collections