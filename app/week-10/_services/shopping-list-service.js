import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

const getItems = async (userId) => {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};

export { addItem, getItems };
