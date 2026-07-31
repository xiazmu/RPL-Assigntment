/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const pricePerHour: number = 8000
const playingHours: number = 7
const playingMinutes: number = 35

const totalPlayingMinutes: number =
  playingHours * 60 + playingMinutes

const remainingMinutes: number =
  totalPlayingMinutes % 60

const totalBilledHours: number =
  Math.ceil(totalPlayingMinutes / 60)

const paymentBeforeDiscount: number =
  totalBilledHours * pricePerHour

const discount: number =
  totalBilledHours > 5
    ? paymentBeforeDiscount * 0.15
    : 0

const finalPayment: number =
  paymentBeforeDiscount - discount

console.log("=== Internet Cafe Billing ===")
console.log(`Total Playing Time    : ${totalPlayingMinutes} minutes`)
console.log(`Remaining Minutes     : ${remainingMinutes} minutes`)
console.log(`Total Billed Hours    : ${totalBilledHours} hours`)
console.log(`Payment Before Disc.  : Rp${paymentBeforeDiscount}`)
console.log(`Discount              : Rp${discount}`)
console.log(`Final Payment         : Rp${finalPayment}`)