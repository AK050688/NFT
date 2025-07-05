import React, { useRef, useState } from 'react';

export default function UploadNFT() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
    alert('NFT uploaded (mock)!');
  };

  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="bg-[#181818] rounded-xl p-8 text-white shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upload NFT</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">NFT Name</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Description</label>
            <textarea className="w-full px-4 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none" rows={3} required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Image</label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="bg-[#D54CFF] px-4 py-2 rounded text-white font-semibold hover:bg-[#b13be0]"
              >
                Choose Image
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              {image && <img src={image} alt="NFT Preview" className="w-16 h-16 object-cover rounded" />}
            </div>
          </div>
          <button type="submit" className="w-full bg-[#D54CFF] py-2 rounded text-white font-bold hover:bg-[#b13be0]">Upload NFT</button>
        </form>
      </div>
    </div>
  );
} 