const { User } = require('../../models')
const { getQuizFromUser } = require('../quizzes/manager')

const buildUser = (userId) => {
  const user = User.getById(userId)
  const quizzes = getQuizFromUser(user.id)
  return { ...user, quizzes: quizzes }
}

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
