import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../Firebase/Firebase.config";
import ConfirmationPopup from "./ConfirmationPopup";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="m-2 px-1 py-5 flex flex-col align-middle rounded-lg  shadow-md bg-white">
      <h1 className="mt-2 text-2xl text-center">Shopping Cart</h1>
      <div className="p-2 mx-2 my-3 text-xl text-center rounded-lg font-semibold xl:text-2xl bg-gray-800 text-white">
        <h2>
          Subtotal ({cartItems.length} item) : ₹ {cartTotal}
        </h2>
      </div>
      {currentUser ? (
        <>
          <ConfirmationPopup />
        </>
      ) : (
        <Link
          onClick={signInWithGoogle}
          className="text-center px-4 py-2 w-40 m-auto text-lg text-white  rounded-lg bg-blue-700"
          to="/"
        >
          Proceed To Buy
        </Link>
      )}
    </div>
  );
}
