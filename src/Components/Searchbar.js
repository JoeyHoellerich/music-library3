import React, {useState} from "react"

export default function SearchBar(props){
    // track state of current data in search box
    let [searchText, setSearchText] = useState("")

    return(
        // when form is submitted, run handleSearch in App.js with string in serachBar
        <form onSubmit={(e) => {props.handleSearch(e, searchText)}}>
            {/* Place to put text, update state of searchText on change */}
            <input placeholder="Songs, Artist, Album" type="text" onChange={(e) => setSearchText(e.target.value)}/>
            {/* button to submit form */}
            <button type="submit">Search</button>
        </form>
    )
}