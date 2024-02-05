import React from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';

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
      <p dangerouslySetInnerHTML={{ __html: selectedWorkDetails }}></p>
      <button onClick={onRequestClose}>閉じる</button>
    </Modal>
  )
}

export default DetailModal
