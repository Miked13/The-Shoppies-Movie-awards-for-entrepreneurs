import React from 'react';
import Header from './Components/Header.js';
import './tailwind.css';
import SearchMovies from './Components/Search.js';
import Results from './Components/Results';

function App() {

  return (
      <div className="relative width-full">
        <div className="mx-auto overflow-hidden">
          <Header/>
          <SearchMovies/>
        </div>
      </div>
  );
}

export default App;