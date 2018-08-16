import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    
    return (
        <div>
            <p>Name:</p>
            <p>{ props.username }</p>
        </div>
    );
};

export default UserOutput;