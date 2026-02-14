import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Quiz } from './Quiz/Quiz';
import { QuizAnswer } from './QuizAnswer/QuizAnswer';
import { FinalMessage } from './FinalMessage/FinalMessage';

function App() {
  return (
      <BrowserRouter>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montez&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Montez&display=swap" rel="stylesheet"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:questionNb" element={<Quiz />} />
          <Route path="/quiz/:id/:questionNb" element={<QuizAnswer />} />
          <Route path="/happyvalentinesday" element={<FinalMessage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
