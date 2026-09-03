/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];

/**
 * Reusable processing function
 */
function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const score of scores) {
        callback(score);
    }
}

/**
 * 1. Determine whether student passed
 */
function checkPassed(score: number): void {
    if (score >= 70) {
        console.log(`Score: ${score} - Passed`);
    } else {
        console.log(`Score: ${score} - Failed`);
    }
}

/**
 * 2. Convert score into grade
 */
function showGrade(score: number): void {
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    console.log(`Score: ${score} - Grade: ${grade}`);
}

/**
 * 3. Add 5 bonus points
 */
function addBonus(score: number): void {
    const bonusScore = score + 5;
    console.log(`Score: ${score} - After Bonus: ${bonusScore}`);
}

/**
 * 4. Determine whether score is excellent
 */
function checkExcellent(score: number): void {
    if (score > 90) {
        console.log(`Score: ${score} - Excellent`);
    } else {
        console.log(`Score: ${score} - Reguler`);
    }
}

// Implementation of callback functions
processScores(scores, checkPassed);

processScores(scores, showGrade);

processScores(scores, addBonus);

processScores(scores, checkExcellent);
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */