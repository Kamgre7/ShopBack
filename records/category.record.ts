import { v4 as uuid } from 'uuid';
import { CategoryEntity, CategoryRecordResult } from '../types';
import { pool } from '../utils/db';
import { ValidationError } from '../utils/errors';
import {
  checkDescriptionLength, checkNameLength, createDate,
} from '../utils/validation.entity';

export class CategoryRecord {
  id?:string;

  name: string;

  description: string;

  img: string;

  createdAt?: string;

  constructor(newCategoryEntity: CategoryEntity) {
    checkNameLength(newCategoryEntity.name);
    checkNameLength(newCategoryEntity.img);
    checkDescriptionLength(newCategoryEntity.description);

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
    if (!this.id) {
      this.id = uuid();
    } else {
      throw new ValidationError('Cannot insert something that is already inserted');
    }

    this.createdAt = this.createdAt ?? createDate();

    await pool.execute('INSERT INTO `product_category` VALUES(:id, :name, :description, :img, :createdAt)', {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this.img,
      createdAt: this.createdAt,
    });

    return this.id;
  }

  static async getOne(id:string): Promise<CategoryEntity | null> {
    const [findCategory] = await pool.execute('SELECT * FROM `product_category` WHERE `id`=:id', {
      id,
    }) as CategoryRecordResult;
    return findCategory.length === 0 ? null : new CategoryRecord(findCategory[0]);
  }
}
