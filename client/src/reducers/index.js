import { Types } from '../actions';

const initState = {
    phones: []
}

const reducer = (state = initState, action) => {
    console.log(action)
    switch(action.type) {
        case 'SUCCESS_GET_PHONES': 
            return {
                phones: action.results
            }
        default: return state;
    }
}

export default reducer;