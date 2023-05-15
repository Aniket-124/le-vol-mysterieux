import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

import PromptComponent  from '../src/component/Prompt'
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter> 
  )
}

export default App;
