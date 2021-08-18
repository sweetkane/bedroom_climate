import React from 'react';
import PreferenceForm from './PreferenceForm';

const Settings = () => {

    return (
        <div>
            <PreferenceForm type="temperature" />
            <PreferenceForm type="humidity" />
        </div>
    );
}

export default Settings;