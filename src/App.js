import './App.css';
import {useState, useRef, Fragment} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import SearchBar from './Components/Searchbar';
import DataContext from './Context/DataContext';
import SearchContext from './Context/SearchContext';
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';

function App() {
  // success/error message returned by API call
  let [message, setMessage] = useState("Search for Music!")
  // data to be displayed by gallery (returned data from API call)
  let [data, setData] = useState([])
  let searchInput = useRef("");

  const API_URL = "https://itunes.apple.com/search?term="

  // runs when user hits serach button
  const handleSearch = (e, term) => {
    e.preventDefault()
    // function to fetch data
    const fetchData = async () => {
      // change title of document
      document.title = `${term} Music`
      // api call to itunes
      let response = await fetch(API_URL + term)
      // convert response to json
      let resData = await response.json()
      // check to make sure results are returned
      if (resData.results.length > 0){
        // set data to be the results of the api call
        setData(resData.results)
      } else {
        setMessage("Not Found")
      }
      // console log results (test)
      console.log(resData)
    }
    // run function
    fetchData()
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchContext.Provider value = {{term: searchInput, handleSearch: handleSearch}} >
                <SearchBar />
              </ SearchContext.Provider>
              <DataContext.Provider value={data}>
                <Gallery />
              </DataContext.Provider>
            </Fragment>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;