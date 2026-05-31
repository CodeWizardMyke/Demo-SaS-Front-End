import React from 'react';

const FieldTextArea = (props) => {

    return (
        <textarea
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            col={props.col}
            rows={props.rows}
            onChange={props.onChange}
        />
    
    );
};

export default FieldTextArea;
