const { ethers } = require("ethers");

async function registerInstitute() {
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_INFURA_KEY");
    const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
    const contractAddress = "0x16e30a01af7a652666b7daad936cc68898024408";
    const abi = [/* Contract ABI Here */];

    const contract = new ethers.Contract(contractAddress, abi, wallet);

    const tx = await contract.registerInstitute("YourInstituteName");
    await tx.wait();

    console.log("Institute registered!");
}

registerInstitute().catch(console.error);