import { db } from "./config";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

export const getAllMarkers = async () => {
  try {
    const snapshot = await getDocs(collection(db, "markers"));

    const data = [];
    snapshot.forEach((doc) => data.push(doc.data()));
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addMarker = async (newPosition) => {
  try {
    const timestamp = Timestamp.now();
    newPosition.createdAt = timestamp;

    await addDoc(collection(db, "markers"), newPosition);
  } catch (error) {
    console.log(error.message);
  }
};
