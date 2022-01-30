export const formatPrice = number =>
  Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(number / 100);

export const getUniqueValues = (products, type) => {
  let unique = products.map(p => p[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
