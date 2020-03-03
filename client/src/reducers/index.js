import { Types } from '../actions';

const initState = {
    phones: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case Types.SUCCESS_GET_PHONES: 
            return {
                phones: action.results
            }
        default: return state;
    }
}

export default reducer;