declare module '@bighoot/modal-library' {
  import { ReactNode } from 'react';

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
  }

  const Modal: React.FC<ModalProps>;

  export default Modal;
}
