
import { useReducer } from 'react';

const initialState = {
    choix : ''
}

const reducer = (state, action)=>{

    switch (action.type) {
        case 'choix':
            state.choix = action.payload;
            console.log(state);
            return state;
            break;
    
        default:
            break;
    }

}




const MonReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch];
        
    
}

export default MonReducer
