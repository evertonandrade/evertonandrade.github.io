declare module '*.svg' {
  import React from 'react';
  const Component: React.FunctionComponent<React.SVGProps<SVGElement>>;

  export default Component;
}
