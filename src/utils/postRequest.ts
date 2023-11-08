
type IConfig  = {
  headers?: HeadersInit;
  data: any;
}

export const postRequest = async <TResponse>(url: string, config: IConfig) => {
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...config.headers,
  };
  const requestBody = JSON.stringify(config.data);

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody,
    });

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
    
  } catch (error) {
    console.error(error);
  }
};
