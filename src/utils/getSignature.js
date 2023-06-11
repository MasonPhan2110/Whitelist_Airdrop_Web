const Web3 = require('web3');

const getSignature = (_internalId, _typeOfClaim, _amount, _account) => {
  const hashMessage = Web3.utils.soliditySha3(
    _internalId,
    _typeOfClaim,
    _account,
    _amount
  );
  console.log(hashMessage);

  const privateKey = process.env.NEXT_PUBLIC_SIGNER_PRIVATE_KEY;
  if (!privateKey) return {};
  const web3 = new Web3(process.env.NEXT_PUBLIC_RPC);
  //  let account = web3.eth.accounts.privateKeyToAccount(privateKey)
  const signature = web3.eth.accounts.sign(hashMessage, privateKey);

  return signature.signature;
};
export default getSignature;
