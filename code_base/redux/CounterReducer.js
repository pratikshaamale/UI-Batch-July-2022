

const initialState = {
    count: 1,
    
}
const countReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'DECREMENT':
            return {
                
                ...state,
                count: state.count - 1,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        default:
            return state;
    }

}
export default countReducer;


