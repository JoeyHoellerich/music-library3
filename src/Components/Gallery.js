import React, {useContext} from "react"
import GalleryItem from "./GalleryItem"
import DataContext from "../Context/DataContext"

// Gallery to displayed returned items from music API call
export default function Gallery(){
    let data = useContext(DataContext)

    let display = data.map((item, index) => {
        return(
            <GalleryItem item ={item} key={index}/>
        )
    })

    return(
        <div>
            {display}
        </div>
    )

}