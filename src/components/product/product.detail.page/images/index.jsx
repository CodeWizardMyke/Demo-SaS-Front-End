import "./styles.css";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

export default function ProductGallery(
    { 
        images ,
        currentIndex,setCurrentIndex,
        currentImage,
        toggleModal
    }
) {

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };


  return (
    <div className="gallery">
        <div className="gallery-image-wrapper">

            {
                currentImage 
                    ? <img
                        src={currentImage?.path}
                        alt={currentImage?.alt || ""}
                        className="gallery-image"
                    />
                    : <h2 className="no-image-seted">Nenhuma imagem carregada...</h2>
            }

            {
                currentImage 
                    && <button 
                        className="gallery-expand"
                        onClick={toggleModal}
                    > <FaSearchPlus />  
                    </button>
            }

            <div className="gallery-navigation">
                {
                    currentImage &&
                     <>
                    
                        <button onClick={prevImage}>
                            <FaLongArrowAltLeft />
                        </button>

                        <span>
                            {currentIndex + 1} / {images.length}
                        </span>

                        <button onClick={nextImage}>
                            <FaLongArrowAltRight />
                        </button>

                    </>
                }
            </div>
        </div>
        
    </div>
  );
}