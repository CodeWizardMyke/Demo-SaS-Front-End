import React, { useState } from 'react';

import "../styles.css";
import ListedImages from '../Shared/ListedImages';
import CurrentImage from '../Shared/CurrentImage';

const Thumbnails = ({toggleSideBar}) => {
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState(null);

    return (
        <div className='scob-content'>
            <div className="scob-media">
                <ListedImages data={images} setData={setImages} setCurrent={setCurrent} current={current} />
                <CurrentImage data={current} />
            </div>
            <button
                type='button'
                className='button-confirm'
            >
                confirmar
            </button>
        </div>
    );
}

export default Thumbnails;
