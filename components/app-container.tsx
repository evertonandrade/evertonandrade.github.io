import { ReactNode } from 'react';

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return <main className="container">{children}</main>;
};

