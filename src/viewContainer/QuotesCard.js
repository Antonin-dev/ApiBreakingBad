import React from 'react';
import { useHistory } from "react-router-dom";
import './ViewContainer.css';

function QuotesCard(props) {
    let tableauCard = [];
    let history = useHistory();

    tableauCard = props.dataCard.map((value)=>{
        console.log(value);
        return <div className ='card col-11 bg-secondary ml-1 mb-3 mt-3 text-light'>
            <h5 className='card-title bg-info'>{value.author}</h5>
            <p className='card-text bg-secondary'>Quote : {value.quote}</p>
            <p className='card-text bg-secondary'>Series : {value.series}</p>
                        
        </div>
        
    })
    
    return (
        <div className='container p-0'>
            
                
                {tableauCard}
                
           
        </div>
    )
}

export default QuotesCard
