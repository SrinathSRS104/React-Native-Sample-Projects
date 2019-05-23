

import { INCREMENT, DECREMENT } from '../actions/ActionTypes'


const counterReducer = (times = 0, action) => {
    switch (action.type) {
        case INCREMENT :
            return ++times
        case DECREMENT :
            return --times
        
        default :
            return times
    }
}

export default counterReducer