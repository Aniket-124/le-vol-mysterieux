import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import Layout from './layouts/Layout';

import PromptComponent  from '../src/component/Prompt'
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/game' element={(
            <Game/>
          )} />
          <Route path='*' element={(
            <div>
              <h1>404 - Not found</h1>
            </div>
          )} />
          <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter> 
  )
}

export default App;
