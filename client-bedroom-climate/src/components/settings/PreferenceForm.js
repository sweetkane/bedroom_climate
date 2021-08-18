import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postClimate } from '../../actions';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const PreferenceForm = (props) => {

    const type = props.type;
    const dispatch = useDispatch();
    const preferred = useSelector(state => state.Preferred);
    const [text, onChangeText] = useState("");
    const label = "Preferred " + (type === "temperature" ? "Temperature" : "Humidity");

    const onClickEvent = () => {
        switch (type) {
            case "temperature":
                dispatch(postClimate("preferred", text, preferred.humidity));
                break;
            case "humidity":
                dispatch(postClimate("preferred", preferred.temperature, text));
                break;
            default: break;
        }
    }
 
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder={label}
                    aria-label={label}
                    value={text}
                    onChange={event => onChangeText(event.target.value)}
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button 
                    variant="primary"
                    onClick={() => {onClickEvent(); onChangeText("")}}
                >
                    Submit
                </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default PreferenceForm;