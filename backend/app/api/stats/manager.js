const { Quiz, User, Stat } = require('../../models')
const { getQuestionFromQuiz, getEasyQuestionFromQuiz } = require('../questions/manager')
const { buildQuizz } = require('../quizzes/manager')

const  updatedStats = (stats,questions,answers) => {
    const quizQuestions = getQuestionFromQuiz(stats[0].quiz)
    const quizEasyQuestions = getEasyQuestionFromQuiz(stats[0].quiz)
    answers.forEach((answer, i) => {
        if(answer!==null){
            for(let j=0; j<quizQuestions.length; j++){
                if(quizQuestions[j].id===questions[i].id)
                    if (answer){
                        stats[0].bonnesReponses[j]+=1
                    } else {
                        stats[0].mauvaisesReponses[j]+=1
                    }
            }
            for(let j=0; j<quizEasyQuestions.length; j++){
                if(quizEasyQuestions[j].id===questions[i].id)
                    if (answer){
                        stats[0].bonnesReponses[j+quizQuestions.length]+=1
                    } else {
                        stats[0].mauvaisesReponses[j+quizQuestions.length]+=1
                    }
                }
        }
    });
    return stats
}

const updatedTimer = (stats,timer) => {
    stats[0].times+=1
    stats[0].timerMoyen = (stats[0].timerMoyen*(stats[0].times-1)+timer)/stats[0].times
    return stats
}

const buildStat = (statId) => {
    const stat = Stat.getById(statId)
    const quiz = buildQuizz(stat.quiz)
    const user = User.getById(stat.user)
    return { ...stat, quiz: quiz , user: user}
  }

  const buildStats = (stats) => {
    return stats.map((stat) => buildStat(stat.id))
  }

const createDefaultStats = (quizId,userId) => {
    const quizQuestions = getQuestionFromQuiz(quizId)
    const quizEasyQuestions = getEasyQuestionFromQuiz(quizId)
    let bonnesReponses = []
    let mauvaisesReponses = []
    quizQuestions.forEach(question => {
        bonnesReponses.push(0)
        mauvaisesReponses.push(0)
    })
    quizEasyQuestions.forEach(question => {
        bonnesReponses.push(0)
        mauvaisesReponses.push(0)
    })
    return { quiz: quizId, user: userId, bonnesReponses: bonnesReponses, mauvaisesReponses: mauvaisesReponses, times:0, timerMoyen:0}
}

const resetStats = (stats) => {
    res = []
    stats.forEach(stat => {
        const quizQuestions = getQuestionFromQuiz(stat.quiz)
        const quizEasyQuestions = getEasyQuestionFromQuiz(stat.quiz)
        let bonnesReponses = []
        let mauvaisesReponses = []
        quizQuestions.forEach(question => {
            bonnesReponses.push(0)
            mauvaisesReponses.push(0)
        })
        quizEasyQuestions.forEach(question => {
            bonnesReponses.push(0)
            mauvaisesReponses.push(0)
        })
        res.push({...stat, bonnesReponses: bonnesReponses, mauvaisesReponses: mauvaisesReponses, times:0, timerMoyen:0})
    });
    return res
}




module.exports = {
    buildStat,
    buildStats,
    updatedStats,
    updatedTimer,
    createDefaultStats,
    resetStats
}