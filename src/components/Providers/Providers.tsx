import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store/store';

interface IProviders {
    children: ReactNode;
}

const store = setupStore();

export const Providers: FC <IProviders> = ({children}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          {children}
      </BrowserRouter>
    </Provider>
  )
}
