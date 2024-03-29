import Questions from './components/questions/questions.jsx';
import './App.css';
import star from './assets/images/icon-star.svg'
import { Quests } from './data';
import { useState } from 'react';


function App() {
  const [showAnswer,setShowAnswer]=useState(false);
  console.log(showAnswer)

  function displayAnswer(){
    return setShowAnswer(true);
  }



  return (
    <div className="App">
      <div className="star">
            <img src={star} alt="" />
            <p>FAQs</p>
      </div>
      
      {Quests.map((qt) => {
        return(
          <Questions onSelect={displayAnswer} key={qt.k}{...qt}>
            {showAnswer && <p>{qt.ans}</p> }
          </Questions>
          
      )
      })
      }
    </div>
  );
}

export default App;
