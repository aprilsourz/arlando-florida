import React from 'react'
import './big-image.scss'

const BigImage = ({person: {img}}) => {
    return (
    <div className="f-screen-image" style={{backgroundImage: `url(${img})`}}>
        {/* <iframe src="https://giphy.com/embed/k5GcybwY1yybmGwrFg" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/k5GcybwY1yybmGwrFg">via GIPHY</a></p> */}
    </div>
        )
}

export default BigImage
