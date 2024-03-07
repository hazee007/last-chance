import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export const toggleFavoriteItem = async (userId: string, itemId: string) => {
  const userRef = doc(db, "users", userId);

  // Check if the item is already in the user's favoriteItems array
  const userSnapshot = await getDoc(userRef);
  const favoriteItems = userSnapshot.data()?.favoriteItems || [];

  if (favoriteItems.includes(itemId)) {
    // Item is in the array, remove it
    await updateDoc(userRef, {
      favoriteItems: arrayRemove(itemId),
    });
    console.log("Item removed from favorites");
  } else {
    // Item is not in the array, add it
    await updateDoc(userRef, {
      favoriteItems: arrayUnion(itemId),
    });
    console.log("Item added to favorites");
  }
};

// export const addToCart = async (userId: string, itemId: string) => {
