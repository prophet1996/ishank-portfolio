const CD = (fsStore, args) => {
  const { fs, cd } = fsStore;
  const [pathToDir] = args;
  console.log('CD:', args);
  console.log('CD:', fs, cd);

  cd(pathToDir);
  return `cd ${pathToDir}`;
};

export default CD;
