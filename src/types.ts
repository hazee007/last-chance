import { count } from "console";
import { Timestamp } from "firebase/firestore";

export type AdditionalInformation = {
  displayName?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
};

export type UserData = {
  id?: string;
  createdAt: Timestamp;
  displayName: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  email: string;
  favoriteItems: string[];
};

export type CategoryData = {
  id?: string;
  name: string;
  createdAt?: Timestamp;
  subcategories: string[];
};

export type ItemData = {
  id?: string;
  name: string;
  price: number | undefined;
  imageUrls: string[];
  category: string;
  subcategory: string;
  quantity: number | undefined;
  description?: string;
  createdAt?: Timestamp | Date;
  updatedAt?: Timestamp | Date;
};

export type CartItem = ItemData & {
  count: number;
};

export interface FileWithPreview extends File {
  preview: string;
}

export interface ItemWithFiles extends ItemData {
  files: FileWithPreview[];
}
