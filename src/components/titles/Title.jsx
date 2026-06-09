import React from 'react';

const Title = ({title,subTitle,svg}) => {
    return (
        <div className="pricing-title">
                    
            {svg}

            <div className='title-content'>

                <h2>{title}</h2>

                <span>{subTitle}</span>

            </div>

        </div>
    );
}

export default Title;
