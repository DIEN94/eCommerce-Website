
export type IPostRequestConfig  = {
  headers?: HeadersInit;
  data: Record<string, any>;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE'
}

type ResponseType <TResponse> = {
  data?: TResponse;
  error?: string;
}

export const postRequest = async <TResponse>(url: string, config: IPostRequestConfig)  => {
  let postResult = {} as ResponseType<TResponse>
  let method = config.method || 'POST'  
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...config.headers,
  };
  const requestBody = JSON.stringify(config.data);

  try {
    let response = await fetch(url, {
      method,
      headers: requestHeaders,
      body: requestBody,
    });
    
    if(!response.ok){
      const message = 'Error'+response.status;
      throw new Error (message)
    }
    
    const responseData = await response.json();
    postResult.data = responseData as TResponse;
    
  } catch (error) {
    postResult.error = 'something went wrong'
  }

  return postResult
};
