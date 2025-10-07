import React from 'react';

const Container = ({children}) => {
  return (
    <div className='container mx-auto py-6 px-5 md:px-10 lg:px-20'>{children}</div>
  );
};

export default Container;