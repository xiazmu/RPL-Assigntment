/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRicePrice: number = 18000
const friedRiceQty: number = 3

const mineralWaterPrice: number = 5000
const mineralWaterQty: number = 2

const discount: number = 10000

const totalFoodPrice: number = friedRicePrice * friedRiceQty
const totalDrinkPrice: number = mineralWaterPrice * mineralWaterQty

const grandTotal: number = totalFoodPrice + totalDrinkPrice
const finalPayment: number = grandTotal - discount

console.log("=== School Cafeteria Receipt ===")
console.log(`Fried Rice Total : Rp${totalFoodPrice}`)
console.log(`Drink Total : Rp${totalDrinkPrice}`)
console.log(`Grand Total : Rp${grandTotal}`)
console.log(`Discount : Rp${discount}`)
console.log(`Final Payment : Rp${finalPayment}`)
