import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { db, storage } from "../firebase";
import { FileWithPreview, ItemWithFiles } from "../types";

async function uploadImage(files: FileWithPreview[]) {
  try {
    const downloadURLs = [];

    for (const file of files) {
      // Create a storage reference with a unique name
      const storageRef = ref(storage, `images/items/${file.name}`);

      // Upload the file to the storage reference
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);
      downloadURLs.push(downloadURL);
    }

    return downloadURLs;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
}

export const deleteImage = async (url: string) => {
  const httpsReference = ref(storage, url);

  try {
    await deleteObject(httpsReference);
    console.log("Image deleted successfully");
  } catch (error) {
    console.error("Error deleting image: ", error);
  }
};

export async function addItem(data: ItemWithFiles) {
  try {
    const { files, ...dataToSave } = data;
    const downloadURLs = await uploadImage(data.files as FileWithPreview[]);
    if (downloadURLs) {
      dataToSave.imageUrls = downloadURLs;
    }
    dataToSave.createdAt = new Date();
    const itemsCollection = collection(db, "items");
    addDoc(itemsCollection, dataToSave);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function updateItem(data: ItemWithFiles, id: string) {
  try {
    const { files, ...dataToUpdate } = data;
    const filesWithName = files.filter((file) => file.name);
    const oldFiles = files.filter((file) => !file.name);
    const downloadURLs = await uploadImage(filesWithName as FileWithPreview[]);
    if (downloadURLs.length > 0) {
      dataToUpdate.imageUrls = [
        ...downloadURLs,
        ...oldFiles.map((file) => file.preview),
      ];
    }
    dataToUpdate.updatedAt = new Date();
    const item = doc(db, "items", id);
    updateDoc(item, dataToUpdate);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}
