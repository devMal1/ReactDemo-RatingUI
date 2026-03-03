import { Button } from "./button-component"

interface ModalProps {
  isOpen: boolean
  rating: number
  onModalClose: () => void
}

export const Modal = ({ isOpen, rating, onModalClose }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you!</h2>
        <p>
          Your rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <Button
          className="close-btn"
          disabled={false}
          handleClick={onModalClose}
        >
          Close
        </Button>
      </div>
    </div>
  )
}
