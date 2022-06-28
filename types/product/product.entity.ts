import { FieldPacket } from 'mysql2';

export type ProductRecordResult = [ProductEntity[], FieldPacket[]];

export interface ProductEntityProperty {
  name: string;
  description: string;
  sku: string;
  categoryId: string;
  img: string
}

export interface ProductEntityForm extends ProductEntityProperty {
  quantity: string;
  price: string;
}

export interface ProductEntity extends ProductEntityProperty {
  id?: string;
  quantity: number;
  price: number;
  createdAt?: string;
}
