/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const applicant: string = "Andi Wijaya"
const monthlyIncome: number =  10000000
const creditScore: number = 725
const existingDebt: number =  2500000
const isPermanentEmployee: boolean = true;

const passedFirstScreeninng: boolean =
    monthlyIncome >= 8000000 &&
    creditScore >= 700

    let passedSecondScreening: boolean = false

if (passedFirstScreeninng) {
    const maximumDebt: number = monthlyIncome * 0.30

    passedSecondScreening = 
    existingDebt <= maximumDebt &&
    isPermanentEmployee
}

let loanDecision: string

if (passedFirstScreeninng && passedSecondScreening) {
    loanDecision = "Loan Approved"
} else if (passedFirstScreeninng && !passedSecondScreening) {
    loanDecision = "Manual Review"
} else {
    loanDecision = "Loan Rejected"
}

console.log("=== Bank Loan Evaluation ===");
console.log(`Applicant          : ${applicant}`);
console.log(`Monthly Income     : Rp${monthlyIncome}`);
console.log(`Credit Score       : ${creditScore}`);
console.log(`Existing Debt      : Rp${existingDebt}`);
console.log(`Permanent Employee : ${isPermanentEmployee}`);
console.log(`First Screening    : ${passedFirstScreeninng}`)
console.log(`Second Screening   : ${passedSecondScreening}`)
console.log(`Loan Decision      : ${loanDecision}`)