import { ethers } from "ethers";

export const calCulateReward = (type: string, lastClaim: number) => {
  if (lastClaim === 946659600) {
    return type === 'seed' ? ethers.utils.parseEther("1000") : ethers.utils.parseEther("2000");
  }
  const lastClaimInDate: Date = new Date(lastClaim * 1000);
  const dateNow: Date = new Date();
  const month = dateNow.getMonth() - lastClaimInDate.getMonth() + (dateNow.getFullYear() - lastClaimInDate.getFullYear())* 12;
  console.log(month);

  return type === 'seed' ? ethers.utils.parseEther((month * 1000).toString()) : ethers.utils.parseEther((month * 2000).toString());
};
