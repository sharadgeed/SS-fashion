export const calculateDiscount = (price, originalPrice) => Math.round((1 - price / originalPrice) * 100);
