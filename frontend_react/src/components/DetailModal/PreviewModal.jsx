import React from 'react';
import Modal from 'react-modal';
import './DetailModal.scss';

const PreviewModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  className,
  children,
  type = 'default'  // 'image' | 'video' | 'default'
}) => {
  const baseClassName = `preview-modal ${type}-preview-modal ${className || ''}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={baseClassName}
      ariaHideApp={false}
    >
      <button className="modal-close-btn" onClick={onRequestClose}>×</button>
      <div className={`preview-container ${type}-preview-container`}>
        {children}
      </div>
    </Modal>
  );
};

export default PreviewModal;
