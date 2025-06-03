"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Trophy, Target, Sparkles, RotateCcw } from "lucide-react"

interface TriviaQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

interface TriviaCardProps {
  questions: TriviaQuestion[]
  cardTitle: string
}

export function TriviaCard({ questions, cardTitle }: TriviaCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [completedAllQuestions, setCompletedAllQuestions] = useState(false)
  const [showCongratulations, setShowCongratulations] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (questionsAnswered === questions.length && !completedAllQuestions) {
      setCompletedAllQuestions(true)
      setShowCongratulations(true)
    }
  }, [questionsAnswered, questions.length, completedAllQuestions])

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowExplanation(true)
    setQuestionsAnswered((prev) => prev + 1)

    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (questionsAnswered < questions.length) {
      const nextIndex = (currentQuestionIndex + 1) % questions.length
      setCurrentQuestionIndex(nextIndex)
      setSelectedOption(null)
      setShowExplanation(false)
    }
  }

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setQuestionsAnswered(0)
    setCompletedAllQuestions(false)
    setShowCongratulations(false)
  }

  const getScoreColor = () => {
    const percentage = questionsAnswered > 0 ? (score / questionsAnswered) * 100 : 0
    if (percentage >= 80) return "text-green-600 dark:text-green-400"
    if (percentage >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getPerformanceMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "Outstanding! You're a health expert! 🌟"
    if (percentage >= 80) return "Excellent work! You know your health facts! 🎉"
    if (percentage >= 70) return "Great job! You have solid health knowledge! 👏"
    if (percentage >= 60) return "Good effort! Keep learning about health! 💪"
    return "Nice try! There's always room to learn more! 📚"
  }

  const getScoreEmoji = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "🏆"
    if (percentage >= 80) return "🥇"
    if (percentage >= 70) return "🥈"
    if (percentage >= 60) return "🥉"
    return "🌱"
  }

  if (showCongratulations) {
    return (
      <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl border-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 h-full">
        <CardHeader className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:from-green-800/50 dark:via-blue-800/50 dark:to-purple-800/50 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse mr-2" />
            <Trophy className="h-10 w-10 text-yellow-500 animate-bounce" />
            <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse ml-2" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Congratulations!
          </CardTitle>
          <p className="text-lg text-muted-foreground mt-2">You've completed all questions in {cardTitle}!</p>
        </CardHeader>

        <CardContent className="text-center space-y-6 py-8">
          <div className="text-6xl animate-bounce">{getScoreEmoji()}</div>

          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Final Score:{" "}
              <span className={getScoreColor()}>
                {score}/{questions.length}
              </span>
            </div>

            <div className="text-lg font-medium text-muted-foreground">{getPerformanceMessage()}</div>

            <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 space-y-2">
              <div className="text-sm text-muted-foreground">Your Performance:</div>
              <div className="flex justify-between items-center">
                <span>Accuracy:</span>
                <span className={`font-bold ${getScoreColor()}`}>{Math.round((score / questions.length) * 100)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Questions Completed:</span>
                <span className="font-bold">
                  {questionsAnswered}/{questions.length}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">Would you like to try again?</p>
            <p className="text-sm text-muted-foreground">
              Challenge yourself to beat your score or explore other health topics!
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            onClick={handleTryAgain}
            className="w-full text-lg py-6 transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Try Again
          </Button>
          <p className="text-xs text-muted-foreground text-center">Keep learning and stay healthy! 💚</p>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 h-full">
      <CardHeader className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 group-hover:from-green-200 group-hover:via-blue-200 group-hover:to-purple-200 dark:group-hover:from-green-800/40 dark:group-hover:via-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
            {cardTitle}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="h-4 w-4" />
            <span className={`font-bold ${getScoreColor()}`}>
              {score}/{questionsAnswered}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Target className="h-4 w-4" />
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="ml-2 px-2 py-1 bg-white/50 dark:bg-black/20 rounded-full text-xs">
            {currentQuestion.category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex-1">
        <div className="min-h-[60px] flex items-center">
          <h3 className="text-lg font-medium leading-relaxed">{currentQuestion.question}</h3>
        </div>

        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={
                selectedOption === null
                  ? "outline"
                  : selectedOption === index
                    ? index === currentQuestion.correctAnswer
                      ? "default"
                      : "destructive"
                    : index === currentQuestion.correctAnswer && showExplanation
                      ? "default"
                      : "outline"
              }
              className="w-full justify-start text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-md min-h-[44px] p-3"
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>

        {showExplanation && (
          <div className="rounded-lg bg-muted p-4 text-sm animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 mb-2">
              {selectedOption === currentQuestion.correctAnswer ? (
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <Trophy className="h-4 w-4" />
                  <span className="font-bold">Correct!</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                  <Target className="h-4 w-4" />
                  <span className="font-bold">Incorrect!</span>
                </div>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        {showExplanation && !completedAllQuestions && (
          <Button onClick={handleNextQuestion} className="flex-1 transition-all duration-300 hover:scale-[1.02]">
            <RefreshCw className="h-4 w-4 mr-2" />
            {questionsAnswered < questions.length ? "Next Question" : "Complete"}
          </Button>
        )}
        {questionsAnswered >= 3 && !completedAllQuestions && (
          <Button onClick={handleTryAgain} variant="outline" className="transition-all duration-300 hover:scale-[1.02]">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
