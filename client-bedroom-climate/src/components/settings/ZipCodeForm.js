import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setZip, refreshOutdoor } from '../../actions';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const ZipCodeForm = (props) => {

    const dispatch = useDispatch();
    const [text, onChangeText] = useState("");
    const onClickEvent = () => {
        dispatch(setZip(text));
        dispatch(refreshOutdoor());
    }
    const label = "Enter Zip Code"

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

export default ZipCodeForm;