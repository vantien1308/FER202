import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import ItemListAdvanced from "./components/ItemListAdvanced";
import QuestionBank from "./components/QuestionBank";
import QuizWithFeedback from "./components/QuizWithFeedback";


function App() {
  return (
    <div>
      
      <Counter />
      <ChangeNameAge />
      <ItemList />
      <ItemListAdvanced />
      <QuestionBank />
      <QuizWithFeedback />
    </div>
  );
}

export default App;
