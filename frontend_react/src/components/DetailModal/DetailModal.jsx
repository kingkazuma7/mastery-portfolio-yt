import React, { useEffect } from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';
import BlockContent from '@sanity/block-content-to-react';

const DetailModal = ({ isOpen, onRequestClose, selectedWorkDetails }) => {
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

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Work Details"
    >
      <BlockContent blocks={selectedWorkDetails} />
      <button className="detail-modal-close-btn" onClick={onRequestClose}>閉じる</button>
    </Modal>
  )
}

export default DetailModal
