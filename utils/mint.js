import { ethers } from "ethers";
import dimasnft from "../DimasNft.json"

export const mint = async () => {

    const contractAddress = "0x15db7F47ED6699fBCCB02ec70a61273F7dB04d6a";
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