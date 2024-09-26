import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";



const getItems = async (userId) => {
    const items = [];
    const q = query(collection(db, `users/${userId}/shopping-list`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}


const addItems = async (userID, item) => {
    
    
}