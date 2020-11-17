import { FSState } from '../types';

const MKDIR = (fsStore: FSState, args=[]:string[]): string => {
  const { fs, mkdir, currentDir } = fsStore;
  const [pathToDir] = args;
  console.log('MKDIR:', args);
  console.log('MKDIR:', fs, mkdir);

  mkdir(pathToDir);
  return `creating directory ${pathToDir} in ${currentDir}`;
  // debugger;
};

export default MKDIR;
