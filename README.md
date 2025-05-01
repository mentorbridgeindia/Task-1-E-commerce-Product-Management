# Task 1: E-commerce Product Management

You are developing the core logic for a simplified e-commerce product management system using native JavaScript. This system will handle a collection of products, allowing you to perform various operations.

### 1. Data Structure:
Each product is represented as an object with the following properties:

<code>
productId: (number, unique identifier)
name: (string)
description: (string)
price: (number)
stock: (number)
category: (string)
tags: (array of strings)
discount: (object, can be null or contain { type: string, value: number })
</code>


You will work with an array of these product objects.

## 2. Functionality:

### Display Product Details:
Create a function (using an arrow function) that takes a product object and logs its details to the console in a user-friendly format. Use for...in to iterate over the product's properties (except the tags array, which should be iterated with for...of).

### Filter Products by Category:
Write a function that takes a category name and returns a new array containing only the products from that category. Use the filter() method.

### Find Product by ID:
Implement a function that takes a product ID and returns the corresponding product object. Use the find() method. If no product is found, return null.

### Apply Discount:
Create an IIFE that defines a module for discount management. Inside the IIFE:
Declare a function (using const) to apply a discount to a product. The function should take the product object and a discount object ({ type: string, value: number }).
If the discount type is "percentage", reduce the price by the given value.
If the discount type is "fixed", subtract the value from the price.
If the discount is invalid or null, the function should not modify the price.
The IIFE should return an object with the applyDiscount function as a property, preventing global scope pollution.

### Update Stock:
Write a function that takes a product ID and a quantity. It should update the stock property of the product with the given ID. Use find() to locate the product. If the product is not found, log an error message to the console.

### Add a Tag to a Product:
Create a function that takes a product ID and a tag string. It should add the tag to the product's tags array. Use find() and splice() (or push()) to add the tag. Ensure the tag is added only if it doesn't already exist.

### Remove a Product:
Write a function that takes a product ID and removes the corresponding product from the products array. Use splice() to remove the product.

### Calculate Total Value:
Create a function to calculate the total value of all products in stock (price * stock for each product). 

### Demonstrate Data Types and Object/Array Access:
 - Within the functions above, ensure you are correctly using and accessing the various JavaScript data types:
 - Strings for names, descriptions, category, and tags.
 - Numbers for IDs, prices, and stock.
 - Booleans (e.g., if you were to add an isActive property).
 - null for the initial state of the discount, or when a product isn't found.
 - Arrays for the tags property.
 - Objects for representing products and discounts.
 - Show how to access properties of product objects (e.g., product.name, product.price, product.discount.value) and elements of the tags array (e.g., product.tags[0]).
   
### Console Logging:
Use console.log() to display product details, function results, error messages, and intermediate values for debugging.

