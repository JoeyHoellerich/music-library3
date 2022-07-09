import './App.css';
import {useEffect, useState} from "react"
import Gallery from './Components/Gallery';
import SearchBar from './Components/Searchbar';

function App() {

  // state for searchBar text 
  let [search, setSearch] = useState("")
  // success/error message returned by API call
  let [message, setMessage] = useState("Search for Music!")
  // data to be displayed by gallery (returned data from API call)
  let [data, setData] = useState([])

  const API_URL = "https://itunes.apple.com/search?term="

  // runs when user hits serach button
  const handleSearch = (e, term) => {
    e.preventDefault()
    // sets search to be data user enters in search bar
    setSearch(term)
  }

  // runs on 1st render, and every time "search" state changes
  useEffect(() => {
    if (search){
        // function to fetch data
      const fetchData = async () => {
        // change title of document
        document.title = `${search} Music`
        // api call to itunes
        let response = await fetch(API_URL + search)
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

  }, [search])

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      <Gallery data = {data}/>
    </div>
  );
}

export default App;
