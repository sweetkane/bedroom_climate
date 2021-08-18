import { combineReducers } from 'redux';

const INITIAL_PREFERRED = {
    "temperature": 0,
    "humidity" : 0
}

const reducerPreferred = (state = INITIAL_PREFERRED, action = {}) => {
    switch(action.type){
		
		case 'setTempPreference':
            return { ...state, temperature : action.payload }

        case 'setHumidPreference':
            return { ...state, humidity : action.payload }

	 	default: return state;
	}
};

const INITIAL_OUTDOOR = {
    "temperature": 0,
    "humidity" : 0
}

const reducerOutdoor = (state = INITIAL_OUTDOOR, action = {}) => {
    switch(action.type){
		
        case 'setTempOutdoor':
            return { ...state, temperature : action.payload }
        case 'setHumidOutdoor':
            return { ...state, humidity : action.payload }

	 	default: return state;
	}
};

const INITIAL_INDOOR = {
    "temperature": 0,
    "humidity" : 0
}

const reducerIndoor = (state = INITIAL_INDOOR, action = {}) => {
    switch(action.type){
		
        case 'setTempIndoor':
            return { ...state, temperature : action.payload }

        case 'setHumidIndoor':
            return { ...state, humidity : action.payload }

	 	default: return state;
	}
};

const INITIAL_OTHER = {
    "isSuggest": false,
    "zip": "48104"
}

const reducerOther = (state = INITIAL_OTHER, action = {}) => {
    switch(action.type){
		
        case 'setSuggest':
            return { ...state, isSuggest : action.payload }
        
        case 'setZip':
            return { ...state, zip : action.payload }

	 	default: return state;
	}
};

export default combineReducers({
    Indoor: reducerIndoor,
    Outdoor: reducerOutdoor,
    Preferred: reducerPreferred,
    Other: reducerOther

  });          

