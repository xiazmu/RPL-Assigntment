/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640
const currentMeter: number = 25892
const electricityPricePerKwh: number = 1650

const solarPanelInstalled: boolean = true
const energySavingMode: boolean = false

const totalEnergyConsumption: number =
  currentMeter - previousMeter

const electricityBill: number =
  totalEnergyConsumption * electricityPricePerKwh

const solarDiscount: number =
  solarPanelInstalled ? electricityBill * 0.20 : 0
const savingModeDiscount: number =
  energySavingMode ? electricityBill * 0.05 : 0

const finalBill: number =
  electricityBill - solarDiscount - savingModeDiscount

const greenEnergyEligible: boolean =
  solarPanelInstalled &&
  totalEnergyConsumption < 300 &&
  energySavingMode

console.log("=== Smart Home Electricity Report ===")
console.log(`Total Energy Consumption : ${totalEnergyConsumption} kWh`)
console.log(`Electricity Bill         : Rp${electricityBill}`)
console.log(`Solar Panel Discount     : Rp${solarDiscount}`)
console.log(`Energy Saving Discount   : Rp${savingModeDiscount}`)
console.log(`Final Bill               : Rp${finalBill}`)
console.log(`Green Energy Program     : ${greenEnergyEligible}`)

