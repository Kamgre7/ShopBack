import { Router } from 'express';
import { CategoryEntityForm } from '../types';
import { upload } from '../utils/storage';
import { CategoryRecord } from '../records/category.record';
import { ValidationError } from '../utils/errors';

export const categoryRouter = Router();

categoryRouter
  .get('/', async (req, res):Promise<void> => {
    const allCategories = await CategoryRecord.getAll();
    res.json(allCategories);
  })

  .get('/:id', async (req, res):Promise<void> => {
    const category = await CategoryRecord.getOne(req.params.id);

    if (category === null) {
      throw new ValidationError('Cannot find category');
    }

    res.json(category);
  })

  .post('/form', upload.single('img'), async (req, res) => {
    const {
      name, description,
    }: CategoryEntityForm = req.body;

    const allCategories = await CategoryRecord.getAll();
    const findDuplicate = allCategories.filter((category) => category.name.toLowerCase() === name.toLowerCase());

    if (findDuplicate.length > 0) {
      throw new ValidationError('This name is already taken. Try other one.');
    }

    const newCategory = new CategoryRecord({
      name,
      description,
      img: req.file.originalname,
    });

    const result = await newCategory.insert();
    res.json(result);
  });
