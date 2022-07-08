const INITIAL_STATE = {
    ArticleDoc : []
}


function AddArticleReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case "LOADARTICLES" : {
            return {
                ...state,
                ArticleDoc : action.payload
            }
        }

        case "ADDARTICLES" : {
            const NewState = [...state.ArticleDoc];
            NewState.unshift(action.payload);                    //ça met un élément au début de tableau
            return{
                ...state,
                ArticleDoc : NewState
            }
        }
    }

    return state;
}


export default AddArticleReducer;


export const getArticles = () => dispatch => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type : 'LOADARTICLES',
            payload : data
        })
    })
    
}

