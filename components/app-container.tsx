import { ReactNode } from 'react';

const AppContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default AppContainer;
