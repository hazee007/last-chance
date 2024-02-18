import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import { CategoryData } from "../types";

export async function addCategory(data: CategoryData) {
  try {
    const itemsCollection = collection(db, "categories");
    const docRef = await addDoc(itemsCollection, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function updateCategory(data: CategoryData, id: string) {
  try {
    const itemDoc = doc(db, "categories", id);
    await updateDoc(itemDoc, data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function deleteCategory(id: string) {
  try {
    await deleteDoc(doc(db, "categories", id));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}
