import { postRequest } from "utils/postRequest";
import { IFetchProductById, IFetchProductsData, IFetchSearchProducts } from "./types";
import { urlProductById, urlProducts, urlProductsSearch } from "./consts";

export const productsAPI = {
    getProducts: async (page: number, limit: number) => {
        const ProductListConfig = {
            data: {
              page: page,
              limit: limit,
            },
          };    
        try {
            const response = await postRequest<IFetchProductsData>(urlProducts, ProductListConfig);
            return response.data;
        } catch (error) {
            console.error("Error:", error);
        }
    },

    getProductsSearch: async (text: string) => {  
        const SearchProductsConfig = {
            data: { 
                text: text 
            }
        };
        try {
            const response = await postRequest<IFetchSearchProducts>(urlProductsSearch, SearchProductsConfig);
            return response.data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
    getProductById: async (_id: string) => {  
        const ProductByIdConfig = {
            data: { 
                id: _id
            }
        };
        try {
            const response = await postRequest<IFetchProductById>(urlProductById, ProductByIdConfig);
            return response.data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
}