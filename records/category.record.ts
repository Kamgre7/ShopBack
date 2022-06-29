import { v4 as uuid } from 'uuid';
import { CategoryEntity } from '../types';

export class CategoryRecord {
  id?:string;

  private name: string;

  private description: string;

  private img: string;

  createdAt?: string;

  constructor(newCategoryEntity: CategoryEntity) {
    this.id = newCategoryEntity.id;
    this.name = newCategoryEntity.name;
    this.description = newCategoryEntity.description;
    this.img = newCategoryEntity.img;
    this.createdAt = newCategoryEntity.createdAt;
  }

  static async getAll():Promise<void> {

  }

  async insert(): Promise<void> {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(this);
  }

  static async getOne(): Promise<void> {

  }
}
