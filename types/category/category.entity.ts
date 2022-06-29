export interface CategoryEntityProperty {
  name: string;
  description: string;
}

export interface CategoryEntityForm extends CategoryEntityProperty {
  img: Blob;
  imgFileName: string;
}

export interface CategoryEntity extends CategoryEntityProperty {
  id?: string;
  img: string;
  createdAt?: string;
}
