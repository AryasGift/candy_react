import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Home from './Home';
import Score from './Score';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Game" element={<Game></Game>}></Route>
        <Route path="/Score" element={<Score></Score>}></Route>

      </Routes>
    </div>
  );
}

export default App;
