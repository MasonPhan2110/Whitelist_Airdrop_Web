import { getContract } from '@/services/web3React';
import ContractCollection from '@/abi/ContractCollection.json';

export const claim = async(tokenId:any, account: any, library: any) => {
    const contract = getContract(
        "0x297f7F2C68Bf197b748AC65E3C89d05849D2fc8f",
        ContractCollection,
        library,
        account
      );

      await contract?.claimAirdrop(tokenId);
}