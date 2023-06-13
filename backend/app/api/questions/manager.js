
const { Quiz, Question } = require('../../models')

/**
 * Questions Manager.
 * This file contains all the logic needed to by the question routes.
 */

/**
 * filterQuestionsFromQuizz.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param quizId
 */
const filterQuestionsFromQuizz = (quizId) => {
  const questions = Question.get()
  const parsedId = parseInt(quizId, 10)
  return questions.filter((question) => question.quizId === parsedId)
}

/**
 * getQuestionFromQuiz.
 * This function retrieves a question from a quiz. It will throw a not found exception if the quizId in the question is different from the one provided in parameter.
 * @param quizId
 * @param questionId
 */
const getQuestionFromQuiz = (quizId) => {
  const quiz = Quiz.getById(quizId)
  const quizIdQuestions = quiz.questions
  let allQuestions = []
quizIdQuestions.forEach(element => {
    allQuestions.push(Question.getById(element))
});
  return allQuestions
}

const getEasyQuestionFromQuiz = (quizId) => {
    const quiz = Quiz.getById(quizId)
    const quizIdEasyQuestions = quiz.easyQuestions
    let allEasyQuestions = []
  quizIdEasyQuestions.forEach(element => {
      allEasyQuestions.push(Question.getById(element))
  });
    return allEasyQuestions
  }

module.exports = {
  filterQuestionsFromQuizz,
  getQuestionFromQuiz,
  getEasyQuestionFromQuiz,
}