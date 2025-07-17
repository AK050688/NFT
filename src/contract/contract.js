// import { ethers } from "ethers";
// import { readFile } from "fs/promises";
// const TradeArenaNFT_ABI = JSON.parse(
//   await readFile(new URL("./TradeArenaNFT.json", import.meta.url))
// ).abi; 
// import Config from "config";

// // Corrected config access
// const provider = new ethers.JsonRpcProvider(Config.get("contract.RPC_URL"));
// const wallet = new ethers.Wallet(
//   Config.get("contract.ADMIN_PRIVATE_KEY"),
//   provider
// );
// const contract = new ethers.Contract(
//   Config.get("contract.CONTRACT_ADDRESS"),
//   TradeArenaNFT_ABI,
//   wallet
// );

// export default contract;









// config/contractInstance.js

import { ethers } from "ethers";
import { readFile } from "fs/promises";
import Config from "config";

// Load ABI
const TradeArenaNFT_ABI = JSON.parse(
  await readFile(new URL("./TradeArenaNFT.json", import.meta.url))
).abi;

const provider = new ethers.JsonRpcProvider(Config.get("contract.RPC_URL"));

const wallet = new ethers.Wallet(
  Config.get("contract.ADMIN_PRIVATE_KEY"),
  provider
);

const contract = new ethers.Contract(
  Config.get("contract.CONTRACT_ADDRESS"),
  TradeArenaNFT_ABI,
  wallet
);

export { contract, provider, wallet };
