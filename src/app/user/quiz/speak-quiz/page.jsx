"use client"
// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { quiz } from '../../../data/quiz/speakquizdata';
import { MdVolumeUp, MdMic } from 'react-icons/md';
import styles from './styles.css';

const SpeakQuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isRecording, setIsRecording] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionCompleted, setQuestionCompleted] = useState(false);

  const { questions } = quiz;
  const { question, correctAnswer: correctAns } = questions[activeQuestion];

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Check the user's answer when recording stops
    checkAnswer();
  };

  const checkAnswer = () => {
    // Compare the user's answer with the correct answer
    const isCorrect = userAnswer.toLowerCase() === correctAns.toLowerCase();
    
    // Update the result and move to the next question
    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 5 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));
    
    // Set the correct answer for displaying feedback
    setCorrectAnswer(correctAns);
    
    // Mark the question as completed
    setQuestionCompleted(true);
  };

  const nextQuestion = () => {
    // Move to the next question
    setActiveQuestion((prev) => prev + 1);
    // Reset state for the new question
    setCorrectAnswer('');
    setUserAnswer('');
    setQuestionCompleted(false);
  };

  useEffect(() => {
    // Handle speech recognition events here
    
    return () => {
      // Cleanup speech recognition if needed
    };
  }, [isRecording]);

  return (
    <div className='container'>
      {!showResult ? (
        <div>
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
          <div className="quiz-container">
            <h3>{question}</h3>
            {questionCompleted && (
              <div className={`feedback ${correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? 'correct' : 'wrong'}`}>
                {correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? 'Correct!' : `Wrong! The correct answer is: ${correctAnswer}`}
              </div>
            )}
            <div className="answer-input">
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Speak your answer..."
                disabled={isRecording}
              />
              <div className="action-buttons">
                <MdMic
                  className={`mic-icon ${isRecording ? 'recording' : ''}`}
                  onClick={isRecording ? stopRecording : startRecording}
                />
              </div>
            </div>
            <button
              onClick={nextQuestion}
              disabled={!questionCompleted}
              className={`btn ${!questionCompleted ? 'btn-disabled' : ''}`}
            >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className='quiz-container'>
          <h3>Results</h3>
          <h3>Overall {(result.score / (5 * questions.length)) * 100}%</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={() => window.location.reload()}>Start +10XP</button>
          <button onClick={() => window.location.href = '/user/leaderboard'}>View Leaderboard</button>
        </div>
      )}
    </div>
  );
};

export default SpeakQuizPage;


