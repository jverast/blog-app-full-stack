const getLastYear = () => {
  const current = new Date();
  const lastYear = new Date(new Date().setFullYear(current.getFullYear() - 1));

  return lastYear;
};

export { getLastYear };
