"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TriviaCardProps {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export function TriviaCard({ question, options, correctAnswer, explanation }: TriviaCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowExplanation(true)
  }

  const handleReset = () => {
    setSelectedOption(null)
    setShowExplanation(false)
  }

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <CardHeader className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 group-hover:from-green-200 group-hover:via-blue-200 group-hover:to-purple-200 dark:group-hover:from-green-800/40 dark:group-hover:via-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300">
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={
                selectedOption === null
                  ? "outline"
                  : selectedOption === index
                    ? index === correctAnswer
                      ? "default"
                      : "destructive"
                    : index === correctAnswer && showExplanation
                      ? "default"
                      : "outline"
              }
              className="w-full justify-start text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              {option}
            </Button>
          ))}
        </div>
        {showExplanation && (
          <div className="rounded-md bg-muted p-4 text-sm">
            <p className="font-medium">{selectedOption === correctAnswer ? "Correct!" : "Incorrect!"}</p>
            <p className="mt-1">{explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {showExplanation && (
          <Button onClick={handleReset} variant="outline" className="w-full">
            Try Another Question
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
