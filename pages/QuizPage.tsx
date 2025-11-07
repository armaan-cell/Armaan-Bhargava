
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { quizQuestions } from '../constants';
import { QuizQuestion } from '../types';

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent changing answer

    setSelectedOption(optionIndex);
    const correct = optionIndex === currentQuestion.correctAnswerIndex;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const getOptionClass = (index: number) => {
    if (selectedOption === null) {
      return 'bg-white hover:bg-blue-100';
    }
    if (index === currentQuestion.correctAnswerIndex) {
      return 'bg-green-200';
    }
    if (index === selectedOption) {
      return 'bg-red-200';
    }
    return 'bg-white';
  };

  return (
    <PageWrapper title="Pollution Quiz">
      <div className="max-w-2xl mx-auto bg-blue-100 p-6 sm:p-8 rounded-lg shadow-2xl">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Quiz Completed!</h2>
            <p className="text-xl text-gray-700 mb-6">
              Your score is: <span className="font-bold text-green-600">{score}</span> out of {quizQuestions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-lg text-gray-600">Question {currentQuestionIndex + 1}/{quizQuestions.length}</p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-2">{currentQuestion.question}</h2>
            </div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-4 rounded-lg border-2 border-blue-200 transition-colors duration-300 ${getOptionClass(index)}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOption !== null && (
              <div className="mt-6 text-center">
                <p className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
                <button
                  onClick={handleNextQuestion}
                  className="mt-4 bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Show Results'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default QuizPage;
