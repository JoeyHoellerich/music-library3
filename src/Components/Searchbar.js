import React, {useContext} from "react"
import SearchContext from "../Context/SearchContext"

export default function SearchBar(){
    // track state of current data in search box
    let {term, handleSearch} = useContext(SearchContext)

    return(
        // when form is submitted, run handleSearch in App.js with string in serachBar
        <form onSubmit={(e) => handleSearch(e, term.current.value)}>
            {/* Place to put text, update state of searchText on change */}
            <input ref = {term} placeholder="Songs, Artist, Album" type="text"/>
            {/* button to submit form */}
            <button type="submit" >Search</button>
        </form>
    )
}