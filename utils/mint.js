import { ethers } from "ethers";
import dimasnft from "../DimasNft.json"

export const mint = async () => {

    const contractAddress = "0x587fbb08b015C0a6b0a93899d5cD47a3c9a401c0";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contract = new ethers.Contract(
        contractAddress,
        dimasnft.abi,
        signer
    );
    try{
        const trx = await contract.publicSalesMint({value: ethers.utils.parseEther('0.02')});
        console.log("Trx : ", trx);
    }catch(e){
        console.log("error : ", e);
    }
}