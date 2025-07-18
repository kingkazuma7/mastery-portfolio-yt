import React, { useEffect, useState } from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../client';
import PreviewModal from './PreviewModal';

const DetailModal = ({ isOpen, onRequestClose, selectedWorkDetails }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const headerImg = document.querySelector('.app__header-img img');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (headerImg) {
        headerImg.style.zIndex = '0';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (headerImg) {
        headerImg.style.zIndex = '1';
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (headerImg) {
        headerImg.style.zIndex = '1';
      }
    };
  }, [isOpen, selectedWorkDetails]);

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setCurrentImageIndex(0);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
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
        ariaHideApp={false}
      >
        <button className="modal-close-btn" onClick={onRequestClose}>×</button>
        <BlockContent blocks={selectedWorkDetails?.details} />
        <div className="modal-buttons">
          {selectedWorkDetails?.previewImages && selectedWorkDetails.previewImages.length > 0 && (
            <button className="detail-modal-image-btn" onClick={openImageModal}>画像を見る</button>
          )}
          {selectedWorkDetails?.previewVideo?.url && (
            <button className="detail-modal-video-btn" onClick={openVideoModal}>動画を見る</button>
          )}
        </div>
      </Modal>

      <PreviewModal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Preview"
        type="image"
      >
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
      </PreviewModal>

      <PreviewModal
        isOpen={isVideoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Preview"
        type="video"
      >
        {selectedWorkDetails?.previewVideo?.url && (
          <video
            src={selectedWorkDetails.previewVideo.url}
            controls
            className="preview-video"
            autoPlay
          />
        )}
      </PreviewModal>
    </>
  )
}

export default DetailModal
