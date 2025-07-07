import React, { useState } from 'react';

const MintNFT = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
    imagePreview: null,
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setForm({
        ...form,
        image: file,
        imagePreview: file ? URL.createObjectURL(file) : null,
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    // TODO: Integrate with backend or smart contract
    setTimeout(() => {
      setLoading(false);
      setMessage('NFT minted (mock)!');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Mint New NFT</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">NFT Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mb-4 w-full"
            required
          />
          {form.imagePreview && (
            <img src={form.imagePreview} alt="Preview" className="mb-4 w-full h-48 object-cover rounded-xl border" />
          )}
          <label htmlFor="name" className="block mb-1 font-semibold">NFT Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="NFT Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            required
          />
          <label htmlFor="description" className="block mb-1 font-semibold">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            required
          />
          <label htmlFor="category" className="block mb-1 font-semibold">Category</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border bg-black rounded-xl"
            required
          >
            <option value="">Select Category</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Games">Games</option>
            <option value="Collectibles">Collectibles</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="price" className="block mb-1 font-semibold">Price (ETH)</label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Price in ETH"
            value={form.price}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-xl"
            min="0"
            step="0.01"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#D54CFF] hover:bg-[#d54cffd7] text-white py-2 rounded  mt-2"
            disabled={loading}
          >
            {loading ? 'Minting...' : 'Mint NFT'}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default MintNFT; 