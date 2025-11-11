// Get user input
let customerName = prompt("Enter your name:");
let price = Number(prompt("Enter the product price:"));

// Fixed discount percentage
let discountPercent = 17.33; // 17.33% discount

// Calculate discount amount and total
let discountAmount = (price * discountPercent) / 100;
let TOTAL = price - discountAmount;

// Display receipt 
console.log("🧾 Receipt");
console.log("Customer: " + customerName.toUpperCase());
console.log("Original Price: LKR " + price.toFixed(2));
console.log("Discount (" + discountPercent + "%): LKR " + discountAmount.toFixed(2));
console.log("Total after discount: LKR " + TOTAL.toFixed(2));

// Show final message
alert(
  "Hello " + customerName + "!\n" +
  "Your total after " + discountPercent + "% discount is LKR " + TOTAL.toFixed(2)
);