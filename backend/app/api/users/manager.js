const { User,Quiz } = require('../../models')
const { getQuizFromUser } = require('../quizzes/manager')
/**
 * Function buildQuizz.
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildUser = (userId) => {
  const user = User.getById(userId)
  const quizzes = getQuizFromUser(user.id)
  return { ...user, quizzes: quizzes }
}

/**
 * Function buildQuizzes.
 * This function aggregates the questions and answers from the database to build entire quizzes.
 */
const buildUsers = () => {
  const users = User.get()
  return users.map((user) => buildUser(user.id))
}

const IdTransform = (user) => {
  user.quizzes = user.quizzes.map((quiz) => quiz.id)
  return user
}

module.exports = {
  buildUser,
  buildUsers,
  IdTransform
}
