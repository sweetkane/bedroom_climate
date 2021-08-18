import { serverGET, serverClimatePOST } from './serverAPI';
import { weatherGET } from './weatherAPI';

export const setTempPreference = (prefVal) => ({
    type: 'setTempPreference',
    payload: prefVal
});

export const setHumidPreference = (prefVal) => ({
    type: 'setHumidPreference',
    payload: prefVal
});

export const setTempIndoor = (prefVal) => ({
    type: 'setTempIndoor',
    payload: prefVal
});

export const setHumidIndoor = (prefVal) => ({
    type: 'setHumidIndoor',
    payload: prefVal
});

export const setTempOutdoor = (prefVal) => ({
    type: 'setTempOutdoor',
    payload: prefVal
});

export const setHumidOutdoor = (prefVal) => ({
    type: 'setHumidOutdoor',
    payload: prefVal
});

export const setSuggest = (suggestion) => ({
    type: 'setSuggest',
    payload: suggestion
});

export const setZip = (zip) => ({
    type: 'setZip',
    payload: zip
});

// start thunks


export const refreshClimates = () => {
    return async (dispatch, getState ) => {
        await dispatch(refreshOutdoor());
        await dispatch(getClimate("indoor"));
    }
}

export const refreshOutdoor = () => {
    return async (dispatch, getState ) => {
        const zip = getState().Other.zip;
        const response = await weatherGET(zip);
        const temperature = response.response.ob.tempF;
        const humidity = response.response.ob.humidity;
        dispatch(postClimate("outdoor", temperature, humidity));
    }
}

export const postClimate = (type, temperature, humidity) => {
    return async (dispatch, getState ) => {
        const response = await serverClimatePOST(type, temperature, humidity);
        if (response !== "ERR") {
            dispatch(setClimate(type, temperature, humidity));
        }
    }
}

export const getAllClimates = () => {
    return async (dispatch, getState ) => {
        await dispatch(getClimate("preferred"));
        await dispatch(getClimate("indoor"));
        await dispatch(getClimate("outdoor"));
    }
}

export const getClimate = (type) => {
    return async (dispatch, getState ) => {

        const response = await serverGET(type);
        const { humidity, temperature } = response;

        dispatch(setClimate(type, temperature, humidity));
    }
}

export const setClimate = (type, temperature, humidity) => {
    return async (dispatch, getState ) => {
        switch(type) {
            case 'preferred':
                dispatch(setHumidPreference(humidity));
                dispatch(setTempPreference(temperature));
                break;
            case 'indoor':
                dispatch(setHumidIndoor(humidity));
                dispatch(setTempIndoor(temperature));
                break;
            case 'outdoor':
                dispatch(setHumidOutdoor(humidity));
                dispatch(setTempOutdoor(temperature));
                break;
            default: break;
        }
        dispatch(findSuggest());
    }
}

export const findSuggest = () => {
    return (dispatch, getState ) => {
        
        const climates = getState();
        const humidityModulus = (1.0 / 4);

        const indoorTemp = climates.Indoor.temperature;
        const indoorHumidity = climates.Indoor.humidity;
        const outdoorTemp = climates.Outdoor.temperature;
        const outdoorHumidity = climates.Outdoor.humidity;
        const preferredTemp = climates.Preferred.temperature;
        const preferredHumidity = climates.Preferred.humidity;

        let tempVal = (outdoorTemp - indoorTemp);
        tempVal *= (preferredTemp - indoorTemp);
        let val = (outdoorHumidity - indoorHumidity);
        val *= (preferredHumidity - indoorHumidity);
        val *= humidityModulus;
        val += tempVal;

        const suggestion = (val > 0);
        dispatch(setSuggest(suggestion));


    }
}


