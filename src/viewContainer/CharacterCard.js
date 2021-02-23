import React from 'react'
import { useHistory } from "react-router-dom";
import './ViewContainer.css'
function CharacterCard(props) {


    let tableauCard = [];
    let history = useHistory();

    tableauCard = props.dataCard.map((value)=>{

        // console.log(value.char_id);

        return <div className ='card col-sm-2 col-sm-3 col-lg-2 bg-secondary ml-1 mb-2 p-2 text-light'>
            <img className="card-img-top center-block" src={value.img} width="100px" height="250px" />
            
                <h5 className='card-title'>{value.name}</h5>
                <button type="button" 
                    onClick={()=>history.push("/characters/"+value.char_id)} 
                    class="btn btn-success">Detail
                </button>
                
                
                        
        </div>
        
    })
    
    return (
        <div className='container'>
            <div className='row'>
                
                {tableauCard}
                
            </div>
        </div>
    )
}

export default CharacterCard
