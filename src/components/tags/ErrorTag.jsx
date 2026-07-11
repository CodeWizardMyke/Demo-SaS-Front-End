import React from 'react';

const ErrorTag = ({msg}) => {
    return (
        <div className='md-danger'>
            {msg}
        </div>
    );
}

export default ErrorTag;
