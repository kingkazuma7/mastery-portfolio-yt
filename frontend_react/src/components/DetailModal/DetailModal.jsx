import React, { useEffect, useState } from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../client';

const DetailModal = ({ isOpen, onRequestClose, selectedWorkDetails }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedWorkDetails?.previewImages && currentImageIndex < selectedWorkDetails.previewImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Work Details"
        className="my-custom-modal"
      >
        <button className="modal-close-btn" onClick={onRequestClose}>×</button>
        <BlockContent blocks={selectedWorkDetails?.details} />
        {selectedWorkDetails?.previewImages && selectedWorkDetails.previewImages.length > 0 && (
          <button className="detail-modal-image-btn" onClick={openImageModal}>画像を見る</button>
        )}
      </Modal>

      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Preview"
        className="image-preview-modal"
      >
        <button className="modal-close-btn" onClick={closeImageModal}>×</button>
        <div className="image-preview-container">
          {selectedWorkDetails?.previewImages && selectedWorkDetails.previewImages.length > 0 && (
            <>
              <img
                src={urlFor(selectedWorkDetails.previewImages[currentImageIndex])}
                alt={`Preview ${currentImageIndex + 1}`}
                className="preview-image"
              />
              {selectedWorkDetails.previewImages.length > 1 && (
                <div className="image-navigation">
                  <button
                    className="nav-button prev"
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                  >
                    ←
                  </button>
                  <span className="image-counter">
                    {currentImageIndex + 1} / {selectedWorkDetails.previewImages.length}
                  </span>
                  <button
                    className="nav-button next"
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedWorkDetails.previewImages.length - 1}
                  >
                    →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </Modal>
    </>
  )
}

export default DetailModal
