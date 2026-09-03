/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentScores = submissions.map(submission => {
  const correct = submission.answers.filter(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    return question?.correctAnswer === answer.answer;
  }).length;

  return {
    student: submission.student,
    score: correct * 25,
  };
});

console.log("Student Scores:", studentScores);


const answerResults = submissions.map(submission => {
  const correct = submission.answers.filter(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    return question?.correctAnswer === answer.answer;
  }).length;

  return {
    student: submission.student,
    correct: correct,
    wrong: submission.answers.length - correct,
  };
});

console.log("Answer Results:", answerResults);


const categoryScores = questions.reduce((result, question) => {
  const category = question.category;

  if (!result[category]) {
    result[category] = {
      total: 0,
      count: 0,
    };
  }

  submissions.forEach(submission => {
    const answer = submission.answers.find(
      answer => answer.questionId === question.id
    );

    if (answer?.answer === question.correctAnswer) {
      result[category].total += 25;
    }

    result[category].count++;
  });

  return result;
}, {} as Record<string, { total: number; count: number }>);

const averageByCategory = Object.entries(categoryScores).map(
  ([category, data]) => ({
    category,
    average: data.total / data.count,
  })
);

console.log("Average by Category:", averageByCategory);


const scores = studentScores.map(student => student.score);

const totalStudents = scores.length;

const averageScore =
  scores.reduce((total, score) => total + score, 0) / totalStudents;

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const passedStudents = scores.filter(score => score >= 75).length;
const failedStudents = scores.filter(score => score < 75).length;

const passRate = (passedStudents / totalStudents) * 100;

const finalAnalytics = {
  totalStudents,
  averageScore: Number(averageScore.toFixed(2)),
  highestScore,
  lowestScore,
  passedStudents,
  failedStudents,
  passRate: Number(passRate.toFixed(2)),
};

console.log("Final Analytics:", finalAnalytics);