import { useEffect, useState } from "react";
import { IPostRequestConfig, postRequest } from "../utils/postRequest";


export const useFetchData = <T>(url: string, config: IPostRequestConfig, debs:any[]=[]) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await postRequest<T>(url, config);
        setData(response.data);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, ...debs ]);

  return { data, error, isLoading };
};