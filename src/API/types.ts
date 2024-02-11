interface IOption { 
    title: string; 
    description: string; 
   }
  
export interface IFetchProductsData {
    products:{
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
    }[]
    totalPages: number;
  }

  export interface IFetchSearchProducts{
    product:{
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
    }[]
  }

  export interface IFetchProductById{
    product:{
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
  }