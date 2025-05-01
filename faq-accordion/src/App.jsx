// import Questions from "./components/questions/questions.jsx";
// import "./App.css";
// import star from "./assets/images/icon-star.svg";
// import { Quests } from "./data.js";
// import { useState } from "react";

// function App() {
//   const [showAnswer, setShowAnswer] = useState(false);

//   function displayAnswer() {
//     setShowAnswer((show) => !show);
//   }

//   let img = false;
//   if (showAnswer) {
//     img = true;
//   }

//   return (
//     <div className="App">
//       <div className="star">
//         <img src={star} alt="" />
//         <p>FAQs</p>
//       </div>

//       <Questions onSelect={displayAnswer} image={img} q={Quests[0].q}>
//         <p>{showAnswer && Quests[0].ans}</p>
//       </Questions>
//       <Questions onSelect={displayAnswer} image={img} q={Quests[1].q}>
//         <p>{showAnswer && Quests[1].ans}</p>
//       </Questions>
//       <Questions onSelect={displayAnswer} image={img} q={Quests[2].q}>
//         <p>{showAnswer && Quests[2].ans}</p>
//       </Questions>
//       <Questions onSelect={displayAnswer} image={img} q={Quests[3].q}>
//         <p>{showAnswer && Quests[3].ans}</p>
//       </Questions>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import star from "./assets/images/icon-star.svg";
import { Quests } from "./data.js";
import { useState } from "react";
import Questions from "./components/questions/questions.jsx";

function App() {
  // Initialize state for each question
  const [showAnswers, setShowAnswers] = useState(Quests.map(() => false));

  // Function to toggle answer visibility for a specific question
  function displayAnswer(index) {
    setShowAnswers((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className="App">
      <div className="star">
        <img src={star} alt="" />
        <p>FAQs</p>
      </div>

      {/* Render Questions component for each question */}
      {Quests.map((qt, index) => (
        <Questions
          onSelect={() => displayAnswer(index)}
          image={showAnswers[index]}
          q={qt.q}
          key={qt.k}
        >
          {showAnswers[index] && <p>{qt.ans}</p>}
        </Questions>
      ))}
    </div>
  );
}

export default App;
