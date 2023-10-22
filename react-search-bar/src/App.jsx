import { useState } from 'react'
import './App.css'
import { Searchbar } from './Components/Searchbar'
import { SearchResultList } from './Components/SearchResultList';

function App() {

const [results,setResults] = useState([]);  

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <Searchbar setResults={setResults}/>
        <SearchResultList results={results }/>

      </div>
      
    </div>
  )
}

export default App
