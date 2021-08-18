import React from 'react';
import { useSelector } from 'react-redux';
import { Fade, Jumbotron, Image } from 'react-bootstrap';
import windowOpen from '../../assets/NYC-Window-Open.png';
import windowClosed from '../../assets/NYC-Window-Closed.png';
const Suggestor = () => {
    const isSuggest = useSelector(state => state.Other.isSuggest);
    const background = (isSuggest ? windowOpen : windowClosed);
    return (
        
                    <Jumbotron style={{ paddingBottom: 10, marginTop: 30 }}>
                        <h1>
                            Keep your window 
                        <text style={{ color: '#007bff'}}>{isSuggest ? " open" : " closed"}!</text></h1>
                        <p>
                            This suggestion is based on a formula that compares 
                            the indoor and outdoor climates to the climate you prefer. 
                            Indoor and outdoor climates are automatically updated every 5 minutes.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center "}}>
                            <Fade in={true} ><Image src={background} rounded /></Fade>
                            
                        </div>
                    </Jumbotron>
        
    );
}

export default Suggestor;

// <Fade in={!isSuggest} ><Image src={windowClosed} rounded /></Fade>} 