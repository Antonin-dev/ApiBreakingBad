
import {useEffect, useState} from 'react';
import './ViewContainer.css'
import {
    BrowserRouter as Router,
    useLocation
  } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import EpisodeCard from "./EpisodeCard";
import QuotesCard from "./QuotesCard";

function ViewContainer(props) {

    const [card, setCard] = useState([])
    let location = useLocation();
    
    useEffect(() => {

        const asyncFunction = async () =>{
        try {
            const data = await fetch (props.url);
            const dataTranslate = await data.json();
            setCard(dataTranslate);
        } catch (error) {
            <h1>ERROR API</h1>
        }

        
        }

       asyncFunction(); 
    }, [props.url])

   
    

    let cardWithData = <p>Chargement</p>
    if (card && location.pathname == '/characters') {
        cardWithData = <CharacterCard 
            dataCard = {card}
            />
            
    }

    else if (card && location.pathname == '/episodes') {
        cardWithData = <EpisodeCard 
            dataCard = {card}
            />
            
    }

    else if (card && location.pathname == '/quotes') {
        cardWithData = <QuotesCard 
            dataCard = {card}
            />
            
    }

    return (
        <div className="block-card">
            {cardWithData}
        </div>
    )
}

export default ViewContainer
