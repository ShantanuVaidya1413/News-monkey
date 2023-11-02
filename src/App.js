import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";



const App = () => {
  const pageSize = 9
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={API_KEY} country="in" category="general" />} />
          <Route exact path='/business' element={<News key="business" pageSize={pageSize} apiKey={API_KEY} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={API_KEY} country="in" category="entertainment" />} />
          <Route exact path='/general' element={<News key="general" pageSize={pageSize} apiKey={API_KEY} country="in" category="general" />} />
          <Route exact path='/health' element={<News key="health" pageSize={pageSize} apiKey={API_KEY} country="in" category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={pageSize} apiKey={API_KEY} country="in" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={API_KEY} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={API_KEY} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App