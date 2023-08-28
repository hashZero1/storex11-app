import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ConfirmationPopup() {
  const { cartItems } = useContext(CartContext);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const emptyCart = () => (cartItems.length = []);
  return (
    <>
      <Button
        className="text-center py-2 w-40 m-auto text-lg text-white rounded-lg bg-red-600"
        onClick={() => props.setOpenModal("pop-up")}
      >
        Place Order Now
      </Button>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Order Confirmation ?
            </h3>
            <div className="flex justify-center gap-4">
              <Link
                to="/order"
                className="text-center py-2 w-40 text-white rounded-lg bg-red-600"
                onClick={() => {
                  props.setOpenModal(undefined);
                  emptyCart();
                }}
              >
                Yes, I'm sure
              </Link>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
