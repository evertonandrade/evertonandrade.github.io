import { ReactNode } from 'react';

const MainCpntainer = ({ children }: { children: ReactNode }) => {
  return <main className="container">{children}</main>;
};

export default MainCpntainer;
