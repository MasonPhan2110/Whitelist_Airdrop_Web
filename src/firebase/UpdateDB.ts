import { db } from '@/firebase/clientApp';
import { doc, updateDoc, addDoc,deleteDoc, increment, serverTimestamp, collection } from "firebase/firestore";

export const claimReward = async(_account: string, _reward: number) => {
  const usersRef = doc(db, "Users", _account);

  await updateDoc(usersRef, {
    lastClaim: serverTimestamp(),
    balance: increment(_reward)
  });
}
export const createDataClaim = async(_account: string, reward:number) => {
  const docRef = await addDoc(collection(db, "Data"), {
    amount: reward,
    user: _account,
    time: serverTimestamp()
  });
  
  console.log('Added document with ID: ', docRef.id);
  return docRef.id
}

export const deleteDataClaim = async(_id: string) => {
  await deleteDoc(doc(db, "Data", _id));
}

