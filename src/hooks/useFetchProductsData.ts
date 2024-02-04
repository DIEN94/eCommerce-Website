import { useEffect, useState } from "react";
import { postRequest } from "../utils/postRequest";

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

  export const useFetchProductsData = (page: number, limit: number) => {
    const [productsList, setProductsList] = useState<IFetchProductsData['products']>([]);
    const [totalPages, setTotalPages] = useState<IFetchProductsData['totalPages']>(0);
    const urlProduct = "http://localhost:8000/products";
    const config = {
      data: {
        page: page,
        limit: limit,
      },
    };

    useEffect(() => {
      async function fetchData() {
        const products = await postRequest<IFetchProductsData>(urlProduct, config);
        if (products.data) {
          setProductsList(products.data.products);
          setTotalPages(products.data.totalPages);
        }
      }
      fetchData();
    }, [page, limit]);
  
    return {
      productsList: productsList,
      totalPages: totalPages,
    }
  };