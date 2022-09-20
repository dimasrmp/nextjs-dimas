import { ethers } from "ethers";
import dimasnft from "../DimasNft.json"

export const mint = async () => {

    const contractAddress = "0x46EA2840AA3D65dbcF6979cC2e8fE078f572e2E8";
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