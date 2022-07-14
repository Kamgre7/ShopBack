import { ValidationError } from './errors';

export const createDate = ():string => new Date().toISOString().slice(0, 19).replace('T', ' ');

export const checkNameLength = (name:string) => {
  if (name.length <= 3 || name.length > 50) {
    throw new ValidationError('Name and img-name should be longer or equal 3 characters and less than 50');
  }
  return true;
};

export const checkDescriptionLength = (description:string) => {
  if (description.length <= 20 || description.length > 1000) {
    throw new ValidationError('Description should be longer or equal 20 characters and less than 1000');
  }
  return true;
};
