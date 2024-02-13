interface IOption { 
    title: string; 
    description: string; 
   }

   interface IProduct {
    _id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    discount: null | number;
    dateOfCreating: Date;
    code: string;
    options: IOption[];
    published: boolean;
    tags: string[];
    rating: number;
    img: string[];
}
  
export interface IFetchProductsData {
    products: IProduct[];
    totalPages: number;
  }

  export interface IFetchSearchProducts{
    product: IProduct[];
  }

  export interface IFetchProductById{
    product:IProduct
  }