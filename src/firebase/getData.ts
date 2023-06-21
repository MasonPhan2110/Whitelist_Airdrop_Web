import { db } from '@/firebase/clientApp';
import { doc, getDoc } from "firebase/firestore";

export const checkUserInWhitelist = async(address: string) => {
  const docRef = doc(db, "Users",address);
  const docSnap = await getDoc(docRef);
  return docSnap;
}