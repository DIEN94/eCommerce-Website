import React, { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom';

interface IProviders {
    children: ReactNode;
}

export const Providers: FC <IProviders> = ({children}) => {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}
