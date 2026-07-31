/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  weight: number;
  averageRating: number;
  isDiscounted: boolean;
}

const product1: Product = {
  productCode: "PRD001",
  productName: "Mechanical Keyboard",
  sellingPrice: 850000,
  stockQuantity: 15,
  weight: 850,
  averageRating: 4.8,
  isDiscounted: true
}

const product2: Product = {
  productCode: "PRD002",
  productName: "Wireless Mouse",
  sellingPrice: 275000,
  stockQuantity: 25,
  weight: 120,
  averageRating: 4.6,
  isDiscounted: false
}

const product3: Product = {
  productCode: "PRD003",
  productName: "Monitor Stand",
  sellingPrice: 420000,
  stockQuantity: 10,
  weight: 1500,
  averageRating: 4.7,
  isDiscounted: true
}

console.log("=== Online Marketplace Product Catalog ===")

console.log("\nProduct 1:")
console.log(`Product Code    : ${product1.productCode}`)
console.log(`Product Name    : ${product1.productName}`)
console.log(`Selling Price   : Rp${product1.sellingPrice}`)
console.log(`Stock Quantity  : ${product1.stockQuantity}`)
console.log(`Weight          : ${product1.weight} grams`)
console.log(`Average Rating  : ${product1.averageRating}`)
console.log(`Discounted      : ${product1.isDiscounted}`)

console.log("\nProduct 2:")
console.log(`Product Code    : ${product2.productCode}`)
console.log(`Product Name    : ${product2.productName}`)
console.log(`Selling Price   : Rp${product2.sellingPrice}`)
console.log(`Stock Quantity  : ${product2.stockQuantity}`)
console.log(`Weight          : ${product2.weight} grams`)
console.log(`Average Rating  : ${product2.averageRating}`)
console.log(`Discounted      : ${product2.isDiscounted}`)

console.log("\nProduct 3:")
console.log(`Product Code    : ${product3.productCode}`)
console.log(`Product Name    : ${product3.productName}`)
console.log(`Selling Price   : Rp${product3.sellingPrice}`)
console.log(`Stock Quantity  : ${product3.stockQuantity}`)
console.log(`Weight          : ${product3.weight} grams`)
console.log(`Average Rating  : ${product3.averageRating}`)
console.log(`Discounted      : ${product3.isDiscounted}`)