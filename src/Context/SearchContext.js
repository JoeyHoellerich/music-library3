import React from "react"

// create Context to store Data
const SearchContext = React.createContext({
    term: "",
    handleSearch: () => {}
})

export default SearchContext