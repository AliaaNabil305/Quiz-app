import logo from './logo.svg';
import './App.css';
import QuizWindow from './Components/QuizWindow';
import { QuizProvider } from './Context/Store';

function App() {
  return (
 <>
 <QuizProvider>
 <QuizWindow/>
 </QuizProvider>
 </>
  );
}

export default App;
