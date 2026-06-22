import React from 'react';

import './styles.css';
import { useCarousel } from '../hooks/useCarousel';
import { GoFileMedia } from 'react-icons/go';

const Carrousel = ({images = [] }) => {

    const {
        
        prevImage,
        nextImage,
        curretImage,
        
        setPrev,
        setNext,

    } = useCarousel(images);

    return (
        <div className='pd-carousel'>

            {
                prevImage && <div 
                    className="pd-prev-image"
                    onClick={setPrev}
                >
                    <img src={prevImage.path} alt={prevImage.preview_id} />
                </div>
            }
            
            <div className="pd-current-image">

                {
                    curretImage 
                        ?   <img src={curretImage.path} alt={curretImage.preview_id} />
                        :   
                        <div 
                            className='no-set-image-carousel'
                        >
                            <h2>Sem imagem</h2>
                            <GoFileMedia/>
                        </div>
                }

            </div>

            {
                nextImage && <div 
                    className='pd-next-image'
                    onClick={setNext}
                >
                    <img src={nextImage.path} alt={nextImage.preview_id} />
                </div>
            }

        </div>
    );
}

export default Carrousel;
