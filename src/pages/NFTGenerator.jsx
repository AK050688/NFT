import React, { useState, useRef } from 'react';

const backgrounds = [
  null, 
  '/Images/NFTAssets/backgrounds/Background4.png'
];
const apes = [
  null,
  '/Images/NFTAssets/apes/Ape4.png'
];
const hats = [
  null, 
  '/Images/NFTAssets/hats/Hat4.png'
];
const glasses = [
  null, 
  '/Images/NFTAssets/glasses/Glasses4.png'
];

const CANVAS_SIZE = 400;

const NFTGenerator = () => {
  const [selectedBg, setSelectedBg] = useState(backgrounds[1]);
  const [selectedApe, setSelectedApe] = useState(apes[1]);
  const [selectedHat, setSelectedHat] = useState(hats[0]);
  const [selectedGlasses, setSelectedGlasses] = useState(glasses[0]);
  const canvasRef = useRef(null);

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const loadImg = (src) => new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.src = src;
    });
    const images = await Promise.all([
      loadImg(selectedBg),
      loadImg(selectedApe),
      loadImg(selectedHat),
      loadImg(selectedGlasses),
    ]);
    images.forEach(img => {
      if (img) ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    });
    const link = document.createElement('a');
    link.download = 'nft.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#2d0036] flex flex-col items-center py-12 px-2">
      <h1 className="text-4xl font-bold text-white mb-8 font-popo tracking-wide">NFT Layered Generator</h1>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Preview Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#D54CFF]/40" style={{background: 'repeating-conic-gradient(#bbb 0% 25%, #fff 0% 50%) 50% / 40px 40px'}}>
            {/* Layered images */}
            {selectedBg && <img src={selectedBg} alt="Background" className="absolute inset-0 w-full h-full object-contain z-10" />}
            {selectedApe && <img src={selectedApe} alt="Ape" className="absolute inset-0 w-full h-full object-contain z-20" />}
            {selectedHat && <img src={selectedHat} alt="Hat" className="absolute inset-0 w-full h-full object-contain z-30" />}
            {selectedGlasses && <img src={selectedGlasses} alt="Glasses" className="absolute inset-0 w-full h-full object-contain z-40" />}
          </div>
          <button
            onClick={handleDownload}
            className="mt-6 bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#c043e8] transition text-lg"
          >
            Download NFT Image
          </button>
          {/* Hidden canvas for export */}
          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            style={{ display: 'none' }}
          />
          <p className="mt-4 text-white/80 text-center font-popo">Live Preview</p>
        </div>

        {/* Controls Area */}
        <div className="flex-1 bg-[#181028]/80 rounded-2xl p-8 shadow-xl border border-[#D54CFF]/20 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-white mb-4 font-popo">Customize Your Ape</h2>
          {/* Background Selector */}
          <div>
            <label className="block text-white/80 mb-2 font-popo">Background</label>
            <div className="flex gap-3">
              <button
                key="none-bg"
                className={`rounded-xl border-2 ${selectedBg === null ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition flex items-center justify-center w-14 h-14 bg-[#222] text-white text-xs`}
                onClick={() => setSelectedBg(null)}
              >
                None
              </button>
              {backgrounds.slice(1).map((bg, idx) => (
                <button
                  key={bg}
                  className={`rounded-xl border-2 ${selectedBg === bg ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition`}
                  onClick={() => setSelectedBg(bg)}
                >
                  <img src={bg} alt={`bg${idx+1}`} className="w-14 h-14 object-cover rounded-xl" />
                </button>
              ))}
            </div>
          </div>
          {/* Ape Selector */}
          <div>
            <label className="block text-white/80 mb-2 font-popo">Ape</label>
            <div className="flex gap-3">
              <button
                key="none-ape"
                className={`rounded-xl border-2 ${selectedApe === null ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition flex items-center justify-center w-14 h-14 bg-[#222] text-white text-xs`}
                onClick={() => setSelectedApe(null)}
              >
                None
              </button>
              {apes.slice(1).map((ape, idx) => (
                <button
                  key={ape}
                  className={`rounded-xl border-2 ${selectedApe === ape ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition`}
                  onClick={() => setSelectedApe(ape)}
                >
                  <img src={ape} alt={`ape${idx+1}`} className="w-14 h-14 object-contain rounded-xl bg-[#222]" />
                </button>
              ))}
            </div>
          </div>
          {/* Hat Selector */}
          <div>
            <label className="block text-white/80 mb-2 font-popo">Hat</label>
            <div className="flex gap-3">
              <button
                key="none-hat"
                className={`rounded-xl border-2 ${selectedHat === null ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition flex items-center justify-center w-14 h-14 bg-[#222] text-white text-xs`}
                onClick={() => setSelectedHat(null)}
              >
                None
              </button>
              {hats.slice(1).map((hat, idx) => (
                <button
                  key={hat}
                  className={`rounded-xl border-2 ${selectedHat === hat ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition`}
                  onClick={() => setSelectedHat(hat)}
                >
                  <img src={hat} alt={`hat${idx+1}`} className="w-14 h-14 object-contain rounded-xl bg-[#222]" />
                </button>
              ))}
            </div>
          </div>
          {/* Glasses Selector */}
          <div>
            <label className="block text-white/80 mb-2 font-popo">Glasses</label>
            <div className="flex gap-3">
              <button
                key="none-glasses"
                className={`rounded-xl border-2 ${selectedGlasses === null ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition flex items-center justify-center w-14 h-14 bg-[#222] text-white text-xs`}
                onClick={() => setSelectedGlasses(null)}
              >
                None
              </button>
              {glasses.slice(1).map((glassesImg, idx) => (
                <button
                  key={glassesImg}
                  className={`rounded-xl border-2 ${selectedGlasses === glassesImg ? 'border-[#D54CFF] ring-2 ring-[#D54CFF]' : 'border-transparent'} focus:outline-none transition`}
                  onClick={() => setSelectedGlasses(glassesImg)}
                >
                  <img src={glassesImg} alt={`glasses${idx+1}`} className="w-14 h-14 object-contain rounded-xl bg-[#222]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTGenerator; 