import React from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';
import BlockContent from '@sanity/block-content-to-react';

const DetailModal = ({ isOpen, onRequestClose, selectedWorkDetails }) => {
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
      <button onClick={onRequestClose}>閉じる</button>
    </Modal>
  )
}

export default DetailModal
