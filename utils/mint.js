import { ethers } from "ethers";
import dimasnft from "../HilmanNgentot.json"

export const mint = async () => {

    const contractAddress = "0x3512934D093546F471513B55d65aD245417B9057";
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