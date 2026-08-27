/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

function calculateTotalSales(sales: number[]): number {
    return sales.reduce((total, sale) => total + sale, 0)
}

function findHighestTransaction(sales: number[]): number {
    return Math.max(...sales)
}

function findLowestTransaction(sales: number[]): number {
    return Math.min(...sales)
}

function calculateAverageSale(sales: number[]): number {
    return calculateTotalSales(sales) / sales.length
}

function countLargeTransactions(
    sales: number[],
    minimumAmount: number
): number {
    return sales.filter(sale => sale > minimumAmount).length
}

const sales: number[] = [
    250000,
    750000,
    450000,
    1200000,
    600000,
    300000
]

console.log("Total Sales:", calculateTotalSales(sales))
console.log("Highest Transaction:", findHighestTransaction(sales))
console.log("Lowest Transaction:", findLowestTransaction(sales))
console.log("Average Transaction:", calculateAverageSale(sales))
console.log(
    "Transaction Abouve Rp500,000:",
    countLargeTransactions(sales, 500000)
)