import React from 'react';
import useFSStore from '../hooks/useFS';

const MKDIR: React.FC<{args:string[]}> = ({ args }:{args :string[]}) => {
  const { fs, mkdir } = useFSStore();
  console.log('mkdir:', args);
  console.log('mkdir:', fs, mkdir);
  mkdir({ name: 'ishank' });
  // debugger;
  return (<div>..</div>);
};

MKDIR.whyDidYouRender = true;

export default MKDIR;
