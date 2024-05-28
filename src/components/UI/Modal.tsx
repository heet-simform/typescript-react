import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export type ModelHandle = {
  open: () => void;
};

const Modal = forwardRef<ModelHandle, ModalProps>(function (
  { children, onClose },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
