export const formatPrice = number =>
  Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(number / 100);

export const getUniqueValues = () => {};
