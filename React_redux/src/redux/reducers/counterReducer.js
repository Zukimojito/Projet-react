const INITIAL_STATE = {
    lol : 100,
    count : 8
}


function CounterReducers(state = INITIAL_STATE, action){

    switch(action.type){
        case "INCR" : {
            return{
                ...state,
                count : state.count + 1
            }
        }
        case "DECRE" : {
            return{
                ...state,
                count : state.count -1
            }
        }
        
    }


    
    return state;
}

export default CounterReducers;