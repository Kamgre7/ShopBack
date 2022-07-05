import { FieldPacket } from 'mysql2';

export type ProductRecordResult = [ProductEntity[], FieldPacket[]];

export interface ProductEntityProperty {
  name: string;
  description: string;
  sku: string;
  categoryId: string;
}

export interface ProductEntityForm extends ProductEntityProperty {
  quantity: string;
  price: string;
  img: Blob;
}

export interface ProductEntity extends ProductEntityProperty {
  id?: string;
  quantity: number;
  price: number;
  createdAt?: string;
  img: string
}
