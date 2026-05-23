import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <button className={styles.close} onClick={onClose} aria-label="Close modal">✕</button>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
