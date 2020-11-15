import React, { useEffect } from 'react';
import useFSStore from '../hooks/useFS';

const CD: React.FC<{ args: string[] }> = ({ args }: { args: string[] }) => {
  const { fs, cd } = useFSStore();
  const pathToDir = args[0] || '';
  console.log('CD:', args);
  console.log('CD:', fs, cd);

  useEffect(() => {
    cd(pathToDir);
  }, []);
  // debugger;
  return (<div>..</div>);
};


export default CD;
