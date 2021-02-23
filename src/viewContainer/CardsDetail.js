import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import './CardsDetail.css';
function CardsDetail() {

  

    const [state, setstate] = useState(null);

    const {id} = useParams();

    const lien = "https://www.breakingbadapi.com/api/characters/"+id;
    
    console.log(lien);
   

    useEffect(() => {
        
        const asyncFunction = async ()=> {

            try {
                
                const data = await fetch (lien);
                const dataTranslate = await data.json();
                setstate(dataTranslate);

            } catch (error) {
                
            }


        }
        
        asyncFunction();
    }, [])


    
    console.log(state);

    return (
        <div className='card col-12 bg-secondary text-light block'>
            {state && <h5 className="card-title">{state[0].name}</h5>}
            {state && <img className="card-img-top center-block image" src={state[0].img} />}
            {state && <p className='card-text bg-secondary'>Category : {state[0].category}</p>}
            {state && <p className='card-text bg-secondary'>Nickname : {state[0].nickname}</p>}
            {state && <p className='card-text bg-secondary'>Birthday : {state[0].birthday}</p>}
            {state && <p className='card-text bg-secondary'>Occupation : {state[0].occupation}</p>}
            {state && <p className='card-text bg-secondary'>Status : {state[0].status}</p>}
            
        </div>
    )
}

export default CardsDetail
