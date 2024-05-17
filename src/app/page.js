import Counter from '@/components/Counter/Counter';
import React from 'react';


const page = () => {
  // error.js ke check korar jonno akne akta vul kisu likeci
  // ytuutuy
  return (
    <div>
      <h2 className='text-center text-sm  text-red-600'>This is Main Page</h2>
      <Counter></Counter>
    </div>
  );
};

export default page;