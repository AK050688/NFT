import React, { useState } from 'react';
import { mintNFT } from '../api/nft';

const MintNFT = () => {
  const [form, setForm] = useState({
    name: '',
    royalty: '',
    traits: { luck: '', intelligence: '', strength: '' },
    tokenId: '',
  });
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["luck", "intelligence", "strength"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        traits: { ...prev.traits, [name]: value }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('nft', file);
      formData.append('name', form.name);
      formData.append('royalty', form.royalty);
      formData.append('tokenId', form.tokenId);
      formData.append('traits[strength]', form.traits.strength);
      formData.append('traits[intelligence]', form.traits.intelligence);
      formData.append('traits[luck]', form.traits.luck);
      await mintNFT(formData);
      setMessage('NFT created successfully!');
      setForm({ name: '', royalty: '', traits: { luck: '', intelligence: '', strength: '' }, tokenId: '' });
      setFile(null);
      setImage(null);
    } catch (err) {
      setMessage('Failed to create NFT.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#181818] rounded-xl shadow-md mt-10 text-white space-y-4">
      <h2 className="text-2xl font-bold mb-4">Mint New NFT</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <input name="royalty" value={form.royalty} onChange={handleChange} placeholder="Royalty" type="number" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <input name="tokenId" value={form.tokenId} onChange={handleChange} placeholder="Token ID" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <input name="luck" value={form.traits.luck} onChange={handleChange} placeholder="Luck" type="number" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <input name="intelligence" value={form.traits.intelligence} onChange={handleChange} placeholder="Intelligence" type="number" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <input name="strength" value={form.traits.strength} onChange={handleChange} placeholder="Strength" type="number" className="w-full p-2 rounded bg-[#232046] mb-2" required />
      <div className="mb-2">
        <label className="block mb-1">NFT Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 rounded bg-[#232046]" required />
        {image && <img src={image} alt="NFT Preview" className="w-24 h-24 object-cover rounded mt-2" />}
      </div>
      <button type="submit" disabled={loading} className="w-full bg-[#D54CFF] hover:bg-[#c043e8] text-white font-semibold py-2 rounded transition">
        {loading ? 'Minting...' : 'Mint NFT'}
      </button>
      {message && <div className="mt-4 text-center text-sm" style={{ color: message.includes('success') ? '#22c55e' : '#ef4444' }}>{message}</div>}
    </form>
  );
};

export default MintNFT; 