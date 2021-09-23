export type AvailableSizes = string[];

export interface IProduct {
  _id: string;
  image: string;
  title: string;
  description: string;
  availableSizes: AvailableSizes;
  price: number;
  count?: number;
}
