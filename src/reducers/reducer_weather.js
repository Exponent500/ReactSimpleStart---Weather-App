import { FETCH_WEATHER } from '../actions/index';

// Initial state is [], because we will be building up an array
// of cities that we want to display weather for each and
// every time the user makes a new city search
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state]; 
    }
    return state;
}