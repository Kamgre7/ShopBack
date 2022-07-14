import { v4 as uuid } from 'uuid';
import { ProductEntity, ProductRecordResult } from '../types';
import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import { createDate } from '../utils/validation.entity';

export class ProductRecord {
  id?: string;

  name: string;

  description: string;

  quantity: number;

  price: number;

  sku: string;

  categoryId: string;

  img: string;

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

  static async getAll(): Promise<ProductRecord[]> {
    const [result] = (await pool.execute('SELECT * FROM `product` ORDER BY `categoryId`') as ProductRecordResult);
    return result.map((product) => new ProductRecord(product));
  }

  static async getOne(id:string):Promise<ProductRecord | null> {
    const [product] = await pool.execute('SELECT * FROM `product` WHERE `id`=:id', {
      id,
    }) as ProductRecordResult;

    return product.length === 0 ? null : new ProductRecord(product[0]);
  }

  async delete(): Promise<void> {
    await pool.execute('DELETE FROM `product` WHERE `id`=:id', {
      id: this.id,
    });
  }

  async insert(): Promise<ProductRecord> {
    if (!this.id) {
      this.id = uuid();
    } else {
      throw new ValidationError('Cannot insert something that is already inserted');
    }

    this.createdAt = this.createdAt ?? createDate();

    await pool.execute('INSERT INTO `product` VALUES(:id, :name, :description, :quantity, :price, :sku, :categoryId, :img, :createdAt)', {
      id: this.id,
      name: this.name,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      sku: this.sku,
      categoryId: this.categoryId,
      img: this.img,
      createdAt: this.createdAt,
    });

    return this;
  }
}
