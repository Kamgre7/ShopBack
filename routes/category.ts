import { Router } from 'express';
import { CategoryEntityForm } from '../types';
import { upload } from '../utils/storage';
import { CategoryRecord } from '../records/category.record';
import { filePathToFileName } from '../utils/filePathToFileName';

export const categoryRouter = Router();

categoryRouter
  .get('/', (req, res) => {

  })

  .post('/form', upload.single('img'), (req, res) => {
    const {
      name, description, imgFileName,
    }: CategoryEntityForm = req.body;

    const newCategory = new CategoryRecord({
      name,
      description,
      img: filePathToFileName(imgFileName),
    });

    console.log(newCategory.insert());
  });
