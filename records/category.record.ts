import { v4 as uuid } from 'uuid';
import { CategoryEntity, CategoryRecordResult } from '../types';
import { pool } from '../utils/db';

export class CategoryRecord {
  id?:string;

  name: string;

  description: string;

  img: string;

  createdAt?: string;

  constructor(newCategoryEntity: CategoryEntity) {
    this.id = newCategoryEntity.id;
    this.name = newCategoryEntity.name;
    this.description = newCategoryEntity.description;
    this.img = newCategoryEntity.img;
    this.createdAt = newCategoryEntity.createdAt;
  }

  static async getAll():Promise<CategoryEntity[]> {
    const [result] = await pool.execute('SELECT * FROM `product_category` ORDER BY `name` ASC') as CategoryRecordResult;
    return result.map((category) => new CategoryRecord(category));
  }

  async insert(): Promise<string> {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date().toISOString().slice(0, 19).replace('T', ' ');

    await pool.execute('INSERT INTO `product_category` VALUES(:id, :name, :description, :img, :createdAt)', {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this.img,
      createdAt: this.createdAt,
    });

    return this.id;
  }

  static async getOne(): Promise<void> {

  }
}
