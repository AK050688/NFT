import api from './axios';

export const fetchNFTs = async () => {
  const response = await api.get('/nfts');
  return response.data;
};

export const mintNFT = async (nftData) => {
  const response = await api.post('/nft/createNft', nftData);
  return response.data;
};

export const getNFTDetail = async (nftId) => {
  const response = await api.get(`/nfts/${nftId}`);
  return response.data;
};

export const getNFTsByOwner = async (ownerId) => {
  const response = await api.get('/nft/getNftByOwnerId', { params: { ownerId } });
  return response.data;
};

export const getNFTsByCreator = async (creatorId) => {
  const response = await api.get('/nft/getNftByCreatorId', { params: { creatorId } });
  return response.data;
};

export const listAllNFTs = async () => {
  const response = await api.get('/nft/listOfNft');
  return response.data;
};

export const listNFTForSell = async (nftData) => {
  const response = await api.put('/nft/listNftForSell', nftData);
  return response.data;
}; 