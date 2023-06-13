const { Quiz, User } = require('../../models')
const { getQuestionFromQuiz, getEasyQuestionFromQuiz } = require('../questions/manager')

/**
 * Function buildQuizz.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildQuizz = (quizId) => {
  const quiz = Quiz.getById(quizId)
  const questions = getQuestionFromQuiz(quiz.id)
  const easyQuestions = getEasyQuestionFromQuiz(quiz.id)
  return { ...quiz, questions: questions , easyQuestions: easyQuestions}
}

/**
 * Function buildQuizzes.
 * This function aggregates the questions and answers from the database to build entire quizzes.
 */
const buildQuizzes = () => {
  const quizzes = Quiz.get()
  return quizzes.map((quiz) => buildQuizz(quiz.id))
}

const getQuizFromUser = (userId) => {
    // Check if quizId exists, if not it will throw a NotFoundError
    const user = User.getById(userId)
    const userIdQuiz = user.quizzes
    let allQuizzes = []
    userIdQuiz.forEach(element => {
      allQuizzes.push(buildQuizz(element))
    });
    return allQuizzes
  }

module.exports = {
  buildQuizz,
  buildQuizzes,
  getQuizFromUser,
}
