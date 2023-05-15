import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
          <Game/>
        )} />
        <Route path='*' element={(
          <div>
            <h1>404 - Not found</h1>
          </div>
        )} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
