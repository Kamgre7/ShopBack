export const filePathToFileName = (path: string):string => {
  const [fileName] = path.split('\\').slice(-1);
  return (fileName.split('.')[0]);
};
