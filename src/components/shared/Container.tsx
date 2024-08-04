interface ContainerProps {
  children: React.ReactNode;
}
import React from 'react';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-screen-2xl px-4 2xl:px-0'>{children}</div>;
};

export default Container;
