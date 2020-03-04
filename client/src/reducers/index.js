import { Types } from '../actions';

const initState = {
    phones: [],
    error: null
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case Types.SUCCESS_GET_PHONES: 
            return {
                phones: action.results,
                error: null,
            }
        case Types.FAILED_GET_PHONES: 
        return {
            phones: [],
            error: action.payload
        }
        default: return state;
    }
}

export default reducer;