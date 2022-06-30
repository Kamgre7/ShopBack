import { Router } from 'express';
import { CategoryEntityForm } from '../types';
import { upload } from '../utils/storage';
import { CategoryRecord } from '../records/category.record';
import { filePathToFileName } from '../utils/filePathToFileName';

export const categoryRouter = Router();

categoryRouter
  .get('/', async (req, res) => {
    const allCategories = await CategoryRecord.getAll();
    console.log(allCategories);
  })

  .post('/form', upload.single('img'), async (req, res) => {
    const {
      name, description, imgFileName,
    }: CategoryEntityForm = req.body;

    const newCategory = new CategoryRecord({
      name,
      description,
      img: filePathToFileName(imgFileName),
    });

    const result = await newCategory.insert();
    return res.json(result);
  });
