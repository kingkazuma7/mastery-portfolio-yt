import React from 'react'
import './DetailModal.scss';
import Modal from 'react-modal';

const DetailModal = ({ isOpen, children, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Work Details"
    >
      {children}
    </Modal>
  )
}

export default DetailModal
