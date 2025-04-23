export const generateSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

export const findProductBySlug = (products, slug) => {
  return products.find((product) => generateSlug(product.name) === slug);
};
