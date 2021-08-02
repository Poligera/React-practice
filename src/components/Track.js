import React, {useState} from "react";

const Track = ({ title }) => {
    const [liked, setLiked] = useState(false);
    const handleLikeButtonClick = () => {
        setLiked(prevState => !prevState)
    }

    const titleStyle = {
        backgroundColor: !liked? '#f5f5f5': '#8aff8a',
        display: 'block',
        padding: '0.5rem',
        width: 'fit-content',
        color: !liked? 'black': 'white',
        fontWeight: !liked? 'normal': 'bold',
        borderRadius: '10px'
    }

    return (
        <li><p style={titleStyle}>{title}</p><button onClick={handleLikeButtonClick}>{liked? 'UNLIKE' : 'LIKE'}</button></li>
    )
}


export default Track;