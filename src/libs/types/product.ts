import {
  ProductCollection,
  ProductColor,
  ProductSize,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productColor: string;
  productDesc: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInput {
  productCollection: ProductCollection;
  productName: string;
  productPrice: string;
  productLeftCount: string;
  productSize: ProductSize;
  productColor: ProductColor;
  productDesc: string;
  productImages: string[];
  productViews?: number;
}
export interface ProductInquery {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}
