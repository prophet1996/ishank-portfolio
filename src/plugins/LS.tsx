import React, { useEffect } from 'react';
import useFSStore from '../hooks/useFS';

const LS: React.FC<{ args: string[] }> = ({ args }: { args: string[] }) => {
    let { fs: { root } } = useFSStore();
    const {currentDir } = useFSStore();
    
    while (root) {
        
    }
  useEffect(() => {

  }, []);
  // debugger;
  return (<div>{children.map(({ name }) => name)}</div>);
};

export default LS;
