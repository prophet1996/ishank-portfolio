import React, { useEffect } from 'react';
import useFSStore from '../hooks/useFS';

const LS: React.FC<{ args: string[] }> = ({ args }: { args: string[] }) => {
  const { fs, ls } = useFSStore();
  //   const pathToDir = args[0] || '';
  console.log('LS:', args);
  console.log('LS:', fs, ls);

  useEffect(() => {
    // ls(pathToDir);
  }, []);
  // debugger;
  return (<div>..</div>);
};

export default LS;
