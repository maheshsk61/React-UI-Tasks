import { useEffect, useState } from "react";

const Quiz = () => {
  const quiz = [
    {
      question: "What is the capital of France?",
      answer: 2,
      option1: "Berlin",
      option2: "Paris",
      option3: "Madrid",
      option4: "Rome",
    },
    {
      question: "Which language is used for web development?",
      answer: 3,
      option1: "C++",
      option2: "Python",
      option3: "JavaScript",
      option4: "Java",
    },
    {
      question: "What is 2 + 2?",
      answer: 1,
      option1: "4",
      option2: "3",
      option3: "5",
      option4: "6",
    },
    {
      question: "Who developed the theory of relativity?",
      answer: 4,
      option1: "Isaac Newton",
      option2: "Nikola Tesla",
      option3: "Galileo Galilei",
      option4: "Albert Einstein",
    },
    {
      question: "Which is the largest ocean on Earth?",
      answer: 2,
      option1: "Atlantic Ocean",
      option2: "Pacific Ocean",
      option3: "Indian Ocean",
      option4: "Arctic Ocean",
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: 3,
      option1: "Ag",
      option2: "Fe",
      option3: "Au",
      option4: "Pb",
    },
  ];

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [answeredQns, setAnsweredQns] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const noOfQnsPerPage = 2;
  const finalPage = Math.ceil(quiz.length / noOfQnsPerPage);

  const handleNext = () => {
    if (answeredQns >= 1 && page < finalPage) {
      setPage(page + 1);
      setAnsweredQns(0);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Set the submitted flag to true
  };

  const handleCheckAnswer = (qnIndex, selectedOption, correctAnswer) => {
    if (selectedAnswers[qnIndex] !== undefined) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [qnIndex]: selectedOption,
    }));

    setAnsweredQns((prev) => prev + 1);

    if (selectedOption === correctAnswer) {
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log(`page ${page}`);
    console.log(`answeredQns ${answeredQns}`);
    console.log(`isSubmitted ${isSubmitted}`);
  }, [page, answeredQns, isSubmitted]);

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>
          Your Score: {count} / {quiz.length}
        </h1>
      </div>
    );
  }

  return (
    <div>
      {quiz.length > 0 ? (
        quiz
          .slice((page - 1) * noOfQnsPerPage, page * noOfQnsPerPage)
          .map((qn, qnIndex) => {
            const globalIndex = (page - 1) * noOfQnsPerPage + qnIndex;
            console.log(`globalIndex ${globalIndex}`);
            return (
              <div key={globalIndex} style={{ marginBottom: "20px" }}>
                <h2>{qn.question}</h2>
                {[1, 2, 3, 4].map((opt) => {
                  let bgColor = "black";
                  console.log(
                    `selectedAnswers[globalIndex] ${selectedAnswers[globalIndex]}`
                  );
                  if (selectedAnswers[globalIndex] !== undefined) {
                    if (opt === qn.answer) {
                      bgColor = "green";
                    } else if (opt === selectedAnswers[globalIndex]) {
                      bgColor = "red";
                    }
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() =>
                        handleCheckAnswer(globalIndex, opt, qn.answer)
                      }
                      style={{
                        background:
                          selectedAnswers[globalIndex] === opt
                            ? bgColor
                            : "black",
                        padding: "10px",
                        margin: "5px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        color: "white",
                      }}
                      disabled={selectedAnswers[globalIndex] !== undefined}
                    >
                      {qn[`option${opt}`]}
                    </button>
                  );
                })}
              </div>
            );
          })
      ) : (
        <h1>Please add quiz questions to start</h1>
      )}

      {page < finalPage ? (
        <button
          style={{
            width: "20%",
            margin: "20px auto",
            display: "block",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: answeredQns >= 1 ? "pointer" : "not-allowed",
            opacity: answeredQns >= 1 ? 1 : 0.5,
          }}
          onClick={handleNext}
          disabled={answeredQns < quiz.slice((page - 1) * noOfQnsPerPage, page * noOfQnsPerPage).length}
        >
          Next
        </button>
      ) : (
        <button
          style={{
            width: "20%",
            margin: "20px auto",
            display: "block",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: answeredQns >= 1 ? "pointer" : "not-allowed",
            opacity: answeredQns >= 1 ? 1 : 0.5,
          }}
          onClick={handleSubmit}
          disabled={answeredQns < quiz.slice((page - 1) * noOfQnsPerPage, page * noOfQnsPerPage).length}
          >
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
