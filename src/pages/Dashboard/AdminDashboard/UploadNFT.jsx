import React, { useRef, useState } from 'react';
import axios from '../../../api/axios';

export default function CreateNFT() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [royalty, setRoyalty] = useState('');
  const [traits, setTraits] = useState({ strength: '', intelligence: '', luck: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleTraitChange = (e) => {
    setTraits({ ...traits, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      formData.append('nft', file);
      formData.append('name', name);
      formData.append('royalty', royalty);
      formData.append('traits[strength]', traits.strength);
      formData.append('traits[intelligence]', traits.intelligence);
      formData.append('traits[luck]', traits.luck);
      const res = await axios.post('/nft/createNft', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('NFT created successfully!');
      setName('');
      setRoyalty('');
      setTraits({ strength: '', intelligence: '', luck: '' });
      setFile(null);
      setImage(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create NFT');
    }
    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen pt-16 p-2 sm:p-6">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Mint NFT</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">NFT Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none text-sm" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">Royalty (%)</label>
            <input type="number" min="0" max="100" value={royalty} onChange={e => setRoyalty(e.target.value)} className="w-full px-3 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none text-sm" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">Strength</label>
              <input type="number" name="strength" value={traits.strength} onChange={handleTraitChange} className="w-full px-3 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none text-sm" required />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">Intelligence</label>
              <input type="number" name="intelligence" value={traits.intelligence} onChange={handleTraitChange} className="w-full px-3 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none text-sm" required />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">Luck</label>
              <input type="number" name="luck" value={traits.luck} onChange={handleTraitChange} className="w-full px-3 py-2 rounded bg-[#18122B] border border-[#D54CFF] text-white focus:outline-none text-sm" required />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">NFT Image</label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="bg-[#D54CFF] px-4 py-2 rounded-full text-white font-semibold hover:bg-[#b13be0]"
              >
                Choose Image
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                required
              />
              {image && <img src={image} alt="NFT Preview" className="w-16 h-16 object-cover rounded mt-2 sm:mt-0" />}
            </div>
          </div>
          {error && <div className="text-red-400 text-center">{error}</div>}
          {success && <div className="text-green-400 text-center">{success}</div>}
          <button type="submit" className="w-full bg-[#D54CFF] py-2 rounded-full text-white font-bold hover:bg-[#b13be0] transition" disabled={loading}>
            {loading ? 'Minting NFT...' : 'Mint NFT'}
          </button>
        </form>
      </div>
    </div>
  );
} 