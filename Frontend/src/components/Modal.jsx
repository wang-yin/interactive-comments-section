import { createPortal } from "react-dom"

function Modal ({ children, onClose}) {
  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[10] flex items-center justify-center bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] transition-all duration-500"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none px-4">
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>
    </>,
    document.body
  )
}

export default Modal