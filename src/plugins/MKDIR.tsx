import React, { useEffect } from 'react';
import useFSStore from '../hooks/useFS';

const MKDIR: React.FC<{ args: string[] }> = ({ args }: { args: string[] }) => {
  const { fs, mkdir } = useFSStore();
  const pathToDir = args[0] || '';  
  console.log('mkdir:', args);
  console.log('mkdir:', fs, mkdir);

  useEffect(() => {
    mkdir(pathToDir);
  }, []);
  // debugger;
  return (<div>..</div>);
};

MKDIR.whyDidYouRender = true;

export default MKDIR;
