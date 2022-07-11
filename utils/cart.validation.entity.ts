import { ProductRecord } from '../records/product.record';

export const productDetails = async (id: string) => ProductRecord.getOne(id);
