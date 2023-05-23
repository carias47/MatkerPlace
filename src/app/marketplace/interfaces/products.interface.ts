export interface Productos {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
  cantidad: number;
}

export interface Category {
  id: number;
  name: Name;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum Name {
  Chaise = 'chaise',
  Electronics = 'Electronics',
  Furniture4 = 'Furniture4',
  Hello = 'hello',
  OtherHh = 'Other hh',
}
