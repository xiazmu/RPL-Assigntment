/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const isPremiumMember: boolean = true

const keyboardPrice: number = 850000
const keyboardQty: number = 1

const mousePrice: number = 275000
const mouseQty: number = 2

const mousePadPrice: number = 120000
const mousePadQty: number = 1

const keyboardTotal: number = keyboardPrice * keyboardQty
const mouseTotal: number = mousePrice * mouseQty
const mousePadTotal: number = mousePadPrice * mousePadQty

const subtotal: number = keyboardTotal + mouseTotal + mousePadTotal

let totalItems: number = 0;

for (let i = 0; i < keyboardQty; i++) {
    totalItems++;
}

for (let i = 0; i < mouseQty; i++) {
    totalItems++;
}

for (let i = 0; i < mousePadQty; i++) {
    totalItems++;
}

const discount: number = subtotal > 1000000 ? subtotal * 0.10 : 0

const shippingCost: number = isPremiumMember ? 0 : 20000

const finalPayment: number = subtotal - discount + shippingCost

console.log("=== Online Store Receipt ===")
console.log(`Subtotal       : Rp${subtotal}`)
console.log(`Total Items    : ${totalItems}`)
console.log(`Discount       : Rp${discount}`)
console.log(`Premium Member : ${isPremiumMember}`)
console.log(`Shipping Cost  : Rp${shippingCost}`)
console.log(`Final Payment  : Rp${finalPayment}`)