"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Community() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How to lower blood pressure naturally?",
      content:
        "I've been diagnosed with high blood pressure. Are there any natural remedies or lifestyle changes that can help lower it?",
      answers: [],
    },
    {
      id: 2,
      title: "Best exercises for back pain?",
      content:
        "I suffer from chronic lower back pain. What are some safe and effective exercises to alleviate the pain?",
      answers: [],
    },
  ])
  const [newQuestion, setNewQuestion] = useState({ title: "", content: "" })
  const [newAnswer, setNewAnswer] = useState("")
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const handleQuestionSubmit = (e) => {
    e.preventDefault()
    const question = {
      id: questions.length + 1,
      ...newQuestion,
      answers: [],
    }
    setQuestions([...questions, question])
    setNewQuestion({ title: "", content: "" })
  }

  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    if (selectedQuestion) {
      const updatedQuestions = questions.map((q) =>
        q.id === selectedQuestion.id ? { ...q, answers: [...q.answers, newAnswer] } : q,
      )
      setQuestions(updatedQuestions)
      setNewAnswer("")
      setSelectedQuestion(null)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleQuestionSubmit} className="space-y-4">
              <Input
                placeholder="Question Title"
                value={newQuestion.title}
                onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
              />
              <Textarea
                placeholder="Question Content"
                value={newQuestion.content}
                onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
              />
              <Button type="submit">Submit Question</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question.id}>
                  <h3 className="font-semibold">{question.title}</h3>
                  <p className="text-sm text-gray-600">{question.content}</p>
                  <Button variant="link" onClick={() => setSelectedQuestion(question)}>
                    Answer
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      {selectedQuestion && (
        <Card>
          <CardHeader>
            <CardTitle>Answer Question: {selectedQuestion.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnswerSubmit} className="space-y-4">
              <Textarea placeholder="Your Answer" value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} />
              <Button type="submit">Submit Answer</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

