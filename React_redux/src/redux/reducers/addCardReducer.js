const INITIAL_STATE = {
    cart : 666
}


function AddCardReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case "ADDCART" : {
            return{
                ...state,
                cart : action.payload

            }
        }
        
    }

    return state;
}


export default AddCardReducer;