const products = [
  {
    productId: 1,
    name: "Laptop",
    description: "High-performance laptop",
    price: 1200,
    stock: 10,
    category: "Electronics",
    tags: ["laptop", "computer", "tech"],
    discount: { type: "percentage", value: 10 },
  },
  {
    productId: 2,
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 25,
    stock: 50,
    category: "Clothing",
    tags: ["t-shirt", "clothing", "casual"],
    discount: null,
  },
  {
    productId: 3,
    name: "Book",
    description: "Interesting novel",
    price: 15,
    stock: 100,
    category: "Books",
    tags: ["book", "novel", "fiction"],
    discount: { type: "fixed", value: 3 },
  },
  {
    productId: 4,
    name: "Smartphone",
    description: "Latest smartphone model",
    price: 1000,
    stock: 5,
    category: "Electronics",
    tags: ["smartphone", "mobile", "tech"],
    discount: null,
  },
  {
    productId: 5,
    name: "Jeans",
    description: "Classic denim jeans",
    price: 50,
    stock: 20,
    category: "Clothing",
    tags: ["jeans", "clothing", "denim"],
    discount: { type: "percentage", value: 20 },
  },
];

const displayProductDetails = (product) => {
  console.log("Product Details:");
  for (const key in product) {
    if (key !== "tags") {
      console.log(`${key}: ${product[key]}`);
    } else {
      console.log(`tags: ${product.tags.join(", ")}`);
    }
  }
};

const filterProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

const findProductById = (productId) => {
  return products.find((product) => product.productId === productId);
};

const discountModule = (() => {
  const applyDiscount = (product, discount) => {
    if (discount && discount.type === "percentage") {
      product.price -= product.price * (discount.value / 100);
    } else if (discount && discount.type === "fixed") {
      product.price -= discount.value;
    }
  };

  return {
    applyDiscount: applyDiscount,
  };
})();

const updateStock = (productId, quantity) => {
  const productToUpdate = findProductById(productId);
  if (productToUpdate) {
    productToUpdate.stock = quantity;
    console.log(`Stock for product ${productId} updated to ${quantity}`);
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
};

const addTagToProduct = (productId, tag) => {
  const product = findProductById(productId);
  if (product) {
    if (!product.tags.includes(tag)) {
      product.tags.push(tag);
      console.log(`Tag "${tag}" added to product ${productId}`);
    } else {
      console.log(`Tag "${tag}" already exists on product ${productId}`);
    }
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
};

const removeProduct = (productId) => {
  const index = products.findIndex((p) => p.productId === productId);
  if (index !== -1) {
    products.splice(index, 1);
    console.log(`Product with ID ${productId} removed.`);
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
};

const calculateTotalValue = () => {
  let totalValueVar = 0;
  for (const product of products) {
    totalValueVar += product.price * product.stock;
  }
  console.log(`Total value (var): ${totalValueVar}`);
};

console.log("--- Initial Products ---");
products.forEach((product) => displayProductDetails(product));

console.log("\n--- Filter by Category (Electronics) ---");
const electronicsProducts = filterProductsByCategory("Electronics");
electronicsProducts.forEach((product) => displayProductDetails(product));

console.log("\n--- Find Product by ID (2) ---");
const product2 = findProductById(2);
if (product2) {
  displayProductDetails(product2);
} else {
  console.log("Product with ID 2 not found.");
}

console.log("\n--- Apply Discount (Product 1) ---");
const product1 = findProductById(1);
discountModule.applyDiscount(product1, { type: "percentage", value: 10 });
displayProductDetails(product1);

console.log("\n--- Update Stock (Product 3) ---");
updateStock(3, 120);
displayProductDetails(findProductById(3));

console.log("\n--- Add Tag to Product (Product 4) ---");
addTagToProduct(4, "newTag");
addTagToProduct(4, "newTag");
displayProductDetails(findProductById(4));

console.log("\n--- Remove Product (Product 5) ---");
removeProduct(5);
console.log("--- Products after removal ---");
products.forEach((product) => displayProductDetails(product));

console.log("\n--- Calculate Total Value ---");
calculateTotalValue();
