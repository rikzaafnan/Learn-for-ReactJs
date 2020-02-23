import React from 'react'

const TopEvents = () => {

    // get data from onClick
    const handleFooter = (value) => {
        // e.preventDefault()
        alert(value)
    }

    return(
        <a href="/" onClick={ e => handleFooter("Back To Home", e)} >
            back To Home
        </a>
    )

}

export default TopEvents;