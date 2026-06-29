import { useState } from "react";
import "./styles.css";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import GalleryModal from "./galleryModal";

export default function ProductGallery({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [openModal,setOpenModal] = useState(false)

    const currentImage = images[currentIndex];

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

    function toggleModal(){
        setOpenModal(!openModal);
    }

    if (!currentImage) return null;

  return (
    <div className="gallery">
        <div className="gallery-image-wrapper">
            <img
                src={currentImage.path}
                alt={currentImage.alt || ""}
                className="gallery-image"
            />

            <button 
                className="gallery-expand"
                onClick={toggleModal}
            >
                <FaSearchPlus />
            </button>

            <div className="gallery-navigation">
                <button onClick={prevImage}>
                    <FaLongArrowAltLeft />
                </button>

                <span>
                    {currentIndex + 1} / {images.length}
                </span>

                <button onClick={nextImage}>
                    <FaLongArrowAltRight />
                </button>
            </div>
        </div>
        {
            openModal && <GalleryModal 
                images={images} 
                current={currentIndex}
                setCurrent={setCurrentIndex}
                prev={prevImage}
                next={nextImage}
                close={toggleModal} 
            />
        }
    </div>
  );
}