import React from 'react';

const Title = ({title,subTitle,svg}) => {
    return (
        <div className="title_form_step">
                    
            {svg}

            <div className='title-content'>

                <h2>{title}</h2>

                <span>{subTitle}</span>

            </div>

        </div>
    );
}

export default Title;
