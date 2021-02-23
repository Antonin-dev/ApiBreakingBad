import React from 'react'
import { useHistory } from "react-router-dom";
import './ViewContainer.css';



function EpisodeCard(props) {
    let tableauCard = [];
    let history = useHistory();

    tableauCard = props.dataCard.map((value)=>{
        return <div className ='card col-11 bg-secondary ml-1 mb-3 text-light test'>
            <h5 className='card-title bg-info'>{value.title}</h5>
            <p className='card-text bg-secondary'>Saison : {value.season}</p>
            <p className='card-text bg-secondary'>Diffusion : {value.air_date}</p>
            <p className='card-text bg-secondary'>Characters : {value.characters}</p>
                        
        </div>
        
    })
    
    return (
        <div className='container p-0'>
            
                
                {tableauCard}
                
            
        </div>
    )
}

export default EpisodeCard
