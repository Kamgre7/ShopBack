import { v4 as uuid } from 'uuid';
import { ProductEntity, ProductRecordResult } from '../types';
import { pool } from '../utils/db';

export class ProductRecord {
  id?: string;

  private name: string;

  private description: string;

  private quantity: number;

  private price: number;

  private sku: string;

  private categoryId: string;

  private img: string;

  createdAt?: string;

  constructor(newProductEntity: ProductEntity) {
    this.id = newProductEntity.id;
    this.name = newProductEntity.name;
    this.description = newProductEntity.description;
    this.quantity = newProductEntity.quantity;
    this.price = newProductEntity.price;
    this.sku = newProductEntity.sku;
    this.categoryId = newProductEntity.categoryId;
    this.img = newProductEntity.img;
    this.createdAt = newProductEntity.createdAt;
  }

  static async getAll(): Promise<void> {
    const [result] = (await pool.execute('SELECT * FROM `product`') as ProductRecordResult);
    console.log(result);
  }

  async insert(): Promise<void> {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(this);
  }
}
