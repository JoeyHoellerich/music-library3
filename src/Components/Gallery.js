import React from "react"
import GalleryItem from "./GalleryItem"

// Gallery to displayed returned items from music API call
export default function Gallery(props){
    let display = props.data.map((item, index) => {
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