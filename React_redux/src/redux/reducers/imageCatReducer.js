const INITIAL_STATE = {
    imgcat : ""
}

function imageCatReducer(state = INITIAL_STATE, action){

    switch(action.type) {
        case "LOADIMGCAT" :{
            return {
                ...state,
                imgcat : action.payload
            }
        }
    }



    return state;

}

export default imageCatReducer;


export const getCatIMG = () => dispatch => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type : "LOADIMGCAT",
            payload : data[0].url
        })
    })
}

