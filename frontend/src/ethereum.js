import { ethers } from 'ethers'
import NFT from './contracts/ButchesNFT.json'

const getBlockchain = async () => {
    if (window.ethereum) {
        const provider = await new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const nft = new ethers.Contract(
            "0x23812AfC813D37c113Be809528F751Dcc0f19C47",
            NFT.abi,
            signer
        )

        return nft;
    } else {
        alert("install metamask extension!!")
    }
}

export default getBlockchain;